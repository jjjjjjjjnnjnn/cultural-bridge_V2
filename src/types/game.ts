import type { Lang, GameId } from './culture'

// ── Game state ─────────────────────────────────────────────
export interface GameQuestion {
  id: string
  prompt: Record<Lang, string>
  options: Record<Lang, string>[]
  correctIndex: number
  cultureId?: string
  emoji?: string
  imageUrl?: string
}

export interface GameConfig {
  id: GameId
  totalQuestions: number
  timeLimit?: number          // Seconds; undefined = untimed
  pointsPerCorrect: number
  bonusForPerfect: number
  bonusForSpeed: number       // Extra pts for fast answer
}

export type GamePhase = 'intro' | 'playing' | 'result'

export interface GameState {
  phase: GamePhase
  currentQuestion: number
  score: number
  streak: number              // Consecutive correct
  bestStreak: number
  answers: GameAnswer[]
  startTime: number
  endTime?: number
  totalTimeMs: number
}

export interface GameAnswer {
  questionId: string
  selectedIndex: number
  correct: boolean
  timeMs: number
}
