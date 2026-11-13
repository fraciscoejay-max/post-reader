import { Avatar } from '@/components/avatar'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

import type { Comment as CommentType } from '../comments.types'

export function CommentItem({ comment }: { comment: CommentType }) {
  const initial = comment.email.trim().charAt(0).toUpperCase() || '*'

  return (
    <Card className="w-full">
      <CardHeader className="flex-row items-center gap-3">
        <Avatar>{initial}</Avatar>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-foreground">{comment.name}</p>
        </div>
      </CardHeader>

      <CardContent className="pt-0 text-[0.9375rem] leading-[1.65] text-foreground/80">
        <p>{comment.body}</p>
      </CardContent>
    </Card>
  )
}

export function CommentItemSkeleton() {
  return (
    <Card className="w-full">
      <CardHeader className="flex-row items-center gap-3">
        <Skeleton className="h-8 w-8 shrink-0 rounded-full" />
        <Skeleton className="h-4 w-32 rounded-md" />
      </CardHeader>

      <CardContent className="space-y-2 pt-0">
        <Skeleton className="h-4 w-full rounded-md" />
        <Skeleton className="h-4 w-11/12 rounded-md" />
        <Skeleton className="h-4 w-2/3 rounded-md" />
      </CardContent>
    </Card>
  )
}
