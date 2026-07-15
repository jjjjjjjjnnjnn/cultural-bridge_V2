import type { LocalizedText } from './culture'

export type AchievementId =
  | 'first_steps'       // Visit first culture
  | 'explorer'          // Visit 5 cultures
  | 'globetrotter'      // Visit all cultures in one region
  | 'gamer'             // Complete any game
  | 'quiz_master'       // Perfect score on Culture Master
  | 'polyglot'          // Switch language 3+ times
  | 'bias_buster'       // Answer 10 bias questions correctly in a row
  | 'foodie'            // Find all food items across cultures
  | 'streak_7'          // 7-day streak
  | 'scholar'           // Visit 15 cultures
  | 'speed_demon'       // Complete speed round with >80% in under 30s
  | 'cultural_bridge'   // Complete all games

export interface AchievementDef {
  id: AchievementId
  name: LocalizedText
  desc: LocalizedText
  icon: string
  color: string
  hidden?: boolean       // Secret achievement; show "???" until unlocked
}

export interface AchievementState {
  unlocked: AchievementId[]
  unlockedAt: Partial<Record<AchievementId, number>>  // Timestamp
  toastQueue: AchievementId[]   // Pending popup animations
}
