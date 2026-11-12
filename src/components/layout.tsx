import type { ReactNode } from 'react'

import { ModeToggle } from '@/components/mode-toggle'

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen px-4 py-6">
      <div className="mx-auto max-w-5xl">
        <header className="mb-6 flex items-center justify-between gap-4">
          <span className="text-lg font-semibold tracking-tight">Posts</span>
          <ModeToggle />
        </header>
        <main>{children}</main>
      </div>
    </div>
  )
}
