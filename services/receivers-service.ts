import { AxiosResponse } from 'axios';
import { API } from './api';


export async function findAll() {
    const response = await API.get<{
        receivers: {
            id: string;
            customerId: string;
            name: string;
            number: string;
            messenger: "whatsapp" | "telegram" | "sms";
            registeredEvents: {
                id: string;
                eventCode: string;
                receiverId: string;
            }[]
        }[]
    }>('/receivers');
    return response.data.receivers;
}

interface createParams {
    customerId: string;
    name: string;
    number: string;
    messenger: "whatsapp" | "telegram" | "sms"
}

export async function create(params: createParams) {
    const response = await API.post<typeof params, AxiosResponse<{
        receiver: {
            customerId: string;
            id: string;
            name: string;
            number: string;
            messenger: "whatsapp" | "telegram" | "sms";
        }
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