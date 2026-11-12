import { Button } from '@/components/ui/button'

function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold tracking-tight">Hello Tailwind</h1>
        <Button>It works!</Button>
      </div>
    </main>
  )
}

export default App
