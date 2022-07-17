import { useQuery, useQueryClient, useMutation } from "react-query"
import { create, find, findAll, update } from "../services/plans-service";

export function usePlans() {
    return useQuery('plans', findAll);
}

export function usePlan(id: string) {
    return useQuery(`plan-${id}`, () => find(id));
}

export function useCreatePlan() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: create,
        onSuccess: () => {
            queryClient.invalidateQueries(['plans']);
        }
    })
}

export function useUpdatePlan(id: string) {
    const queryClient = useQueryClient();
    return useMutation({
        mutationKey: `update-plan-${id}`,
        mutationFn: ({ name, description, price } : { name: string, description: string, price: number }) => update({ id, name, description, price }),
        onSuccess: () => {
            queryClient.invalidateQueries(['plans'])
        }
    })
}
