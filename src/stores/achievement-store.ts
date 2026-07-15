import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { AchievementId, AchievementState } from '../types/achievement'

const initialAchievementState: AchievementState = {
  unlocked: [],
  unlockedAt: {},
  toastQueue: [],
}

interface AchievementStore extends AchievementState {
  unlock: (id: AchievementId) => void
  dismissToast: () => void
  reset: () => void
}

export const useAchievementStore = create<AchievementStore>()(
  persist(
    (set, get) => ({
      ...initialAchievementState,

      unlock: (id) =>
        set((s) => {
          if (s.unlocked.includes(id)) return s // Already unlocked
          const now = Date.now()
          return {
            unlocked: [...s.unlocked, id],
            unlockedAt: { ...s.unlockedAt, [id]: now },
            toastQueue: [...s.toastQueue, id],
          }
        }),

      dismissToast: () =>
        set((s) => ({
          toastQueue: s.toastQueue.slice(1),
        })),

      reset: () => set({ ...initialAchievementState }),
    }),
    { name: 'cb-achievements' },
  ),
)
