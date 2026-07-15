import { BottomNav } from './BottomNav'
import type { ReactNode } from 'react'

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col max-w-2xl mx-auto">
      <main className="flex-1 px-4 pb-24 safe-bottom">
        {children}
      </main>
      <BottomNav />
    </div>
  )
}
