import { useQuery, useMutation, useQueryClient } from 'react-query';

export function useCredentials() {
    return useQuery('credentials');
}

export function useCreateCredential() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async () => {},
        onSuccess: () => {
            queryClient.invalidateQueries(['credentials']);
        }

    });
}