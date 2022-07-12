import { useQuery, useMutation, useQueryClient } from 'react-query';
import { findAll, create, destroy, update } from '../services/receivers-service';

export function useReceivers() {
    return useQuery('receivers', findAll);
}


export function useAddReceiver() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: create,
        onSuccess: () => {
            queryClient.invalidateQueries(['receivers']);
        }
    });
}

export function useDestroyReceiver(id: string) {
    const queryClient = useQueryClient();
    return useMutation({
        mutationKey: `destroy-${id}`,
        mutationFn: () => destroy({ id }),
        onSuccess: () => {
            queryClient.invalidateQueries(['receivers']);
        }
    });
}

export function useUpdateReceiver(id: string) {
    const queryClient = useQueryClient();
    return useMutation({
        mutationKey: `update-${id}`,
        mutationFn: ({ name, registeredEvents }:{ name: string, registeredEvents: string[] }) => update({ id, name, registeredEvents }),
        onSuccess: () => {
            queryClient.invalidateQueries(['receivers']);
        }
    })
}