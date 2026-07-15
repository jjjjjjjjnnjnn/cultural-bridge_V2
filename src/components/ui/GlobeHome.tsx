import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { CULTURE_META, CULTURES_BY_REGION } from '../../data/cultures/index'
import { REGIONS } from '../../data/regions'
import { useI18n } from '../../i18n/context'

const SVG_W = 800
const SVG_H = 400

const MARKERS: Record<string, { x: number; y: number }> = {
  china: { x: 65, y: 33 }, japan: { x: 78, y: 32 }, korea: { x: 73, y: 30 },
  thailand: { x: 65, y: 47 }, vietnam: { x: 68, y: 48 }, singapore: { x: 67, y: 56 },
  indonesia: { x: 69, y: 62 }, philippines: { x: 74, y: 51 }, india: { x: 56, y: 43 },
  turkey: { x: 49, y: 32 }, uae: { x: 53, y: 43 }, germany: { x: 46, y: 16 },
  france: { x: 44, y: 20 }, uk: { x: 42, y: 13 }, italy: { x: 47, y: 24 },
  spain: { x: 42, y: 28 }, russia: { x: 60, y: 12 }, egypt: { x: 48, y: 35 },
  southafrica: { x: 48, y: 68 }, usa: { x: 20, y: 30 }, canada: { x: 20, y: 15 },
  brazil: { x: 28, y: 60 }, mexico: { x: 17, y: 42 }, australia: { x: 78, y: 78 },
  newzealand: { x: 86, y: 83 },
}

function pos(pct: number, dim: number) { return (pct / 100) * dim }

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
}

const itemVariants = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring' as const, damping: 18, stiffness: 120 } },
}

const REGION_COLORS: Record<string, string> = {
  eastAsia: '#FF6B6B', southeastAsia: '#58CC02', southAsia: '#FF9600',
  middleEast: '#CE82FF', europe: '#1CB0F6', africa: '#FF9600',
  northAmerica: '#58CC02', southAmerica: '#FF6B6B', oceania: '#1CB0F6',
}

