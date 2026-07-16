import { useParams, Link } from 'react-router-dom'
import { useI18n } from '../i18n/context'
import { GAME_DEFS } from '../data/games'
import { useProgressStore } from '../stores/progress-store'
import { useAchievementStore } from '../stores/achievement-store'
import { CULTURE_META } from '../data/cultures/index'
import { useState, useCallback, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'

// Helper: get localized culture name
function cName(id: string | undefined, lang: string): string {
  if (!id) return ''
  const meta = CULTURE_META.find(c => c.id === id)
  return meta?.name?.[lang] ?? meta?.name?.en ?? id
}



// ── Shared types ────────────────────────────────────────────
interface GameResult {
  score: number; total: number; xp: number
  streak: number; timeMs?: number; accuracy: number
  perfect: boolean
}
type GamePhase = 'intro' | 'playing' | 'result'

// ── Question generators (client-side, from CULTURE_META) ───
function shuffle<T>(arr: T[]): T[] { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]] } return a }

function pickWrong(correct: string | undefined, pool: (string | undefined)[], n: number): string[] {
  return shuffle(pool.filter((x): x is string => x !== undefined && x !== correct)).slice(0, n)
}

// ── Greeting Game ───────────────────────────────────────────
const GREETING_QA = [
  { native: '你好', romanization: 'Nǐ hǎo', cultureId: 'china' },
  { native: 'こんにちは', romanization: 'Konnichiwa', cultureId: 'japan' },
  { native: '안녕하세요', romanization: 'Annyeonghaseyo', cultureId: 'korea' },
  { native: 'Hallo', romanization: '', cultureId: 'germany' },
  { native: 'Bonjour', romanization: '', cultureId: 'france' },
  { native: 'สวัสดี', romanization: 'Sawasdee', cultureId: 'thailand' },
  { native: 'Ciao', romanization: '', cultureId: 'italy' },
  { native: 'Merhaba', romanization: '', cultureId: 'turkey' },
  { native: 'Hola', romanization: '', cultureId: 'spain' },
  { native: 'Olá', romanization: '', cultureId: 'brazil' },
  { native: 'नमस्ते', romanization: 'Namaste', cultureId: 'india' },
  { native: 'Привет', romanization: 'Privet', cultureId: 'russia' },
]

const GREETING_QA_EXTRA = [
  { native: 'ٱلسَّلَامُ عَلَيْكُمْ', romanization: 'As-salamu alaykum', cultureId: 'uae' },
  { native: 'مرحبا', romanization: 'Marhaba', cultureId: 'egypt' },
  { native: 'Dumela', romanization: '', cultureId: 'southafrica' },
  { native: 'Kia ora', romanization: '', cultureId: 'newzealand' },
  { native: 'Selamat pagi', romanization: '', cultureId: 'indonesia' },
  { native: 'Hej', romanization: '', cultureId: 'sweden' },
  { native: 'Dzień dobry', romanization: '', cultureId: 'poland' },
  { native: 'Χαίρετε', romanization: 'Chairete', cultureId: 'greece' },
  { native: 'Jambo', romanization: '', cultureId: 'kenya' },
  { native: 'Hei', romanization: '', cultureId: 'finland' },
  { native: 'Chào bạn', romanization: '', cultureId: 'vietnam' },
  { native: 'Shalom', romanization: '', cultureId: 'israel' },
]

function GreetingGame({ onFinish }: { onFinish: (r: GameResult) => void }) {
  const { t, lang } = useI18n()
  const [q, setQ] = useState(0)
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [bestStreak, setBestStreak] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [startTime] = useState(Date.now())

  const questions = useMemo(() => {
    const combined = [...GREETING_QA, ...GREETING_QA_EXTRA]
    const picked = shuffle(combined).slice(0, 8)
    const allCultures = CULTURE_META.map((c: any) => c.id).filter(Boolean)
    return picked.map((item) => ({
      ...item,
      options: shuffle([item.cultureId, ...pickWrong(item.cultureId, allCultures, 3)]),
    }))
  }, [])

  const current = questions[q]; const isLast = q >= questions.length - 1

  const handle = useCallback((idx: number) => {
    setSelected(idx)
    const ok = current.options[idx] === current.cultureId
    if (ok) { const ns = streak + 1; setScore((s) => s + 1); setStreak(ns); setBestStreak((b) => Math.max(b, ns)) }
    else setStreak(0)
    setTimeout(() => {
      setSelected(null)
      if (isLast) { const total = questions.length; const acc = Math.round(((score + (ok ? 1 : 0)) / total) * 100)
        onFinish({ score: score + (ok ? 1 : 0), total, xp: (score + (ok ? 1 : 0)) * 10 + (acc >= 100 ? 50 : 0), streak: bestStreak, accuracy: acc, perfect: acc >= 100, timeMs: Date.now() - startTime }) }
      else setQ((s) => s + 1)
    }, 600)
  }, [q, score, streak, bestStreak, current, isLast, onFinish, questions.length, startTime])

  return (
    <div className="space-y-4">
      <div className="flex justify-between text-sm text-gray-400"><span>{t('questionLabel')} {q + 1}/{questions.length}</span><span>{t('scoreLabel')}: {score}</span><span className="text-coral-500">🔥 {streak}</span></div>
      <div className="text-center py-8 card"><p className="text-5xl mb-2">{current.native}</p>{current.romanization && <p className="text-sm text-gray-400">{current.romanization}</p>}<p className="text-sm text-gray-500 mt-3">{t('gameGreetingDesc')}</p></div>
      <div className="grid grid-cols-2 gap-2">
        {current.options.map((opt, i) => {
          let cls = 'bg-white dark:bg-cool-800 border border-gray-200 dark:border-gray-700'
          if (selected !== null) {
            if (i === selected) cls = opt === current.cultureId ? 'bg-green-100 border-green-400 text-green-700 dark:bg-green-500/20' : 'bg-red-100 border-red-400 text-red-700 dark:bg-red-500/20 animate-shake'
            else if (opt === current.cultureId) cls = 'bg-green-100 border-green-400 text-green-700 dark:bg-green-500/20'
          }
          return <button key={i} onClick={() => handle(i)} disabled={selected !== null} className={`p-4 rounded-xl text-sm font-medium transition-all active:scale-95 ${cls}`}>{cName(opt, lang)}</button>
        })}
      </div>
    </div>
  )
}

