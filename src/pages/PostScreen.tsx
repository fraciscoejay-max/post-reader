import { useParams } from 'react-router'

import { usePost } from '@/features/posts/posts.hooks'

export function PostScreen() {
  const { id } = useParams()
  const postId = Number(id)
  const { data: post, isPending, error } = usePost(postId)

  if (isPending) {
    return <p className="text-muted-foreground">Loading post…</p>
  }

  if (error) {
    return <p className="text-destructive">{error.message}</p>
  }

  if (!post) {
    return <p className="text-muted-foreground">Post not found.</p>
  }

  return (
    <article className="rounded-xl border border-border bg-card p-6 shadow-sm">
      <h1 className="mb-4 text-3xl font-bold tracking-tight">{post.title}</h1>
      <p className="text-muted-foreground">{post.body}</p>
    </article>
  )
}
