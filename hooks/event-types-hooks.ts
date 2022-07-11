import { useQuery } from "react-query";
import { findAll } from "../services/event-types";


export function useEventTypes() {
    return useQuery('event-types', findAll);
}

export function create() {
    
}