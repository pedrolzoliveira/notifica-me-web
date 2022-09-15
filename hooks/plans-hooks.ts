import { useQuery, useQueryClient, useMutation } from 'react-query'
import { create, find, findAll, update, destroy } from '../services/plans-service'

export function usePlans() {
  return useQuery('plans', findAll)
}

export function usePlan(id: string) {
  return useQuery(`plan-${id}`, async () => await find(id))
}

export function useCreatePlan() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: create,
    onSuccess: () => {
      queryClient.invalidateQueries(['plans'])
    }
  })
}

export function useUpdatePlan(id: string) {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: `update-plan-${id}`,
    mutationFn: async ({ name, description, price, events }: { name: string, description: string, price: number, events: string[] }) => await update({ id, name, description, price, events }),
    onSuccess: () => {
      queryClient.invalidateQueries(['plans'])
    }
  })
}

export function useDestroyPlan(id: string) {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: `destroy-plan-${id}`,
    mutationFn: async () => await destroy(id),
    onSuccess: () => {
      queryClient.invalidateQueries(['plans'])
    }
  })
}
