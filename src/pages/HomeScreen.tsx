import { PostList } from '@/features/posts/PostList'

export function HomeScreen() {
  return (
    <>
      <h1 className="mb-6 text-2xl font-semibold tracking-tight">Posts</h1>
      <PostList />
    </>
  )
}