// ── Food Match Game ─────────────────────────────────────────
const FOOD_QA = [
  { food: '🥟 Dumplings', cultureId: 'china' }, { food: '🍣 Sushi', cultureId: 'japan' }, { food: '🥨 Pretzel', cultureId: 'germany' },
  { food: '🥐 Croissant', cultureId: 'france' }, { food: '🍝 Spaghetti', cultureId: 'italy' }, { food: '🥘 Paella', cultureId: 'spain' },
  { food: '🍛 Curry', cultureId: 'india' }, { food: '🌮 Tacos', cultureId: 'mexico' }, { food: '🥩 Barbecue', cultureId: 'usa' },
  { food: '🍜 Phở', cultureId: 'vietnam' }, { food: '🍢 Satay', cultureId: 'indonesia' }, { food: '🥟 Manti', cultureId: 'turkey' },
]

const FOOD_QA_EXTRA = [
  { food: '🥟 Pierogi', cultureId: 'poland' },
  { food: '🫓 Injera', cultureId: 'ethiopia' },
  { food: '🥙 Shawarma', cultureId: 'lebanon' },
  { food: '🥬 Kimchi', cultureId: 'korea' },
  { food: '🍲 Feijoada', cultureId: 'brazil' },
  { food: '🥟 Empanada', cultureId: 'argentina' },
  { food: '🍛 Bunny Chow', cultureId: 'southafrica' },
  { food: '🥖 Baguette', cultureId: 'france' },
  { food: '🥣 Borscht', cultureId: 'ukraine' },
  { food: '🍚 Hainanese Chicken Rice', culture: 'Singapore' },
  { food: '🥘 Couscous', cultureId: 'morocco' },
  { food: '🍰 Pavlova', cultureId: 'newzealand' },
]

function FoodMatchGame({ onFinish }: { onFinish: (r: GameResult) => void }) {
  const { t } = useI18n()
  const [q, setQ] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [startTime] = useState(Date.now())

  const questions = useMemo(() => {
    const combined = [...FOOD_QA, ...FOOD_QA_EXTRA]
    const picked = shuffle(combined).slice(0, 8)
    const allCultures = [...new Set(picked.map((p) => p.cultureId))].filter(Boolean) as string[]
    return picked.map((p) => ({ ...p, options: shuffle([p.cultureId, ...pickWrong(p.cultureId, allCultures, 2)]) }))
  }, [])

  const current = questions[q]; const isLast = q >= questions.length - 1

  const handle = useCallback((idx: number) => {
    setSelected(idx)
    const ok = current.options[idx] === current.cultureId
    if (ok) setScore((s) => s + 1)
    setTimeout(() => {
      setSelected(null)
      if (isLast) { const total = questions.length; const s = score + (ok ? 1 : 0); const acc = Math.round((s / total) * 100)
        onFinish({ score: s, total, xp: s * 15 + (acc >= 100 ? 50 : 0), streak: 0, accuracy: acc, perfect: acc >= 100, timeMs: Date.now() - startTime }) }
      else setQ((s) => s + 1)
    }, 600)
  }, [q, score, current, isLast, onFinish, questions.length, startTime])

  return (
    <div className="space-y-4">
      <div className="flex justify-between text-sm text-gray-400"><span>{t('questionLabel')} {q + 1}/{questions.length}</span><span>{t('scoreLabel')}: {score}</span></div>
      <div className="text-center py-6 card"><p className="text-6xl mb-3">{current.food}</p><p className="text-sm text-gray-500">{t('gameFoodMatchDesc')}</p></div>
      <div className="grid grid-cols-3 gap-2">
        {current.options.map((opt, i) => {
          let cls = 'bg-white dark:bg-cool-800 border border-gray-200 dark:border-gray-700'
          if (selected !== null) {
            if (i === selected) cls = opt === current.cultureId ? 'bg-green-100 border-green-400 text-green-700 dark:bg-green-500/20' : 'bg-red-100 border-red-400 text-red-700 dark:bg-red-500/20 animate-shake'
            else if (opt === current.cultureId) cls = 'bg-green-100 border-green-400 text-green-700 dark:bg-green-500/20'
          }
          return <button key={i} onClick={() => handle(i)} disabled={selected !== null} className={`p-3 rounded-xl text-sm font-medium transition-all active:scale-95 ${cls}`}>{opt}</button>
        })}
      </div>
    </div>
  )
}

