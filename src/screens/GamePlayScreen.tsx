import { useParams, Link } from 'react-router-dom'
import { useI18n } from '../i18n/context'
import { GAME_DEFS } from '../data/games'
import { useProgressStore } from '../stores/progress-store'
import { useAchievementStore } from '../stores/achievement-store'
import { useState, useCallback, type ReactNode } from 'react'
import confetti from 'canvas-confetti'
import type { Lang } from '../types/culture'
import type { GameId } from '../types/culture'

// ── Simple quiz game component ──────────────────────────────
function GreetingGame({ onFinish }: { onFinish: (score: number, total: number) => void }) {
  const { t, lang } = useI18n()
  const [q, setQ] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)

  const questions = [
    { greeting: { native: '你好', romanization: 'Nǐ hǎo' }, answer: 'China', options: ['Japan', 'China', 'South Korea', 'Vietnam'] },
    { greeting: { native: 'こんにちは', romanization: 'Konnichiwa' }, answer: 'Japan', options: ['China', 'Japan', 'Thailand', 'India'] },
    { greeting: { native: '안녕하세요', romanization: 'Annyeonghaseyo' }, answer: 'South Korea', options: ['South Korea', 'China', 'Japan', 'Philippines'] },
    { greeting: { native: 'Hallo', romanization: '' }, answer: 'Germany', options: ['France', 'Germany', 'Spain', 'UK'] },
    { greeting: { native: 'Bonjour', romanization: '' }, answer: 'France', options: ['Germany', 'Italy', 'France', 'Canada'] },
    { greeting: { native: 'สวัสดี', romanization: 'Sawasdee' }, answer: 'Thailand', options: ['Vietnam', 'Thailand', 'Indonesia', 'Singapore'] },
    { greeting: { native: 'Ciao', romanization: '' }, answer: 'Italy', options: ['Spain', 'Italy', 'France', 'Brazil'] },
    { greeting: { native: 'Merhaba', romanization: '' }, answer: 'Turkey', options: ['UAE', 'Turkey', 'Russia', 'Egypt'] },
  ]

  const current = questions[q]
  const isLast = q >= questions.length - 1

  const handleAnswer = useCallback((idx: number) => {
    setSelected(idx)
    const correct = current.options[idx] === current.answer
    if (correct) setScore((s) => s + 1)
    setTimeout(() => {
      setSelected(null)
      if (isLast) {
        onFinish(score + (correct ? 1 : 0), questions.length)
      } else {
        setQ((s) => s + 1)
      }
    }, 800)
  }, [q, score, current, isLast, onFinish])

  return (
    <div className="space-y-4">
      <div className="flex justify-between text-sm text-gray-400">
        <span>{t('questionLabel')} {q + 1}/{questions.length}</span>
        <span>{t('scoreLabel')}: {score}</span>
      </div>
      <div className="text-center py-6 card">
        <p className="text-4xl mb-1">{current.greeting.native}</p>
        {current.greeting.romanization && (
          <p className="text-sm text-gray-400">{current.greeting.romanization}</p>
        )}
        <p className="text-sm text-gray-500 mt-2">{t('gameGreetingDesc')}</p>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {current.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleAnswer(i)}
            disabled={selected !== null}
            className={`p-3 rounded-xl text-sm font-medium transition-all active:scale-95 ${
              selected === i
                ? opt === current.answer
                  ? 'bg-green-100 border-green-400 text-green-700'
                  : 'bg-red-100 border-red-400 text-red-700'
                : selected !== null && opt === current.answer
                  ? 'bg-green-100 border-green-400 text-green-700'
                  : 'bg-white dark:bg-cool-800 border border-gray-200 dark:border-gray-700'
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  )
}

// ── GamePlay Screen ─────────────────────────────────────────
export function GamePlayScreen() {
  const { gameId } = useParams<{ gameId: string }>()
  const { t, lang } = useI18n()
  const addXP = useProgressStore((s) => s.addXP)
  const recordGame = useProgressStore((s) => s.recordGamePlayed)
  const addStreak = useProgressStore((s) => s.recordStreak)
  const unlock = useAchievementStore((s) => s.unlock)
  const soundEnabled = useProgressStore((s) => s.bestStreak) > -999 // always true

  const [phase, setPhase] = useState<'playing' | 'result'>('playing')
  const [result, setResult] = useState({ score: 0, total: 0 })

  const game = GAME_DEFS.find((g) => g.id === gameId)

  const handleFinish = useCallback((score: number, total: number) => {
    const pct = Math.round((score / total) * 100)
    setResult({ score, total })
    setPhase('result')

    const xp = score * 10 + (pct >= 100 ? 50 : 0)
    addXP(xp)
    recordGame()

    if (soundEnabled && pct >= 100 && gameId !== 'speed-round') {
      confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } })
    }

    if (gameId === 'culture-master' && pct >= 100) unlock('quiz_master')
    if (gameId === 'bias' && score === total) unlock('bias_buster')
    unlock('gamer')
  }, [addXP, recordGame, unlock, gameId, soundEnabled])

  if (!game) {
    return (
      <div className="py-6 text-center">
        <p>{t('errorGeneric')}</p>
        <Link to="/games" className="text-coral-500 text-sm mt-4 block">{t('backToGames')}</Link>
      </div>
    )
  }

  return (
    <div className="py-5 space-y-4 animate-fade-in pb-24">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Link to="/games" className="text-coral-500 text-sm">{t('backBtn')}</Link>
      </div>
      <div className="text-center">
        <span className="text-5xl">{game.icon}</span>
        <h1 className="text-2xl font-bold font-fredoka mt-2">{game.name[lang] ?? game.name.en}</h1>
      </div>

      {/* Game body */}
      {phase === 'playing' && (
        <>
          {gameId === 'greeting' && <GreetingGame onFinish={handleFinish} />}
          {gameId !== 'greeting' && (
            <div className="text-center py-12 card">
              <span className="text-6xl">{game.icon}</span>
              <p className="mt-4 text-gray-500 dark:text-gray-400">{t('loading')}</p>
              <p className="text-xs text-gray-400 mt-2">Coming soon</p>
              <button
                onClick={() => handleFinish(5, 8)}
                className="mt-6 px-6 py-2 bg-coral-500 text-white rounded-full text-sm"
              >
                {t('playAgain')}
              </button>
            </div>
          )}
        </>
      )}

      {/* Result */}
      {phase === 'result' && (
        <div className="card text-center py-6 space-y-3">
          <span className="text-6xl">
            {result.score === result.total ? '🎉' : result.score > result.total / 2 ? '👏' : '💪'}
          </span>
          <h2 className="text-xl font-bold font-fredoka">
            {result.score === result.total ? t('resultPerfect') : result.score > result.total / 2 ? t('resultGreat') : t('resultTryAgain')}
          </h2>
          <div className="grid grid-cols-3 gap-2 mt-3">
            <div className="p-2"><p className="text-2xl font-bold">{result.score}/{result.total}</p><p className="text-xs text-gray-400">{t('scoreLabel')}</p></div>
            <div className="p-2"><p className="text-2xl font-bold">{Math.round((result.score / result.total) * 100)}%</p><p className="text-xs text-gray-400">{t('resultAccuracy')}</p></div>
            <div className="p-2"><p className="text-2xl font-bold">+{result.score * 10}</p><p className="text-xs text-gray-400">{t('resultXPEarned')}</p></div>
          </div>
          <div className="flex gap-3 justify-center mt-4">
            <button
              onClick={() => { setPhase('playing'); setResult({ score: 0, total: 0 }) }}
              className="px-6 py-2 bg-coral-500 text-white rounded-full text-sm font-medium active:scale-95 transition-transform"
            >
              {t('playAgain')}
            </button>
            <Link
              to="/games"
              className="px-6 py-2 bg-gray-100 dark:bg-cool-800 text-gray-600 dark:text-gray-300 rounded-full text-sm font-medium"
            >
              {t('backToGames')}
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
