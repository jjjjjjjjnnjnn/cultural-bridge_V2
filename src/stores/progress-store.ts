import { create } from 'zustand'
import { persist } from 'zustand/middleware'

// ── Rank / Level system ────────────────────────────────────
// XP thresholds for each level (cumulative)
export const LEVEL_THRESHOLDS: number[] = Array.from({ length: 50 }, (_, i) => {
  // Exponential-ish curve: starts easy, gets harder
  return Math.floor(100 * Math.pow(1.15, i))
})

export const RANK_NAMES: Record<number, string> = {
  1: 'levelTraveler',
  2: 'levelExplorer',
  3: 'levelExplorer',
  4: 'levelAmbassador',
  5: 'levelAmbassador',
  6: 'levelScholar',
  7: 'levelBridgeBuilder',
  8: 'levelCulturalMaster',
  9: 'levelCulturalMaster',
}

export function getLevel(xp: number): number {
  for (let i = LEVEL_THRESHOLDS.length - 1; i >= 0; i--) {
    if (xp >= LEVEL_THRESHOLDS[i]) return i + 1
  }
  return 1
}

export function getLevelProgress(xp: number): { current: number; next: number; pct: number } {
  const level = getLevel(xp)
  const currentThreshold = LEVEL_THRESHOLDS[level - 1] ?? 0
  const nextThreshold = LEVEL_THRESHOLDS[level] ?? currentThreshold * 2
  const intoLevel = xp - currentThreshold
  const levelRange = nextThreshold - currentThreshold
  return { current: intoLevel, next: levelRange, pct: Math.min(100, (intoLevel / levelRange) * 100) }
}

// ── Store ──────────────────────────────────────────────────
export interface ProgressState {
  xp: number
  totalGamesPlayed: number
  culturesVisited: string[]          // culture ids
  bestStreak: number
  totalBiasesViewed: number
  streaks: string[]                  // ISO date strings for each day active
  lastActiveDate: string | null

  // Actions
  addXP: (amount: number) => void
  recordGamePlayed: () => void
  recordCultureVisit: (cultureId: string) => void
  recordBiasViewed: (count: number) => void
  recordStreak: (s: number) => void
  checkDailyStreak: () => void
  resetProgress: () => void
}

const initialState = {
  xp: 0,
  totalGamesPlayed: 0,
  culturesVisited: [] as string[],
  bestStreak: 0,
  totalBiasesViewed: 0,
  streaks: [] as string[],
  lastActiveDate: null as string | null,
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      ...initialState,

      addXP: (amount) => set((s) => ({ xp: s.xp + amount })),

      recordGamePlayed: () =>
        set((s) => ({ totalGamesPlayed: s.totalGamesPlayed + 1 })),

      recordCultureVisit: (cultureId) =>
        set((s) => {
          if (s.culturesVisited.includes(cultureId)) return s
          return { culturesVisited: [...s.culturesVisited, cultureId] }
        }),

      recordBiasViewed: (count) =>
        set((s) => ({ totalBiasesViewed: s.totalBiasesViewed + count })),

      recordStreak: (streak) =>
        set((s) => {
          if (streak > s.bestStreak) return { bestStreak: streak }
          return s
        }),

      checkDailyStreak: () => {
        const today = new Date().toISOString().split('T')[0]
        const { streaks, lastActiveDate } = get()
        if (lastActiveDate === today) return // Already recorded today

        const newStreaks = [...streaks]
        if (!newStreaks.includes(today)) {
          newStreaks.push(today)
        }

        // Count consecutive days
        const sorted = [...newStreaks].sort().reverse()
        let consecutive = 0
        const now = new Date(today)
        for (const d of sorted) {
          const expected = new Date(now.getTime() - consecutive * 86400000)
            .toISOString()
            .split('T')[0]
          if (d === expected) {
            consecutive++
          } else if (d < expected) {
            break
          }
        }

        set({ streaks: newStreaks, lastActiveDate: today })
        get().recordStreak(consecutive)
      },

      resetProgress: () => set({ ...initialState }),
    }),
    { name: 'cb-progress' },
  ),
)