// ── Myth/Fact Game ──────────────────────────────────────────
const BIAS_QA = [
  { statementKey: 'biasQ1', statement: 'All Chinese people know kung fu', answer: 'myth' },
  { statementKey: 'biasQ2', statement: 'China has 56 officially recognized ethnic groups', answer: 'fact' },
  { statementKey: 'biasQ3', statement: 'All Germans drink beer every day', answer: 'myth' },
  { statementKey: 'biasQ4', statement: 'Germany has over 1,500 types of sausage', answer: 'fact' },
  { statementKey: 'biasQ5', statement: 'Everyone in Spain takes a siesta every afternoon', answer: 'myth' },
  { statementKey: 'biasQ6', statement: 'France is the most visited country in the world', answer: 'fact' },
  { statementKey: 'biasQ7', statement: 'All Italians speak with their hands', answer: 'myth' },
  { statementKey: 'biasQ8', statement: 'India has 22 official languages', answer: 'fact' },
  { statementKey: 'biasQ9', statement: 'All Brazilians play soccer', answer: 'myth' },
  { statementKey: 'biasQ10', statement: 'Turkey is on two continents', answer: 'fact' },
  { statementKey: 'biasQ11', statement: 'All Japanese people bow to greet', answer: 'myth' },
  { statementKey: 'biasQ12', statement: 'South Korea has the fastest internet in the world', answer: 'fact' },
]

const BIAS_QA_EXTRA = [
  { statementKey: 'biasQ13', statement: 'All Africans live in huts', answer: 'myth' },
  { statementKey: 'biasQ19', emoji: '🎬', statement: 'Nigeria has the largest film industry (Nollywood) in Africa', answer: 'fact' },
  { statementKey: 'biasQ20', emoji: '🌍', statement: 'All Middle Eastern people are Arab', answer: 'myth' },
  { statementKey: 'biasQ21', emoji: '🗺️', statement: 'Iran and Saudi Arabia share no land border but are major cultural regions', answer: 'fact' },
  { statementKey: 'biasQ15', statement: 'All Russians drink vodka every day', answer: 'myth' },
  { statementKey: 'biasQ22', emoji: '🌊', statement: 'Lake Baikal in Russia is the deepest lake in the world', answer: 'fact' },
  { statementKey: 'biasQ16', statement: 'All Canadians live in igloos', answer: 'myth' },
  { statementKey: 'biasQ23', emoji: '🍁', statement: 'Canada has over 600 Indigenous First Nation communities', answer: 'fact' },
  { statementKey: 'biasQ17', statement: 'All Australians are surfers', answer: 'myth' },
  { statement: 'Australia has over 250 Indigenous language groups', answer: 'fact' },
  { statementKey: 'biasQ18', statement: 'All Scandinavian countries use the same language', answer: 'myth' },
  { statementKey: 'biasQ24', emoji: '💰', statement: 'Norway has the world’s largest sovereign wealth fund', answer: 'fact' },
]

function BiasGame({ onFinish }: { onFinish: (r: GameResult) => void }) {
  const { t } = useI18n()
  const [q, setQ] = useState(0)
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [bestStreak, setBestStreak] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [startTime] = useState(Date.now())

  const questions = useMemo(() => {
    const combined = [...BIAS_QA, ...BIAS_QA_EXTRA]
    return shuffle(combined).slice(0, 10)
  }, [])

  const current = questions[q]; const isLast = q >= questions.length - 1

  const handle = useCallback((ans: string) => {
    setSelected(ans)
    const ok = ans === current.answer
    if (ok) { const ns = streak + 1; setScore((s) => s + 1); setStreak(ns); setBestStreak((b) => Math.max(b, ns)) }
    else setStreak(0)
    setTimeout(() => {
      setSelected(null)
      if (isLast) { const total = questions.length; const s = score + (ok ? 1 : 0); const acc = Math.round((s / total) * 100)
        onFinish({ score: s, total, xp: s * 10 + (acc >= 100 ? 50 : 0), streak: bestStreak, accuracy: acc, perfect: acc >= 100, timeMs: Date.now() - startTime }) }
      else setQ((s) => s + 1)
    }, 800)
  }, [q, score, streak, bestStreak, current, isLast, onFinish, questions.length, startTime])

  return (
    <div className="space-y-4">
      <div className="flex justify-between text-sm text-gray-400"><span>{t('questionLabel')} {q + 1}/{questions.length}</span><span>{t('scoreLabel')}: {score}</span><span className="text-coral-500">🔥 {streak}</span></div>
      <div className="text-center py-8 card"><p className="text-lg font-semibold">"{(t as any)(current.statementKey) || current.statement}"</p><p className="text-sm text-gray-500 mt-3">{t('gameMythFactDesc')}</p></div>
      <div className="grid grid-cols-2 gap-3">
        {['myth', 'fact'].map((ans) => {
          let cls = 'bg-white dark:bg-cool-800 border-2 border-gray-200 dark:border-gray-700'
          if (selected === ans) cls = ans === current.answer ? 'bg-green-50 border-green-400 text-green-700 dark:bg-green-500/20' : 'bg-red-50 border-red-400 text-red-700 dark:bg-red-500/20 animate-shake'
          return <button key={ans} onClick={() => handle(ans)} disabled={selected !== null} className={`p-5 rounded-xl text-lg font-bold font-fredoka transition-all active:scale-95 ${cls}`}>{ans === 'myth' ? `❌ ${t('biasMyth')}` : `✅ ${t('biasFact')}`}</button>
        })}
      </div>
    </div>
  )
}

