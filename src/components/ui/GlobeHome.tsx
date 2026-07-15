import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CULTURE_META, CULTURES_BY_REGION } from '../../data/cultures/index'
import { REGIONS } from '../../data/regions'

/* ── Culture markers positioned ~geographically on the SVG map ── */
/* Each coordinate is a percentage (0-100) within the 800x400 viewBox */
const MARKERS: Record<string, { x: number; y: number }> = {
  china: { x: 65, y: 33 },
  japan: { x: 78, y: 32 },
  korea: { x: 73, y: 30 },
  thailand: { x: 65, y: 47 },
  vietnam: { x: 68, y: 48 },
  singapore: { x: 67, y: 56 },
  indonesia: { x: 69, y: 62 },
  philippines: { x: 74, y: 51 },
  india: { x: 56, y: 43 },
  turkey: { x: 49, y: 32 },
  uae: { x: 53, y: 43 },
  germany: { x: 46, y: 16 },
  france: { x: 44, y: 20 },
  uk: { x: 42, y: 13 },
  italy: { x: 47, y: 24 },
  spain: { x: 42, y: 28 },
  russia: { x: 60, y: 12 },
  egypt: { x: 48, y: 35 },
  southafrica: { x: 48, y: 68 },
  usa: { x: 20, y: 30 },
  canada: { x: 20, y: 15 },
  brazil: { x: 28, y: 60 },
  mexico: { x: 17, y: 42 },
  australia: { x: 78, y: 78 },
  newzealand: { x: 86, y: 83 },
}

/** Convert marker percentage position to pixel offset inside viewBox */
function pos(pct: number, dim: number) {
  return (pct / 100) * dim
}

const SVG_W = 800
const SVG_H = 400

