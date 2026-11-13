import { Button } from '@/components/ui/button'
import type { Comment } from './comments.types'
import { CommentItem, CommentItemSkeleton } from './components/Comment'
import { useComments } from './comments.hooks'

export function CommentList({ postId }: { postId: number }) {
  const { data, isPending, isError, error, refetch } = useComments(postId)

  return (
    <section className="mt-10">
      <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
        Comments
      </p>

      {isPending && (
        <div className="flex flex-col gap-3">
          <CommentItemSkeleton />
          <CommentItemSkeleton />
        </div>
      )}

      {isError && (
        <div className="space-y-4">
          <p className="text-sm text-destructive">{error.message}</p>
          <Button variant="outline" size="sm" onClick={() => refetch()}>
            Try again
          </Button>
        </div>
      )}

      {!isPending && !isError && data?.length === 0 && (
        <p className="text-sm text-muted-foreground">No comments on this post.</p>
      )}

      {!isPending && !isError && data && (
        <div className="flex flex-col gap-3">
          {data.map((comment: Comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </div>
      )}
    </section>
  )
}