// ── Festival Game ───────────────────────────────────────────
const FESTIVAL_QA = [
  { festival: '🧧 Chinese New Year', cultureId: 'china' }, { festival: '🌸 Cherry Blossom Festival', cultureId: 'japan' },
  { festival: '🎪 Oktoberfest', cultureId: 'germany' }, { festival: '🎬 Cannes Film Festival', cultureId: 'france' },
  { festival: '🎭 Carnival of Venice', cultureId: 'italy' }, { festival: '🍅 La Tomatina', cultureId: 'spain' },
  { festival: '🪔 Diwali', cultureId: 'india' }, { festival: '🎄 Christmas Markets', cultureId: 'germany' },
  { festival: '💀 Día de los Muertos', cultureId: 'mexico' }, { festival: '🦃 Thanksgiving', cultureId: 'usa' },
  { festival: '🥮 Mid-Autumn Festival', cultureId: 'china' }, { festival: '🐉 Dragon Boat Festival', cultureId: 'china' },
]

const FESTIVAL_QA_EXTRA = [
  { festival: '🎭 Carnival', cultureId: 'brazil' },
  { festival: '💧 Songkran Water Festival', cultureId: 'thailand' },
  { festival: '🎨 Holi (Festival of Colors)', cultureId: 'india' },
  { festival: '🪷 Loy Krathong', cultureId: 'thailand' },
  { festival: '🇫🇷 Bastille Day', cultureId: 'france' },
  { festival: '🐪 Eid al-Adha', cultureId: 'saudiarabia' },
  { festival: '🎭 Mardi Gras', cultureId: 'usa' },
  { festival: '🎎 Children’s Day', cultureId: 'japan' },
  { festival: '🏮 Lantern Festival', cultureId: 'china' },
  { festival: '☘️ St. Patrick’s Day', cultureId: 'ireland' },
  { festival: '🕎 Hanukkah', cultureId: 'israel' },
  { festival: '🎆 Seollal (Korean New Year)', cultureId: 'korea' },
]

function FestivalGame({ onFinish }: { onFinish: (r: GameResult) => void }) {
  const { t, lang } = useI18n()
  const [q, setQ] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [startTime] = useState(Date.now())

  const questions = useMemo(() => {
    const combined = [...FESTIVAL_QA, ...FESTIVAL_QA_EXTRA]
    const picked = shuffle(combined).slice(0, 8)
    const allCultures = [...new Set(picked.map((p) => p.cultureId as string))] as string[]
    return picked.map((p) => ({ ...p, options: shuffle([p.cultureId, ...pickWrong(p.cultureId, allCultures, 3)]) }))
  }, [])

  const current = questions[q]; const isLast = q >= questions.length - 1

  const handle = useCallback((idx: number) => {
    setSelected(idx)
    const ok = current.options[idx] === current.cultureId
    if (ok) setScore((s) => s + 1)
    setTimeout(() => {
      setSelected(null)
      if (isLast) { const total = questions.length; const s = score + (ok ? 1 : 0); const acc = Math.round((s / total) * 100)
        onFinish({ score: s, total, xp: s * 12 + (acc >= 100 ? 50 : 0), streak: 0, accuracy: acc, perfect: acc >= 100, timeMs: Date.now() - startTime }) }
      else setQ((s) => s + 1)
    }, 600)
  }, [q, score, current, isLast, onFinish, questions.length, startTime])

  return (
    <div className="space-y-4">
      <div className="flex justify-between text-sm text-gray-400"><span>{t('questionLabel')} {q + 1}/{questions.length}</span><span>{t('scoreLabel')}: {score}</span></div>
      <div className="text-center py-6 card"><p className="text-6xl mb-3">{current.festival}</p><p className="text-sm text-gray-500">{t('gameFestivalDesc')}</p></div>
      <div className="grid grid-cols-2 gap-2">
        {current.options.map((opt, i) => {
          let cls = 'bg-white dark:bg-cool-800 border border-gray-200 dark:border-gray-700'
          if (selected !== null) {
            if (i === selected) cls = opt === current.cultureId ? 'bg-green-100 border-green-400 text-green-700 dark:bg-green-500/20' : 'bg-red-100 border-red-400 text-red-700 dark:bg-red-500/20 animate-shake'
            else if (opt === current.cultureId) cls = 'bg-green-100 border-green-400 text-green-700 dark:bg-green-500/20'
          }
          return <button key={i} onClick={() => handle(i)} disabled={selected !== null} className={`p-4 rounded-xl text-sm font-medium transition-all active:scale-95 ${cls}`}>{cName(opt, lang)}</button>
        })}
      </div>
    </div>
  )
}

