import { Button } from '@/components/ui/button'
import { usePosts } from './posts.hooks'
import { PostRow, PostSkeleton } from './components/Post'

export function PostList() {
  const { isPending, error, data, refetch } = usePosts()

  if (isPending) {
    return (
      <div className="flex flex-col gap-3" aria-busy="true">
        {Array.from({ length: 3 }).map((_, index) => (
          <PostSkeleton key={index} />
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <div className="mt-6 max-w-md rounded-xl border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive">
        <p className="font-medium">Failed to load posts</p>
        <p className="mt-2">{error.message}</p>
        <Button variant="outline" className="mt-4" onClick={() => refetch()}>
          Try again
        </Button>
      </div>
    )
  }

  if (data?.length === 0) {
    return <p className="mt-6 text-muted-foreground">Nothing published yet.</p>
  }

  return (
    <div className="mt-6 flex flex-col gap-3">
      {data?.map((post) => (
        <PostRow key={post.id} post={post} />
      ))}
    </div>
  )
}
