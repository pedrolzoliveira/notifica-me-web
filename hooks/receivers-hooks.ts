import { useQuery } from 'react-query';
import { findAll } from '../services/receivers-service';

export function useReceivers() {
    return useQuery('receivers', findAll);
}
