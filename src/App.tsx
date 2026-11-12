import { Button } from '@/components/ui/button'
import { useTheme } from '@/components/theme-provider'

function App() {
  const { theme, setTheme } = useTheme()

  return (
    <main className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <div className="flex flex-col items-center gap-4 rounded-xl border border-border bg-card p-8 shadow-sm">
        <h1 className="text-4xl font-bold tracking-tight">Theme provider</h1>
        <p className="text-sm text-muted-foreground">Current theme: {theme}</p>
        <Button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          Toggle theme
        </Button>
      </div>
    </main>
  )
}

export default App