export function GlobeHome() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null)

  const handleRegionClick = (regionId: string) => {
    setSelectedRegion(selectedRegion === regionId ? null : regionId)
  }

  const regionCultures = selectedRegion ? CULTURES_BY_REGION[selectedRegion] ?? [] : []

  return (
    <div className="flex flex-col items-center py-4">
      {/* ── Interactive SVG World Map ── */}
      <div className="relative w-full max-w-[360px] mx-auto rounded-2xl overflow-hidden bg-[#E8F4FD] shadow-sm">
        <svg viewBox={`0 0 ${SVG_W} ${SVG_H}`} className="w-full h-auto block" role="img" aria-label="World Map">
          {/* Ocean background */}
          <rect width={SVG_W} height={SVG_H} fill="#E8F4FD" rx="12" />

          {/* ── Continents ── */}
          <g id="continents" fill="#E0E7E0" stroke="#c0cbc0" strokeWidth={3} strokeLinejoin="round">
            {/* North America */}
            <path d="M100,50 L240,35 L280,45 L300,55 L300,70 L280,85 L260,95 L200,120 L140,115 L90,95 L70,75 Z" />
            {/* Central America connector */}
            <path d="M200,120 L240,125 L260,140 L240,150 L200,145 Z" />
            {/* South America */}
            <path d="M200,150 L260,145 L280,170 L270,210 L250,250 L220,280 L200,300 L190,270 L180,240 L170,200 Z" />
            {/* Europe */}
            <path d="M370,30 L420,15 L470,20 L490,40 L480,55 L470,60 L440,70 L420,75 L400,65 L380,55 Z" />
            {/* UK / Ireland */}
            <path d="M355,20 L370,10 L380,20 L375,35 L360,40 Z" />
            {/* Scandinavia */}
            <path d="M410,5 L430,5 L445,15 L440,25 L420,20 Z" />
            {/* Africa */}
            <path d="M380,80 L480,70 L510,90 L520,120 L510,160 L490,200 L460,230 L430,240 L410,230 L390,200 L380,160 L375,120 Z" />
            {/* Madagascar */}
            <path d="M530,170 L540,165 L545,185 L540,200 L530,195 Z" />
            {/* Asia */}
            <path d="M490,20 L600,15 L680,20 L720,35 L740,60 L740,80 L720,100 L680,115 L620,120 L560,110 L520,100 L500,80 L490,60 Z" />
            {/* India subcontinent */}
            <path d="M520,100 L560,105 L580,125 L570,155 L550,165 L530,155 L515,130 Z" />
            {/* Arabian Peninsula */}
            <path d="M510,80 L540,85 L560,100 L550,120 L530,130 L510,120 L500,100 Z" />
            {/* Southeast Asian islands */}
            <path d="M660,120 L700,110 L720,120 L730,135 L720,150 L690,155 L670,145 Z" />
            <path d="M735,135 L760,125 L770,140 L755,155 L740,150 Z" />
            <path d="M700,155 L740,155 L750,170 L730,180 L690,175 Z" />
            {/* Australia */}
            <path d="M640,240 L700,230 L730,240 L740,260 L730,280 L710,290 L680,295 L650,290 L635,270 Z" />
            {/* New Zealand (small) */}
            <path d="M760,275 L768,270 L772,280 L768,290 L760,285 Z" />
            {/* Greenland */}
            <path d="M280,10 L310,5 L330,10 L335,25 L320,35 L300,30 Z" />
          </g>

          {/* ── Culture Dot Markers ── */}
          {CULTURE_META.map((meta) => {
            const m = MARKERS[meta.id]
            if (!m) return null
            const cx = pos(m.x, SVG_W)
            const cy = pos(m.y, SVG_H)
            const isSelected =
              selectedRegion != null && CULTURES_BY_REGION[selectedRegion]?.includes(meta.id)

            return (
              <Link
                key={meta.id}
                to={`/culture/${meta.id}`}
                style={{ cursor: 'pointer' }}
              >
                {/* Outer ring pulse (only for selected region markers) */}
                {isSelected && (
                  <circle cx={cx} cy={cy} r={14} fill="none" stroke="#ff6b6b" strokeWidth={1.5} opacity={0.4}>
                    <animate
                      attributeName="r"
                      from={10}
                      to={18}
                      dur="1.5s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      from={0.5}
                      to={0}
                      dur="1.5s"
                      repeatCount="indefinite"
                    />
                  </circle>
                )}

                {/* Dot */}
                <circle
                  cx={cx}
                  cy={cy}
                  r={isSelected ? 8 : 6}
                  fill={isSelected ? '#ff6b6b' : '#ffffff'}
                  stroke={isSelected ? '#ffffff' : '#ff6b6b'}
                  strokeWidth={2}
                  className="transition-all duration-300"
                >
                  <title>{`${meta.flag} ${meta.name.en}`}</title>
                </circle>

                {/* Flag emoji inside dot */}
                <text
                  x={cx}
                  y={cy + 1}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontSize={isSelected ? 7 : 5}
                  className="pointer-events-none transition-all duration-300"
                >
                  {meta.flag}
                </text>
              </Link>
            )
          })}
        </svg>

        {/* Subtle glow overlay */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-[#E8F4FD]/40 rounded-2xl" />
      </div>

      {/* ── Region Filter Pills ── */}
      <div className="flex flex-wrap justify-center gap-1.5 mt-5 px-2">
        {REGIONS.map((r) => (
          <button
            key={r.id}
            onClick={() => handleRegionClick(r.id)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
              selectedRegion === r.id
                ? 'bg-coral-500 text-white shadow-md scale-105'
                : selectedRegion && selectedRegion !== r.id
                  ? 'bg-gray-100 dark:bg-cool-800 text-gray-400 opacity-40'
                  : 'bg-gray-100 dark:bg-cool-800 text-gray-600 dark:text-gray-300 hover:bg-coral-100 dark:hover:bg-coral-500/20'
            }`}
          >
            {r.emoji} {r.name.en}
          </button>
        ))}
      </div>

      {/* ── Selected Region Culture Cards ── */}
      {selectedRegion && (
        <div className="w-full mt-5 px-4 animate-slide-up">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-base font-bold font-fredoka">
              {REGIONS.find((r) => r.id === selectedRegion)?.emoji}{' '}
              {REGIONS.find((r) => r.id === selectedRegion)?.name.en}
            </span>
            <span className="text-[11px] text-gray-400">{regionCultures.length} cultures</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {regionCultures.map((cid) => {
              const meta = CULTURE_META.find((c) => c.id === cid)
              if (!meta) return null
              return (
                <Link
                  key={cid}
                  to={`/culture/${cid}`}
                  className="card flex items-center gap-2.5 p-2.5 active:scale-95 transition-all hover:shadow-card-hover no-underline rounded-xl bg-white dark:bg-cool-800 border border-gray-100 dark:border-cool-700"
                >
                  <span className="text-xl shrink-0">{meta.flag}</span>
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-200 leading-tight">
                    {meta.name.en}
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      )}

      {/* ── Quick Action Buttons ── */}
      <div className="flex gap-3 mt-6">
        <Link
          to="/games"
          className="px-6 py-3 bg-gradient-to-r from-coral-500 to-coral-400 text-white font-semibold rounded-full shadow-lg active:scale-95 transition-all text-sm"
        >
          🎮 Play Games
        </Link>
        <Link
          to="/profile"
          className="px-6 py-3 bg-white dark:bg-cool-800 text-coral-500 font-semibold rounded-full shadow-md border border-coral-200 dark:border-coral-500/30 active:scale-95 transition-all text-sm"
        >
          👤 Profile
        </Link>
      </div>
    </div>
  )
}