// ── Flag Quiz ───────────────────────────────────────────────
function FlagQuiz({ onFinish }: { onFinish: (r: GameResult) => void }) {
  const { t, lang } = useI18n()
  const [q, setQ] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [startTime] = useState(Date.now())

  const questions = useMemo(() => {
    const picked = shuffle(CULTURE_META).slice(0, 8)
    const allNames = CULTURE_META.map((c) => c.name.en ?? c.id)
    return picked.map((c) => ({
      flag: c.flag,
      name: c.name[lang] ?? c.name.en ?? c.id,
      options: shuffle([c.name.en ?? c.id, ...pickWrong(c.name.en ?? c.id, allNames, 3)]),
    }))
  }, [lang])

  const current = questions[q]; const isLast = q >= questions.length - 1

  const handle = useCallback((idx: number) => {
    setSelected(idx)
    const ok = current.options[idx] === current.name
    if (ok) setScore((s) => s + 1)
    setTimeout(() => {
      setSelected(null)
      if (isLast) { const total = questions.length; const s = score + (ok ? 1 : 0); const acc = Math.round((s / total) * 100)
        onFinish({ score: s, total, xp: s * 12 + (acc >= 100 ? 50 : 0), streak: 0, accuracy: acc, perfect: acc >= 100, timeMs: Date.now() - startTime }) }
      else setQ((s) => s + 1)
    }, 600)
  }, [q, score, current, isLast, onFinish, questions.length, startTime])

  return (
    <div className="space-y-4">
      <div className="flex justify-between text-sm text-gray-400"><span>{t('questionLabel')} {q + 1}/{questions.length}</span><span>{t('scoreLabel')}: {score}</span></div>
      <div className="text-center py-8 card"><span className="text-7xl">{current.flag}</span><p className="text-sm text-gray-500 mt-3">{t('gameFlagDesc')}</p></div>
      <div className="grid grid-cols-2 gap-2">
        {current.options.map((opt, i) => {
          let cls = 'bg-white dark:bg-cool-800 border border-gray-200 dark:border-gray-700'
          if (selected !== null) {
            if (i === selected) cls = opt === current.name ? 'bg-green-100 border-green-400 text-green-700 dark:bg-green-500/20' : 'bg-red-100 border-red-400 text-red-700 dark:bg-red-500/20 animate-shake'
            else if (opt === current.name) cls = 'bg-green-100 border-green-400 text-green-700 dark:bg-green-500/20'
          }
          return <button key={i} onClick={() => handle(i)} disabled={selected !== null} className={`p-4 rounded-xl text-sm font-medium transition-all active:scale-95 ${cls}`}>{opt}</button>
        })}
      </div>
    </div>
  )
}

// ── Culture Master (mixed quiz) ─────────────────────────────
const MASTER_QA = [
  { qKey: 'masterQ1', q: '👥 Which country has over 1.4 billion people?', a: 'China', opts: ['India', 'China', 'USA', 'Russia'] },
  { qKey: 'masterQ2', q: '📖 Which country invented paper and gunpowder?', a: 'China', opts: ['Japan', 'China', 'Germany', 'Italy'] },
  { qKey: 'masterQ3', q: '⛰ Mount Fuji is in which country?', a: 'Japan', opts: ['South Korea', 'Japan', 'China', 'Thailand'] },
  { qKey: 'masterQ4', q: '💯 Which country has the Eiffel Tower?', a: 'France', opts: ['UK', 'Italy', 'France', 'Spain'] },
  { qKey: 'masterQ5', q: '🏛 The Colosseum is in which country?', a: 'Italy', opts: ['Greece', 'Italy', 'Spain', 'Turkey'] },
  { qKey: 'masterQ6', q: '👑 Taj Mahal is in which country?', a: 'India', opts: ['Pakistan', 'India', 'UAE', 'Egypt'] },
  { qKey: 'masterQ7', q: '🕺 Which country is known for tango?', a: 'Argentina', opts: ['Brazil', 'Spain', 'Argentina', 'Mexico'] },
  { qKey: 'masterQ8', q: '🦇 Kangaroos are native to which country?', a: 'Australia', opts: ['New Zealand', 'Australia', 'South Africa', 'USA'] },
  { qKey: 'masterQ9', q: '⭐ Which country has the most pyramids?', a: 'Egypt', opts: ['Mexico', 'Egypt', 'Peru', 'India'] },
  { qKey: 'masterQ10', q: '🍺 Oktoberfest is held in which country?', a: 'Germany', opts: ['Austria', 'Switzerland', 'Germany', 'Czech Republic'] },
]

const MASTER_QA_EXTRA = [
  { qKey: 'masterQ11', q: '🌊 Which country is home to the Amazon River?', a: 'Brazil', opts: ['Colombia', 'Brazil', 'Peru', 'Venezuela'] },
  { qKey: 'masterQ12', q: '🍕 Which country invented pizza?', a: 'Italy', opts: ['France', 'Spain', 'Italy', 'Greece'] },
  { qKey: 'masterQ13', q: '📷 The Great Wall of China is visible from where?', a: 'Low Earth orbit', opts: ['The Moon', 'Low Earth orbit', 'Mars', 'Venus'] },
  { qKey: 'masterQ14', q: '🏛 Which country has the most UNESCO World Heritage Sites?', a: 'Italy', opts: ['China', 'France', 'Italy', 'Spain'] },
  { qKey: 'masterQ15', q: '🎉 Which country celebrates Nowruz (Persian New Year)?', a: 'Iran', opts: ['Turkey', 'Iraq', 'Iran', 'Pakistan'] },
  { q: 'Which Nordic country has the most islands?', a: 'Sweden', opts: ['Norway', 'Finland', 'Sweden', 'Denmark'] },
  { q: 'Which country is the largest archipelago in the world?', a: 'Indonesia', opts: ['Philippines', 'Japan', 'Indonesia', 'Malaysia'] },
  { qKey: 'masterQ17', q: '🦠 The Great Sphinx is located in which country?', a: 'Egypt', opts: ['Greece', 'Egypt', 'Jordan', 'Turkey'] },
  { qKey: 'masterQ18', q: '☕ Which country is the origin of coffee?', a: 'Ethiopia', opts: ['Brazil', 'Colombia', 'Vietnam', 'Ethiopia'] },
  { q: 'Machu Picchu is in which country?', a: 'Peru', opts: ['Bolivia', 'Peru', 'Chile', 'Ecuador'] },
  { q: 'Which country has the largest population of Muslims?', a: 'Indonesia', opts: ['Saudi Arabia', 'Indonesia', 'Pakistan', 'India'] },
  { qKey: 'masterQ24', q: '🌍 Angkor Wat is located in which country?', a: 'Cambodia', opts: ['Thailand', 'Vietnam', 'Cambodia', 'Laos'] },
  { qKey: 'masterQ20', q: '🌍 Which country has the most official languages?', a: 'South Africa', opts: ['India', 'South Africa', 'Switzerland', 'Nigeria'] },
  { qKey: 'masterQ21', q: '🏛 The ancient city of Petra is in which country?', a: 'Jordan', opts: ['Egypt', 'Jordan', 'Israel', 'Saudi Arabia'] },
  { q: 'Which country has the longest coastline in the world?', a: 'Canada', opts: ['Australia', 'Canada', 'Russia', 'Indonesia'] },
]

