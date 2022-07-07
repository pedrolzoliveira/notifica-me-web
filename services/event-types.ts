import { API } from "./api";

export async function findAll() {
    const response = await API.get<{
        eventTypes: {
            code: string;
            name: string;
            description?: string;
            createdAt: string;
            updatedAt: string;
        }[]
    }>('/event-types');
    return response.data.eventTypes;
}