import { Link, Outlet, useLocation } from 'react-router'

import { ModeToggle } from '@/components/mode-toggle'

export function Layout() {
  const { pathname } = useLocation()
  const atRoot = pathname === '/'

  return (
    <div className="min-h-screen px-4 py-6">
      <div className="mx-auto max-w-5xl">
        <header className="mb-6 flex items-center justify-between gap-4">
          <span className="text-lg font-semibold tracking-tight">Posts</span>
          <ModeToggle />
        </header>

        <main>
          {!atRoot && (
            <div className="mb-4">
              <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
                ← Back to posts
              </Link>
            </div>
          )}

          <Outlet />
        </main>
      </div>
    </div>
  )
}
