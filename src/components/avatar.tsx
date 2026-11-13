import type { ReactNode } from 'react'

export function Avatar({ children }: { children: ReactNode }) {
  return (
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted text-sm font-medium text-muted-foreground ring-1 ring-border">
      {children}
    </span>
  )
}
