import { useQuery } from '@tanstack/react-query'

import { getComments } from './comments.api'

export const useComments = (postId: number) =>
  useQuery({
    queryKey: ['comments', postId],
    queryFn: () => getComments(postId),
  })