function CultureMasterGame({ onFinish }: { onFinish: (r: GameResult) => void }) {
  const { t } = useI18n()
  const [q, setQ] = useState(0)
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [bestStreak, setBestStreak] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [startTime] = useState(Date.now())

  const questions = useMemo(() => {
    const combined = [...MASTER_QA, ...MASTER_QA_EXTRA]
    return shuffle(combined).slice(0, 10)
  }, [])

  const current = questions[q]; const isLast = q >= questions.length - 1

  const handle = useCallback((idx: number) => {
    setSelected(idx)
    const ok = current.opts[idx] === current.a
    if (ok) { const ns = streak + 1; setScore((s) => s + 1); setStreak(ns); setBestStreak((b) => Math.max(b, ns)) }
    else setStreak(0)
    setTimeout(() => {
      setSelected(null)
      if (isLast) { const total = questions.length; const s = score + (ok ? 1 : 0); const acc = Math.round((s / total) * 100)
        onFinish({ score: s, total, xp: s * 15 + (acc >= 100 ? 80 : 0), streak: bestStreak, accuracy: acc, perfect: acc >= 100, timeMs: Date.now() - startTime }) }
      else setQ((s) => s + 1)
    }, 600)
  }, [q, score, streak, bestStreak, current, isLast, onFinish, questions.length, startTime])

  return (
    <div className="space-y-4">
      <div className="flex justify-between text-sm text-gray-400"><span>{t('questionLabel')} {q + 1}/{questions.length}</span><span>{t('scoreLabel')}: {score}</span><span className="text-coral-500">🔥 {streak}</span></div>
      <div className="progress-bar h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-coral-500 to-purple-500 transition-all duration-500" style={{ width: `${((q + 1) / questions.length) * 100}%` }} /></div>
      <div className="text-center py-6 card"><p className="text-lg font-semibold">{(t as any)(current.qKey)}</p></div>
      <div className="grid grid-cols-2 gap-2">
        {current.opts.map((opt, i) => {
          let cls = 'bg-white dark:bg-cool-800 border border-gray-200 dark:border-gray-700'
          if (selected !== null) {
            if (i === selected) cls = opt === current.a ? 'bg-green-100 border-green-400 text-green-700 dark:bg-green-500/20' : 'bg-red-100 border-red-400 text-red-700 dark:bg-red-500/20 animate-shake'
            else if (opt === current.a) cls = 'bg-green-100 border-green-400 text-green-700 dark:bg-green-500/20'
          }
          return <button key={i} onClick={() => handle(i)} disabled={selected !== null} className={`p-4 rounded-xl text-sm font-medium transition-all active:scale-95 ${cls}`}>{opt}</button>
        })}
      </div>
    </div>
  )
}

// ── Speed Round ─────────────────────────────────────────────
function SpeedRound({ onFinish }: { onFinish: (r: GameResult) => void }) {
  const { t } = useI18n()
  const [q, setQ] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [timeLeft, setTimeLeft] = useState(30)
  const [startTime] = useState(Date.now())
  const [finished, setFinished] = useState(false)

  const questions = useMemo(() => {
    const all = CULTURE_META.map((c) => ({ q: 'Which country has this flag? ' + c.flag, a: c.name.en ?? c.id, opts: shuffle([c.name.en ?? c.id, ...pickWrong(c.name.en ?? c.id, CULTURE_META.map((x) => x.name.en ?? x.id), 3)]) }))
    return shuffle(all).slice(0, 10)
  }, [])

  useEffect(() => {
    if (finished) return
    const timer = setInterval(() => { setTimeLeft((t) => { if (t <= 1) { clearInterval(timer); setFinished(true); return 0 }; return t - 1 }) }, 1000)
    return () => clearInterval(timer)
  }, [finished])

  useEffect(() => {
    if (finished && selected === null) {
      const total = questions.length
      const acc = Math.round((score / total) * 100)
      onFinish({ score, total, xp: score * 20 + (acc >= 80 ? 80 : 0), streak: 0, accuracy: acc, perfect: acc >= 100, timeMs: Date.now() - startTime })
    }
  }, [finished])

  const current = questions[q] ?? questions[0]
  const isLast = q >= questions.length - 1

  const handle = useCallback((idx: number) => {
    if (selected !== null || finished) return
    setSelected(idx)
    const ok = current.opts[idx] === current.a
    if (ok) setScore((s) => s + 1)
    setTimeout(() => {
      setSelected(null)
      if (isLast || finished) { setFinished(true) }
      else setQ((s) => s + 1)
    }, 400)
  }, [q, score, current, isLast, finished, selected])

  if (finished && selected === null) return null

  return (
    <div className="space-y-4">
      <div className="flex justify-between text-sm"><span className="text-gray-400">{t('questionLabel')} {q + 1}/{questions.length}</span><span className={'font-bold ' + (timeLeft <= 10 ? 'text-red-500 animate-pulse' : 'text-coral-500')}>⏱ {timeLeft}s</span><span>{t('scoreLabel')}: {score}</span></div>
      <div className="h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"><div className={'h-full transition-all duration-1000 ' + (timeLeft <= 10 ? 'bg-red-500' : 'bg-coral-500')} style={{ width: (timeLeft / 30) * 100 + '%' }} /></div>
      <div className="text-center py-6 card"><p className="text-lg font-semibold">{current.q}</p></div>
      <div className="grid grid-cols-2 gap-2">
        {current.opts.map((opt, i) => {
          let cls = 'bg-white dark:bg-cool-800 border border-gray-200 dark:border-gray-700'
          if (selected !== null) {
            if (i === selected) cls = opt === current.a ? 'bg-green-100 border-green-400 text-green-700 dark:bg-green-500/20' : 'bg-red-100 border-red-400 text-red-700 dark:bg-red-500/20 animate-shake'
            else if (opt === current.a) cls = 'bg-green-100 border-green-400 text-green-700 dark:bg-green-500/20'
          }
          return <button key={i} onClick={() => handle(i)} disabled={selected !== null || finished} className={'p-4 rounded-xl text-sm font-medium transition-all active:scale-95 ' + cls}>{opt}</button>
        })}
      </div>
    </div>
  )
}

