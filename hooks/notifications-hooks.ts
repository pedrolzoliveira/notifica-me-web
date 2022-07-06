import { useQuery } from 'react-query';
import { findAll } from '../services/notifications-service';

export function useNotifications() {
    return useQuery('notifications', findAll);
}