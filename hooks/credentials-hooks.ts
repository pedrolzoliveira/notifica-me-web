import { useQuery, useMutation, useQueryClient } from 'react-query'
import { create, findAll, destroy } from '../services/credentials-service'

export function useCredentials() {
  return useQuery('credentials', findAll)
}

export function useCreateCredential() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: create,
    onSuccess: () => {
      queryClient.invalidateQueries(['credentials'])
    }

  })
}

export function useDestroyCredential(id: string) {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async () => await destroy(id),
    onSuccess: () => {
      queryClient.invalidateQueries(['credentials'])
    }
  })
}
