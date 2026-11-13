import { Link, useLocation } from 'react-router'

import { buttonVariants } from '@/components/ui/button'

export default function NotFoundScreen() {
  const { pathname } = useLocation()

  return (
    <div className="mt-10 flex justify-center">
      <div className="w-full max-w-xl rounded-xl border border-border bg-card p-8 text-center shadow-sm">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
          404
        </p>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground">
          Page not found
        </h1>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Nothing is routed at <code className="rounded bg-muted px-1.5 py-0.5 text-foreground">{pathname}</code>.
        </p>

        <div className="mt-8 flex justify-center">
          <Link to="/" className={buttonVariants({ variant: 'outline', size: 'default' })}>
            Browse all posts
          </Link>
        </div>
      </div>
    </div>
  )
}
