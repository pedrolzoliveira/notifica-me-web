import { useQuery, useMutation, useQueryClient } from "react-query";
import { findAll, find, create, destroy, update } from "../services/event-types";


export function useEventTypes() {
    return useQuery('event-types', findAll);
}

export function useEventType(code: string) {
    return useQuery(`event-type-${code}`, {
        queryFn: () => find(code)
    })
}

export function useCreateEventType() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: create,
        onSuccess: () => {
            queryClient.invalidateQueries(['event-types'])
        }
    })
}

export function useDestroyEventType(code: string) {
    const queryClient = useQueryClient();
    return useMutation({
        mutationKey: `destroy-${code}`,
        mutationFn: () => destroy({ code }),
        onSuccess: () => {
            queryClient.invalidateQueries(['event-types'])
        }
    })
}

export function useUpdateEventType(code: string) {
    const queryClient = useQueryClient();
    return useMutation({
        mutationKey: `update-${code}`,
        mutationFn: ({ name, description } : { name?: string, description?: string }) => update({ code, name, description }),
        onSuccess: () => {
            queryClient.invalidateQueries(['event-types'])
        }
    });
}
