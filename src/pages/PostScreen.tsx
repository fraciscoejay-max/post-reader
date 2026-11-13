import { isAxiosError } from 'axios'
import { Link, useParams } from 'react-router'

import { Button, buttonVariants } from '@/components/ui/button'
import { usePost } from '@/features/posts/posts.hooks'

const toParagraphs = (body: string) =>
  body
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)

export function PostScreen() {
  const { id } = useParams()
  const postId = Number(id)
  const { data: post, isPending, error, refetch } = usePost(postId)

  if (isPending) {
    return (
      <div className="mt-6 flex flex-col gap-6" aria-busy="true" role="status">
        <div className="h-4 w-16 animate-pulse rounded-md bg-muted" />
        <div className="h-10 w-3/4 animate-pulse rounded-md bg-muted" />
        <div className="grid gap-3">
          <div className="h-4 w-full animate-pulse rounded-md bg-muted" />
          <div className="h-4 w-full animate-pulse rounded-md bg-muted" />
          <div className="h-4 w-2/3 animate-pulse rounded-md bg-muted" />
          <div className="h-4 w-full animate-pulse rounded-md bg-muted" />
        </div>
      </div>
    )
  }

  if (error) {
    const isNotFound = isAxiosError(error) && error.response?.status === 404

    return (
      <div className="mt-6 max-w-xl">
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <p className="text-sm font-medium text-muted-foreground">Missing</p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
            {isNotFound ? 'No post at this address' : 'The post didn’t load'}
          </h1>
          <p className="mt-3 text-base text-muted-foreground">
            {isNotFound
              ? 'This post does not exist or has been deleted.'
              : error.message}
          </p>

          <div className="mt-6 flex gap-3">
            <Link
              to="/"
              className={buttonVariants({ variant: 'outline', size: 'default' })}
            >
              Browse all posts
            </Link>
            {!isNotFound && (
              <Button variant="outline" onClick={() => refetch()}>
                Try again
              </Button>
            )}
          </div>
        </div>
      </div>
    )
  }

  if (!post) {
    return <p className="text-muted-foreground">Post not found.</p>
  }

  const paragraphs = toParagraphs(post.body)

  return (
    <article className="rounded-xl border border-border bg-card p-6 shadow-sm">
      <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
        Post #{post.id}
      </p>
      <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground">{post.title}</h1>

      <div className="mt-6 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
        <span>by</span>
        <span className="font-medium text-foreground">User {post.userId}</span>
      </div>

      <div className="mt-8 space-y-6 text-[1.0625rem] leading-8 text-foreground">
        {paragraphs.length > 0 ? (
          paragraphs.map((paragraph, index) => (
            <p key={`${paragraph}-${index}`} className="text-pretty">
              {paragraph}
            </p>
          ))
        ) : (
          <p>{post.body}</p>
        )}
      </div>
    </article>
  )
}
