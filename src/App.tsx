import { ModeToggle } from '@/components/mode-toggle'
import { useTheme } from '@/components/theme-provider'

function App() {
  const { theme } = useTheme()

  return (
    <main className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <div className="flex flex-col items-center gap-4 rounded-xl border border-border bg-card p-8 shadow-sm">
        <div className="flex items-center gap-3">
          <h1 className="text-4xl font-bold tracking-tight">Theme provider</h1>
          <ModeToggle />
        </div>
        <p className="text-sm text-muted-foreground">Current theme: {theme}</p>
      </div>
    </main>
  )
}

export default App
