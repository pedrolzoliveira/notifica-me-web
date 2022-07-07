import { API } from './api';


export async function findAll() {
    const response = await API.get<{
        receivers: {
            id: string;
            customerId: string;
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