import { useQuery } from 'react-query';

import { findAll } from '../services/events-service';

export function useEvents() {
    return useQuery('events', findAll);
}