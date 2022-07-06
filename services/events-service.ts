import { API } from './api';

export async function findAll() {
    const response = await API.get<{ events: {
        id: string;
        code: string;
        text: string;
        createdAt: string;
    }[] }>('/events');
    return response.data.events;
}