// ── Landmark Match Game ─────────────────────────────────────
const LANDMARK_QA = [
  { landmark: '🏛️ Colosseum', cultureId: 'italy' },
  { landmark: '🗼 Eiffel Tower', cultureId: 'france' },
  { landmark: '🕌 Taj Mahal', cultureId: 'india' },
  { landmark: '🏯 Great Wall', cultureId: 'china' },
  { landmark: '🏔️ Machu Picchu', cultureId: 'peru' },
  { landmark: '⛪ Christ the Redeemer', cultureId: 'brazil' },
  { landmark: '🏛️ Alhambra', cultureId: 'spain' },
  { landmark: '🏛️ Pyramids of Giza', cultureId: 'egypt' },
]

const LANDMARK_QA_EXTRA = [
  { landmark: '🏛️ Parthenon', cultureId: 'greece' },
  { landmark: '🕍 Angkor Wat', cultureId: 'cambodia' },
  { landmark: '🏯 Forbidden City', cultureId: 'china' },
  { landmark: '🕌 Petra', cultureId: 'jordan' },
  { landmark: '🏰 Neuschwanstein Castle', cultureId: 'germany' },
  { landmark: '🕌 Hagia Sophia', cultureId: 'turkey' },
  { landmark: '🗿 Moai Statues', cultureId: 'chile' },
  { landmark: '🗿 Stonehenge', cultureId: 'uk' },
]

function LandmarkMatchGame({ onFinish }: { onFinish: (r: GameResult) => void }) {
  const { t } = useI18n()
  const [q, setQ] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [startTime] = useState(Date.now())

  const questions = useMemo(() => {
    const combined = [...LANDMARK_QA, ...LANDMARK_QA_EXTRA]
    const picked = shuffle(combined).slice(0, 8)
    const allCultures = [...new Set(picked.map((p) => p.cultureId as string))] as string[]
    return picked.map((p) => ({ ...p, options: shuffle([p.cultureId, ...pickWrong(p.cultureId, allCultures, 3)]) }))
  }, [])

  const current = questions[q]; const isLast = q >= questions.length - 1

  const handle = useCallback((idx: number) => {
    setSelected(idx)
    const ok = current.options[idx] === current.cultureId
    if (ok) setScore((s) => s + 1)
    setTimeout(() => {
      setSelected(null)
      if (isLast) { const total = questions.length; const s = score + (ok ? 1 : 0); const acc = Math.round((s / total) * 100)
        onFinish({ score: s, total, xp: s * 12 + (acc >= 100 ? 50 : 0), streak: 0, accuracy: acc, perfect: acc >= 100, timeMs: Date.now() - startTime }) }
      else setQ((s) => s + 1)
    }, 600)
  }, [q, score, current, isLast, onFinish, questions.length, startTime])

  return (
    <div className="space-y-4">
      <div className="flex justify-between text-sm text-gray-400"><span>{t('questionLabel')} {q + 1}/{questions.length}</span><span>{t('scoreLabel')}: {score}</span></div>
      <div className="text-center py-6 card"><p className="text-6xl mb-3">{current.landmark}</p><p className="text-sm text-gray-500">{t('gameLandmarkDesc')}</p></div>
      <div className="grid grid-cols-2 gap-2">
        {current.options.map((opt, i) => {
          let cls = 'bg-white dark:bg-cool-800 border border-gray-200 dark:border-gray-700'
          if (selected !== null) {
            if (i === selected) cls = opt === current.cultureId ? 'bg-green-100 border-green-400 text-green-700 dark:bg-green-500/20' : 'bg-red-100 border-red-400 text-red-700 dark:bg-red-500/20 animate-shake'
            else if (opt === current.cultureId) cls = 'bg-green-100 border-green-400 text-green-700 dark:bg-green-500/20'
          }
          return <button key={i} onClick={() => handle(i)} disabled={selected !== null} className={'p-4 rounded-xl text-sm font-medium transition-all active:scale-95 ' + cls}>{opt}</button>
        })}
      </div>
    </div>
  )
}

