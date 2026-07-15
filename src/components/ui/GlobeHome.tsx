import { useEffect, useRef, useState } from 'react'
import createGlobe from 'cobe'
import { Link } from 'react-router-dom'
import { CULTURE_META, CULTURES_BY_REGION } from '../../data/cultures/index'
import { REGIONS } from '../../data/regions'

interface Marker {
  location: [number, number]
  size: number
  cultureId: string
  region: string
}

export function GlobeHome() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null)
  const [ready, setReady] = useState(false)

  // Build markers from culture data
  const markers: Marker[] = CULTURE_META.map((c) => ({
    location: getCultureCoords(c.id),
    size: 0.06,
    cultureId: c.id,
    region: c.region,
  }))

  useEffect(() => {
    if (!canvasRef.current) return

    const phi = 0.5
    
    let targetPhi = phi

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600,
      height: 600,
      phi: phi,
      theta: 0.3,
      dark: 0,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.15, 0.15, 0.25],
      markerColor: [1, 0.42, 0.42],
      glowColor: [1, 0.42, 0.42] as [number,number,number],
      markers: markers as any,
    })


    setReady(true)

    // Auto-rotate slowly
    const interval = setInterval(() => {
      targetPhi += 0.005
    }, 50)

    return () => {
      globe.destroy()
      clearInterval(interval)
    }
  }, [selectedRegion])

  const handleRegionClick = (regionId: string) => {
    setSelectedRegion(selectedRegion === regionId ? null : regionId)
  }

  const regionCultures = selectedRegion ? CULTURES_BY_REGION[selectedRegion] ?? [] : []

  return (
    <div className="flex flex-col items-center py-4">
      {/* Globe */}
      <div className="relative w-full max-w-[400px] aspect-square mx-auto">
        <canvas
          ref={canvasRef}
          className="w-full h-full"
          style={{ width: '100%', height: '100%', cursor: 'grab' }}
        />
        {!ready && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl animate-float">🌍</span>
          </div>
        )}
      </div>

      {/* Region Pills */}
      <div className="flex flex-wrap justify-center gap-2 mt-4 px-4">
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
        <Link to="/games" className="px-6 py-3 bg-gradient-to-r from-coral-500 to-coral-400 text-white font-semibold rounded-full shadow-lg active:scale-95 transition-all text-sm">
          🎮 Play Games
        </Link>
        <Link to="/profile" className="px-6 py-3 bg-white dark:bg-cool-800 text-coral-500 font-semibold rounded-full shadow-md border border-coral-200 dark:border-coral-500/30 active:scale-95 transition-all text-sm">
          👤 Profile
        </Link>
      </div>
    </div>
  )
}

// Culture coordinate mapping (lat, lng)
function getCultureCoords(id: string): [number, number] {
  const coords: Record<string, [number, number]> = {
    china: [35, 104],
    japan: [36, 138],
    korea: [37, 127],
    thailand: [15, 100],
    vietnam: [14, 108],
    singapore: [1.3, 103.8],
    indonesia: [-5, 120],
    philippines: [13, 122],
    india: [20, 78],
    turkey: [39, 35],
    uae: [24, 54],
    germany: [51, 10],
    france: [46, 2],
    uk: [55, -3],
    italy: [42, 12],
    spain: [40, -3],
    russia: [60, 90],
    egypt: [27, 30],
    southafrica: [-30, 25],
    usa: [38, -97],
    canada: [56, -106],
    brazil: [-10, -55],
    mexico: [23, -102],
    australia: [-25, 133],
    newzealand: [-41, 174],
  }
  return coords[id] ?? [0, 0]
}
