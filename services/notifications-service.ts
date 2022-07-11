import { API } from './api';

export async function findAll() {
    const response = await API.get<{
        notifications: {
            event: {
                id: string;
                code: string;
                text: string;
                createdAt: string;
            },
            receiver: {
                id: string;
                name: string;
                customerId: string;
                number: string;
                messenger: "whatsapp" | "telegram" | "sms"
            },
            createdAt: string;
        }[]
    }>('/notifications');
    return response.data.notifications;
}