export function GlobeHome() {
  const { t, lang } = useI18n()
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null)
  const [hoveredDot, setHoveredDot] = useState<string | null>(null)

  const regionCultures = selectedRegion ? CULTURES_BY_REGION[selectedRegion] ?? [] : []

  return (
    <motion.div
      className="flex flex-col items-center py-4 px-2"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* ── SVG World Map ── */}
      <motion.div
        className="relative w-full max-w-[380px] mx-auto rounded-3xl overflow-hidden bg-[#E8F4FD] shadow-md"
        variants={itemVariants}
      >
        <svg viewBox={`0 0 ${SVG_W} ${SVG_H}`} className="w-full h-auto block">
          <rect width={SVG_W} height={SVG_H} fill="#E8F4FD" rx="16" />

          <g id="continents" fill="#D5E3D5" stroke="#B8C8B8" strokeWidth={2.5} strokeLinejoin="round">
            <path d="M100,50 L240,35 L280,45 L300,55 L300,70 L280,85 L260,95 L200,120 L140,115 L90,95 L70,75 Z" />
            <path d="M200,120 L240,125 L260,140 L240,150 L200,145 Z" />
            <path d="M200,150 L260,145 L280,170 L270,210 L250,250 L220,280 L200,300 L190,270 L180,240 L170,200 Z" />
            <path d="M370,30 L420,15 L470,20 L490,40 L480,55 L470,60 L440,70 L420,75 L400,65 L380,55 Z" />
            <path d="M355,20 L370,10 L380,20 L375,35 L360,40 Z" />
            <path d="M410,5 L430,5 L445,15 L440,25 L420,20 Z" />
            <path d="M380,80 L480,70 L510,90 L520,120 L510,160 L490,200 L460,230 L430,240 L410,230 L390,200 L380,160 L375,120 Z" />
            <path d="M530,170 L540,165 L545,185 L540,200 L530,195 Z" />
            <path d="M490,20 L600,15 L680,20 L720,35 L740,60 L740,80 L720,100 L680,115 L620,120 L560,110 L520,100 L500,80 L490,60 Z" />
            <path d="M520,100 L560,105 L580,125 L570,155 L550,165 L530,155 L515,130 Z" />
            <path d="M510,80 L540,85 L560,100 L550,120 L530,130 L510,120 L500,100 Z" />
            <path d="M660,120 L700,110 L720,120 L730,135 L720,150 L690,155 L670,145 Z" />
            <path d="M735,135 L760,125 L770,140 L755,155 L740,150 Z" />
            <path d="M700,155 L740,155 L750,170 L730,180 L690,175 Z" />
            <path d="M640,240 L700,230 L730,240 L740,260 L730,280 L710,290 L680,295 L650,290 L635,270 Z" />
            <path d="M760,275 L768,270 L772,280 L768,290 L760,285 Z" />
            <path d="M280,10 L310,5 L330,10 L335,25 L320,35 L300,30 Z" />
          </g>

          {/* Culture markers */}
          {CULTURE_META.map((meta) => {
            const m = MARKERS[meta.id]; if (!m) return null
            const cx = pos(m.x, SVG_W), cy = pos(m.y, SVG_H)
            const inRegion = selectedRegion ? CULTURES_BY_REGION[selectedRegion]?.includes(meta.id) : false
            const isHighlighted = !selectedRegion || inRegion

            return (
              <Link key={meta.id} to={`/culture/${meta.id}`} style={{ cursor: 'pointer' }}>
                {isHighlighted && (
                  <circle cx={cx} cy={cy} r={11} fill="none" stroke="#ff6b6b" strokeWidth={1.5} opacity={0.35}>
                    <animate attributeName="r" from={9} to={17} dur="1.8s" repeatCount="indefinite" />
                    <animate attributeName="opacity" from={0.4} to={0} dur="1.8s" repeatCount="indefinite" />
                  </circle>
                )}
                <g
                  onMouseEnter={() => setHoveredDot(meta.id)}
                  onMouseLeave={() => setHoveredDot(null)}
                  style={{ transformOrigin: `${cx}px ${cy}px`, transition: 'transform 0.2s' }}
                  transform={hoveredDot === meta.id ? 'scale(1.35)' : ''}
                >
                  <circle cx={cx} cy={cy} r={isHighlighted ? 9 : 4}
                    fill={isHighlighted ? '#ff6b6b' : '#ccc'}
                    stroke={isHighlighted ? '#fff' : '#999'}
                    strokeWidth={2.5}
                    className="transition-all duration-300"
                  />
                  {isHighlighted && (
                    <text x={cx} y={cy + 1.5} textAnchor="middle" dominantBaseline="central"
                      fontSize={7} className="pointer-events-none select-none">{meta.flag}</text>
                  )}
                </g>
              </Link>
            )
          })}
        </svg>

        {/* Bottom gradient fade */}
        <div className="absolute inset-x-0 bottom-0 h-16 pointer-events-none bg-gradient-to-b from-transparent to-[#E8F4FD]" />
      </motion.div>

      {/* ── Region Filter Pills ── */}
      <motion.div className="flex flex-wrap justify-center gap-2 mt-5 px-1" variants={itemVariants}>
        {REGIONS.map((r) => {
          const active = selectedRegion === r.id
          const color = REGION_COLORS[r.id] ?? '#FF6B6B'
          return (
            <motion.button
              key={r.id}
              onClick={() => setSelectedRegion(active ? null : r.id)}
              whileTap={{ scale: 0.9 }}
              className={`px-3.5 py-2 rounded-full text-xs font-bold transition-all duration-200
                ${active
                  ? 'text-white shadow-md'
                  : selectedRegion
                    ? 'bg-gray-100 dark:bg-cool-800 text-gray-400 opacity-40'
                    : 'bg-white dark:bg-cool-800 text-gray-600 dark:text-gray-300 border-2 border-gray-200 dark:border-gray-600'
                }`}
              style={active ? { backgroundColor: color } : {}}
            >
              {r.emoji} {r.name[lang] ?? r.name.en}
            </motion.button>
          )
        })}
      </motion.div>

      {/* ── Selected Region Cards ── */}
      <AnimatePresence mode="wait">
        {selectedRegion && (
          <motion.div
            key={selectedRegion}
            className="w-full mt-5 px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: 'spring', damping: 20, stiffness: 120 }}
          >
            <div className="flex items-center gap-2 mb-3 px-1">
              <span className="text-base font-bold font-fredoka text-gray-800 dark:text-gray-100">
                {REGIONS.find((r) => r.id === selectedRegion)?.emoji}{' '}
                {REGIONS.find((r) => r.id === selectedRegion)?.name[lang] ?? REGIONS.find((r) => r.id === selectedRegion)?.name.en}
              </span>
              <span className="text-[11px] bg-gray-100 dark:bg-cool-800 px-2 py-0.5 rounded-full text-gray-500 font-medium">
                {regionCultures.length}
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {regionCultures.map((cid, i) => {
                const meta = CULTURE_META.find((c) => c.id === cid)
                if (!meta) return null
                return (
                  <motion.div
                    key={cid}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05, type: 'spring', damping: 18 }}
                  >
                    <Link
                      to={`/culture/${cid}`}
                      className="flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-white dark:bg-cool-800
                        border-2 border-gray-100 dark:border-gray-700 no-underline
                        active:scale-90 hover:border-coral-300 dark:hover:border-coral-500
                        transition-all duration-200 shadow-sm hover:shadow-md"
                    >
                      <motion.span
                        className="text-2xl"
                        whileHover={{ rotate: [0, -10, 10, -10, 0], transition: { duration: 0.4 } }}
                      >
                        {meta.flag}
                      </motion.span>
                      <span className="text-xs font-bold text-gray-700 dark:text-gray-200 text-center leading-tight">
                        {meta.name[lang] ?? meta.name.en}
                      </span>
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Quick Action Buttons ── */}
      <motion.div className="flex gap-3 mt-6 px-2 w-full" variants={itemVariants}>
        <Link
          to="/games"
          className="flex-1 py-3.5 bg-gradient-to-b from-coral-400 to-coral-500 text-white font-bold text-sm
            rounded-2xl text-center shadow-lg active:scale-95 transition-all duration-150
            border-b-4 border-coral-600 active:border-b-0"
        >
          🎮 {t('btnPlay')}
        </Link>
        <Link
          to="/profile"
          className="flex-1 py-3.5 bg-gradient-to-b from-purple-400 to-purple-500 text-white font-bold text-sm
            rounded-2xl text-center shadow-lg active:scale-95 transition-all duration-150
            border-b-4 border-purple-600 active:border-b-0"
        >
          👤 {t('navProfile')}
        </Link>
      </motion.div>
    </motion.div>
  )
}
