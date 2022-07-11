import { AxiosResponse } from "axios";
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

interface createParams {
    code: string;
    name: string;
    description?: string;
}

export async function create(params: createParams) {
    const response = await API.post<typeof params, AxiosResponse<{
        eventType: {
            code: string;
            name: string;
            description?: string;
            createdAt: string;
            updatedAt: string;
        }
    }>>('/event-types', params);
    return response.data.eventType;
}