import { useQuery, useMutation, useQueryClient } from 'react-query';
import { findAll, find, create, destroy, update } from '../services/receivers-service';

export function useReceivers() {
    return useQuery('receivers', findAll);
}

export function useReceiver(id: string) {
    return useQuery(`receiver-${id}`, () => find(id))
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
        mutationFn: ({ name, events }:{ name: string, events: string[] }) => update({ id, name, events }),
        onSuccess: () => {
            queryClient.invalidateQueries(['receivers']);
        }
    })
}
