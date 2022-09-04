import { AxiosResponse } from 'axios';
import { API } from './api';

interface Receiver {
    id: string;
    customerId: string;
    name: string;
    number: string;
    messenger: "whatsapp" | "telegram" | "sms";
    events: {
        id: string;
        code: string;
        receiverId: string;
    }[]
}

export async function findAll() {
    const response = await API.get<{
        receivers: Receiver[]
    }>('/receivers');
    return response.data.receivers;
}

export async function find(id: string) {
    const response = await API.get<{
        receiver: {
            id: string;
            customerId: string;
            name: string;
            number: string;
            messenger: "whatsapp" | "telegram" | "sms";
            events: {
                eventCode: string;
                receiverId: string;
            }[]
        }
    }>(`/receivers?id=${id}`);
    return response.data.receiver;
}

interface createParams {
    customerId: string;
    name: string;
    number: string;
    messenger: "whatsapp" | "telegram" | "sms"
}

export async function create(params: createParams) {
    const response = await API.post<typeof params, AxiosResponse<{
        receiver: Omit<Receiver, 'events'>
    }>>('/receivers', params);
    return response.data.receiver;
}

interface destroyParams {
    id: string;
}

export async function destroy(params: destroyParams) {
    const response = await API.delete('/receivers', {
        data: params
    });
    return response.status === 200;
}


interface updateParams {
    id: string;
    name: string;
    events: string[];
}
export async function update(params: updateParams) {
    const response = await API.put<typeof params, AxiosResponse<{
        receiver: {
            id: string;
            customerId: string;
            number: string;
            name: string;
            messenger: "whatsapp" | "telegram" | "sms";
            events: {
                eventCode: string;
                receiverId: string;
            }[]
        }
    }>>('/receivers', params);
    return response.data.receiver;
}
