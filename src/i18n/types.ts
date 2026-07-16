// All translation keys used in the app.
// Every language file must export an object conforming to this interface.
// Missing key → TypeScript compile error.

export interface TranslationKeys {
  // ── Navigation ─────────────────────────────────────────
  navHome: string
  navCultures: string
  navGames: string
  navAchievements: string
  navAbout: string
  navProfile: string

  // ── Language ───────────────────────────────────────────
  langSelectTitle: string
  langSelectSubtitle: string
  langEn: string
  langZh: string
  langDe: string
  langFr: string
  langEs: string
  langTr: string
  langAr: string
  langPt: string
  langJa: string

  // ── Splash ─────────────────────────────────────────────
  splashTitle: string
  splashMotto: string

  // ── Home ───────────────────────────────────────────────
  heroTitle1: string
  heroTitle2: string
  heroDesc: string
  btnExplore: string
  btnPlay: string
  sectionCultures: string
  sectionGames: string
  sectionSeeAll: string
  sectionDailyFact: string
  dailyStreakLabel: string
  streakDays: string

  // ── Culture List ───────────────────────────────────────
  culturesTitle: string
  culturesDesc: string
  searchPlaceholder: string
  filterRegion: string
  filterAll: string

  // ── Culture Detail ─────────────────────────────────────
  greetingTitle: string
  foodTitle: string
  festivalTitle: string
  landmarkTitle: string
  etiquetteTitle: string
  funFactsTitle: string
  biasTitle: string
  biasMyth: string
  biasFact: string
  quickStatsTitle: string
  musicArtTitle: string
  phrasesTitle: string
  quizTitle: string
  backBtn: string

  // ── Games ──────────────────────────────────────────────
  gamesTitle: string
  gamesDesc: string
  gameGreetingName: string
  gameGreetingDesc: string
  gameFoodMatchName: string
  gameFoodMatchDesc: string
  gameMythFactName: string
  gameMythFactDesc: string
  gameFestivalName: string
  gameFestivalDesc: string
  gameMasterName: string
  gameMasterDesc: string
  gameFlagName: string
  gameFlagDesc: string
  gameLandmarkName: string
  gameLandmarkDesc: string
  gameSpeedName: string
  gameSpeedDesc: string

  // ── Gameplay ───────────────────────────────────────────
  scoreLabel: string
  questionLabel: string
  streakLabel: string
  timerLabel: string
  correctLabel: string
  wrongLabel: string
  nextBtn: string
  checkBtn: string
  playAgain: string
  backToGames: string
  resultPerfect: string
  resultGreat: string
  resultGood: string
  resultTryAgain: string
  resultTime: string
  resultAccuracy: string
  resultStreak: string
  resultXPEarned: string

  // ── Achievements ───────────────────────────────────────
  achievementsTitle: string
  achievementsDesc: string
  unlockedBadge: string
  lockedBadge: string
  progressLabel: string
  achFirstStepsName: string
  achFirstStepsDesc: string
  achExplorerName: string
  achExplorerDesc: string
  achGlobetrotterName: string
  achGlobetrotterDesc: string
  achGamerName: string
  achGamerDesc: string
  achQuizMasterName: string
  achQuizMasterDesc: string
  achPolyglotName: string
  achPolyglotDesc: string
  achBiasBusterName: string
  achBiasBusterDesc: string
  achFoodieName: string
  achFoodieDesc: string
  achStreak7Name: string
  achStreak7Desc: string
  achScholarName: string
  achScholarDesc: string
  achSpeedDemonName: string
  achSpeedDemonDesc: string
  achCulturalBridgeName: string
  achCulturalBridgeDesc: string

  // ── Profile ────────────────────────────────────────────
  profileTitle: string
  profileLevel: string
  profileTotalXP: string
  profileGamesPlayed: string
  profileAchievements: string
  profileCulturesVisited: string
  profileBestStreak: string
  profileBiasesLearned: string
  profileLearningTime: string
  levelTraveler: string
  levelExplorer: string
  levelAmbassador: string
  levelScholar: string
  levelBridgeBuilder: string
  levelCulturalMaster: string

  // ── Settings ───────────────────────────────────────────
  settingsTitle: string
  soundLabel: string
  darkModeLabel: string
  lightModeLabel: string
  systemModeLabel: string
  resetProgress: string
  resetConfirm: string
  resetCancel: string

  // ── About ──────────────────────────────────────────────
  aboutTitle: string
  aboutDesc1: string
  aboutDesc2: string
  aboutPledge: string
  pledge1: string
  pledge2: string
  pledge3: string
  pledge4: string
  pledge5: string
  aboutCredits: string
  aboutVersion: string

  // ── Shared ─────────────────────────────────────────────
  loading: string
  errorGeneric: string
  retry: string
  close: string
  cancel: string
  confirm: string
  offlineBanner: string
  installPrompt: string

  // ── Audio ──────────────────────────────────────────────
  listenPronunciation: string
  audioNotSupported: string

  // ── Game Questions ──────────────────────────────────────
  biasQ1: string; biasQ2: string; biasQ3: string
  biasQ4: string; biasQ5: string; biasQ6: string
  biasQ7: string; biasQ8: string; biasQ9: string
  biasQ10: string; biasQ11: string; biasQ12: string
  biasQ13: string; biasQ14: string; biasQ15: string
  biasQ16: string; biasQ17: string; biasQ18: string
  biasQ19: string; biasQ20: string; biasQ21: string
  biasQ22: string; biasQ23: string; biasQ24: string
  masterQ1: string; masterQ2: string; masterQ3: string
  masterQ4: string; masterQ5: string; masterQ6: string
  masterQ7: string; masterQ8: string; masterQ9: string
  masterQ10: string; masterQ11: string; masterQ12: string
  masterQ13: string; masterQ14: string; masterQ15: string
  masterQ16: string; masterQ17: string; masterQ18: string
  masterQ19: string; masterQ20: string; masterQ21: string
  masterQ22: string; masterQ23: string; masterQ24: string
  masterQ25: string
  masterQ26: string
  masterQ27: string
  masterQ28: string
  masterQ29: string
  masterQ30: string
  masterQ31: string
  masterQ32: string
  masterQ33: string
  masterQ34: string
  masterQ35: string
}
