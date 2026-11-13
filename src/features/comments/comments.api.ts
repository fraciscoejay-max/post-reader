import api from '@/lib/api'

import type { Comment } from './comments.types'

export const getComments = async (postId: number): Promise<Comment[]> => {
  const res = await api.get<Comment[]>(`/posts/${postId}/comments`)
  return res.data
}
