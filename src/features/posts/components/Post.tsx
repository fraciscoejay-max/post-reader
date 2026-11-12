import { Link } from 'react-router'

import { Card, CardAction, CardContent, CardHeader } from '@/components/ui/card'
import type { Post } from '../posts.types'

export function PostRow({ post }: { post: Post }) {
  return (
    <Card className="group relative transition-colors hover:bg-accent/50">
      <CardHeader className="flex-row items-center justify-between gap-4">
        <Link
          to={`/posts/${post.id}`}
          className="line-clamp-1 text-lg font-semibold tracking-tight text-foreground transition-colors hover:text-primary"
        >
          {post.title}
        </Link>
      </CardHeader>
      <CardContent className="text-muted-foreground">
        <p className="line-clamp-2 text-sm leading-6">{post.body}</p>
      </CardContent>
      <CardAction className="absolute right-4 top-4 text-sm text-muted-foreground">
        #{post.id}
      </CardAction>
    </Card>
  )
}

export function PostSkeleton() {
  return (
    <Card className="space-y-2 p-4">
      <div className="h-4 w-24 rounded-md bg-muted" />
      <div className="h-4 w-full rounded-md bg-muted" />
      <div className="h-4 w-3/4 rounded-md bg-muted" />
    </Card>
  )
}
