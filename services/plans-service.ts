import { AxiosResponse } from "axios";
import { API } from "./api";

export async function find(id: string) {
    const response = await API.get<{
        plan: {
            id: string;
            name: string;
            description: string;
            price: number;
            createdAt: string;
            updatedAt: string;
        }
    }>(`/plans?id=${id}`);
    return response.data.plan;
}

export async function findAll() {
    const response = await API.get<{
        plans: {
            id: string;
            name: string;
            description: string;
            price: number;
            createdAt: string;
            updatedAt: string;
            events: {
                code: string;
                name: string;
                description: string
            }[]
        }[]
    }>(`/plans`);
    return response.data.plans;
}


interface createParams {
    name: string;
    description: string;
    price: number;
    events: string[];
}
export async function create(params: createParams) {
    const response = await API.post<typeof params, AxiosResponse<{
        plan: {
            id: string;
            name: string;
            description: string;
            price: number;
            createdAt: string;
            updatedAt: string;
        }
    }>>('/plans', params);
    return response.data.plan;
}

export async function destroy(id: string) {
    const response = await API.delete('/plans', {
        data: { id }
    });
    return response.status === 200;
}


interface updateParams {
    id: string;
    name?: string;
    description?: string;
    events?: string[];
    price?: number;
}
export async function update(params: updateParams) {
    const response = await API.put<typeof params, AxiosResponse<{
        plan: {
            id: string;
            name: string;
            description: string;
            price: number;
            events: {
                code: string
            }[];
            createdAt: string;
            updatedAt: string;
        }
    }>>('/plans', params);
    return response.data.plan;

}

