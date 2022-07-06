import { API } from './api';


export async function findAll() {
    const response = await API.get<{
        receivers: {
            id: string;
            customerId: string;
            number: string;
            messenger: "whatsapp" | "telegram" | "sms";
        }[]
    }>('/receivers');
    return response.data.receivers;
}