// ── Result Screen ───────────────────────────────────────────
function ResultScreen({ result, onReplay }: { result: GameResult; gameId: string; onReplay: () => void; onBack: () => void }) {
  const { t } = useI18n()

  useEffect(() => {
    if (result.perfect) confetti({ particleCount: 200, spread: 80, origin: { y: 0.5 } })
  }, [result.perfect])

  const emoji = result.accuracy >= 100 ? '🎉' : result.accuracy >= 70 ? '👏' : result.accuracy >= 40 ? '💪' : '🎯'
  const title = result.accuracy >= 100 ? t('resultPerfect') : result.accuracy >= 70 ? t('resultGreat') : result.accuracy >= 40 ? t('resultGood') : t('resultTryAgain')

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="card text-center py-8 space-y-4">
      <motion.span className="text-7xl block" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 0.6 }}>{emoji}</motion.span>
      <h2 className="text-2xl font-bold font-fredoka">{title}</h2>
      <div className="grid grid-cols-3 gap-3 mt-4">
        <div className="p-3"><p className="text-3xl font-bold gradient-text">{result.score}/{result.total}</p><p className="text-xs text-gray-400 mt-1">{t('scoreLabel')}</p></div>
        <div className="p-3"><p className="text-3xl font-bold text-teal-500">{result.accuracy}%</p><p className="text-xs text-gray-400 mt-1">{t('resultAccuracy')}</p></div>
        <div className="p-3"><p className="text-3xl font-bold text-purple-500">+{result.xp}</p><p className="text-xs text-gray-400 mt-1">XP</p></div>
      </div>
      {result.timeMs && <p className="text-sm text-gray-400">⏱ {(result.timeMs / 1000).toFixed(1)}s</p>}
      {result.streak > 2 && <p className="text-sm text-coral-500">🔥 {t('resultStreak')}: {result.streak}</p>}
      <div className="flex gap-3 justify-center mt-4">
        <button onClick={onReplay} className="px-6 py-3 bg-gradient-to-r from-coral-500 to-coral-400 text-white font-semibold rounded-full shadow-lg active:scale-95 transition-transform text-sm">{t('playAgain')}</button>
        <Link to="/games" className="px-6 py-3 bg-gray-100 dark:bg-cool-800 text-gray-600 dark:text-gray-300 rounded-full text-sm font-medium">{t('backToGames')}</Link>
      </div>
    </motion.div>
  )
}

// ── Game Play Screen ────────────────────────────────────────
export function GamePlayScreen() {
  const { gameId } = useParams<{ gameId: string }>()
  const { t, lang } = useI18n()
  const addXP = useProgressStore((s) => s.addXP)
  const recordGame = useProgressStore((s) => s.recordGamePlayed)
  const unlock = useAchievementStore((s) => s.unlock)

  const [phase, setPhase] = useState<GamePhase>('intro')
  const [result, setResult] = useState<GameResult | null>(null)

  const game = GAME_DEFS.find((g) => g.id === gameId)

  const handleFinish = useCallback((r: GameResult) => {
    setResult(r); setPhase('result')
    addXP(r.xp); recordGame()
    if (gameId === 'culture-master' && r.perfect) setTimeout(() => unlock('quiz_master'), 500)
    if (gameId === 'bias' && r.score === r.total) setTimeout(() => unlock('bias_buster'), 500)
    if (gameId === 'speed-round' && r.accuracy >= 80) setTimeout(() => unlock('speed_demon'), 500)
    unlock('gamer')
  }, [addXP, recordGame, unlock, gameId])

  const startGame = () => setPhase('playing')
  const replayGame = () => { setResult(null); setPhase('playing') }

  if (!game) return <div className="py-12 text-center"><p>{t('errorGeneric')}</p><Link to="/games" className="text-coral-500 mt-4 block">{t('backToGames')}</Link></div>

  if (phase === 'intro') {
    return (
      <div className="py-6 space-y-6 animate-fade-in text-center pb-24">
        <Link to="/games" className="text-coral-500 text-sm float-left">{t('backBtn')}</Link>
        <div className="pt-8"><span className="text-7xl">{game.icon}</span><h1 className="text-3xl font-bold font-fredoka mt-4">{game.name[lang] ?? game.name.en}</h1><p className="text-gray-500 dark:text-gray-400 mt-2">{game.desc[lang] ?? game.desc.en}</p></div>
        <button onClick={startGame} className="mt-8 px-10 py-4 bg-gradient-to-r from-coral-500 to-coral-400 text-white text-lg font-bold rounded-full shadow-xl active:scale-95 transition-transform">{t('btnPlay')}</button>
      </div>
    )
  }

  return (
    <div className="py-4 pb-24 animate-fade-in">
      <Link to="/games" className="text-coral-500 text-sm mb-4 block" onClick={() => { if (phase === 'result') return; if (confirm('Quit game?')) {} }}>{t('backBtn')}</Link>

      <AnimatePresence mode="wait">
        {phase === 'playing' && (
          <motion.div key="play" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {gameId === 'greeting' && <GreetingGame onFinish={handleFinish} />}
            {gameId === 'food-match' && <FoodMatchGame onFinish={handleFinish} />}
            {gameId === 'bias' && <BiasGame onFinish={handleFinish} />}
            {gameId === 'festival' && <FestivalGame onFinish={handleFinish} />}
            {gameId === 'flag-quiz' && <FlagQuiz onFinish={handleFinish} />}
            {gameId === 'culture-master' && <CultureMasterGame onFinish={handleFinish} />}
            {gameId === 'speed-round' && <SpeedRound onFinish={handleFinish} />}
            {gameId === 'landmark-match' && <LandmarkMatchGame onFinish={handleFinish} />}
          </motion.div>
        )}

        {phase === 'result' && result && (
          <motion.div key="result" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <ResultScreen result={result} gameId={gameId ?? ''} onReplay={replayGame} onBack={() => {}} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
