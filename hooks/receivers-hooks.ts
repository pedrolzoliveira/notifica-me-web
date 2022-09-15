import { useQuery, useMutation, useQueryClient } from 'react-query'
import { findAll, find, create, destroy, update } from '../services/receivers-service'

export function useReceivers() {
  return useQuery('receivers', findAll)
}

export function useReceiver(id: string) {
  return useQuery(`receiver-${id}`, async () => await find(id))
}

export function useAddReceiver() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: create,
    onSuccess: () => {
      queryClient.invalidateQueries(['receivers'])
    }
  })
}

export function useDestroyReceiver(id: string) {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: `destroy-${id}`,
    mutationFn: async () => await destroy({ id }),
    onSuccess: () => {
      queryClient.invalidateQueries(['receivers'])
    }
  })
}

export function useUpdateReceiver(id: string) {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: `update-${id}`,
    mutationFn: async ({ name, events }: { name: string, events: string[] }) => await update({ id, name, events }),
    onSuccess: () => {
      queryClient.invalidateQueries(['receivers'])
    }
  })
}
