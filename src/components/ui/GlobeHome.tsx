import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CULTURE_META, CULTURES_BY_REGION } from '../../data/cultures/index'
import { REGIONS } from '../../data/regions'

export function GlobeHome() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null)

  const handleRegionClick = (regionId: string) => {
    setSelectedRegion(selectedRegion === regionId ? null : regionId)
  }

  const regionCultures = selectedRegion ? CULTURES_BY_REGION[selectedRegion] ?? [] : []

  return (
    <div className="flex flex-col items-center py-4">
      {/* CSS-only Globe */}
      <div className="relative w-full max-w-[350px] aspect-square mx-auto flex items-center justify-center">
        {/* Outer glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 via-emerald-400/10 to-blue-600/20 blur-3xl" />

        {/* Globe circle with spinning animation */}
        <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px]">
          {/* Spinning globe */}
          <div
            className="absolute inset-0 rounded-full animate-spin-slow"
            style={{
              background: 'linear-gradient(135deg, #1e90ff 0%, #00bfff 20%, #3cb371 40%, #228b22 55%, #1e90ff 75%, #4169e1 100%)',
              backgroundSize: '200% 200%',
              animation: 'spin-globe 12s linear infinite, pulse-glow 4s ease-in-out infinite',
              boxShadow: '0 0 60px rgba(30, 144, 255, 0.3), inset 0 0 80px rgba(255, 255, 255, 0.1)',
            }}
          />

          {/* Inner highlight overlay */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.25) 0%, transparent 60%)',
              pointerEvents: 'none',
            }}
          />

          {/* Grid lines overlay (latitude/longitude) */}
          <div
            className="absolute inset-0 rounded-full opacity-20"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
              backgroundSize: '25% 25%',
              pointerEvents: 'none',
            }}
          />

          {/* Culture markers positioned around the globe */}
          {CULTURE_META.map((culture, index) => {
            const angle = (index / CULTURE_META.length) * 360
            const rad = (angle * Math.PI) / 180
            // Position markers along the outer ring of the globe
            const markerRadius = 44 // percentage from center
            const x = 50 + markerRadius * Math.cos(rad)
            const y = 50 + markerRadius * Math.sin(rad)
            return (
              <div
                key={culture.id}
                className="absolute rounded-full"
                title={`${culture.name.en} ${culture.flag}`}
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  width: '10px',
                  height: '10px',
                  transform: 'translate(-50%, -50%)',
                  backgroundColor: culture.flag ? '#ffffff' : '#60a5fa',
                  boxShadow: '0 0 6px rgba(255,255,255,0.8)',
                  zIndex: 10,
                }}
              >
                {/* Tiny emoji flag inside marker */}
                <span
                  className="absolute"
                  style={{
                    fontSize: '7px',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    lineHeight: 1,
                  }}
                >
                  {culture.flag}
                </span>
              </div>
            )
          })}

          {/* Edge vignette */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              boxShadow: 'inset 0 0 40px rgba(0,0,0,0.4)',
              pointerEvents: 'none',
              borderRadius: '50%',
            }}
          />
        </div>

        {/* "Explore the World" text overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center">
            <div className="text-lg sm:text-xl font-bold text-white drop-shadow-lg">
              🌍
            </div>
          </div>
        </div>
      </div>

      {/* Region Pills */}
      <div className="flex flex-wrap justify-center gap-2 mt-6 px-4">
        {REGIONS.map((r) => (
          <button
            key={r.id}
            onClick={() => handleRegionClick(r.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedRegion === r.id
                ? 'bg-coral-500 text-white shadow-lg scale-105'
                : selectedRegion && selectedRegion !== r.id
                  ? 'bg-gray-100 dark:bg-cool-800 text-gray-400 opacity-50'
                  : 'bg-gray-100 dark:bg-cool-800 text-gray-600 dark:text-gray-300 hover:bg-coral-100 dark:hover:bg-coral-500/20'
            }`}
          >
            {r.emoji} {r.name.en}
          </button>
        ))}
      </div>

      {/* Selected Region Cultures */}
      {selectedRegion && (
        <div className="w-full mt-6 px-4 animate-slide-up">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg font-bold font-fredoka">
              {REGIONS.find((r) => r.id === selectedRegion)?.emoji}{' '}
              {REGIONS.find((r) => r.id === selectedRegion)?.name.en}
            </span>
            <span className="text-xs text-gray-400">{regionCultures.length} cultures</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {regionCultures.map((cid) => {
              const meta = CULTURE_META.find((c) => c.id === cid)
              if (!meta) return null
              return (
                <Link
                  key={cid}
                  to={`/culture/${cid}`}
                  className="card flex items-center gap-3 p-3 active:scale-95 transition-all hover:shadow-card-hover no-underline"
                >
                  <span className="text-2xl">{meta.flag}</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    {meta.name.en}
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      )}

      {/* Quick Actions */}
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
