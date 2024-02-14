import axios, { AxiosPromise } from 'axios'
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ItemDataEditar } from '../inteface/itemDataEditar';


const API_URL= "http://localhost:1002"

const putData= async (data: ItemDataEditar): AxiosPromise<any> => {
    const response = axios.put(API_URL + '/modificar/item/${id}', data);
    return response;
}

export function useItemDataItemId(){  
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: putData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['item-data-id'] })
            
        }
    })

    return mutate;
}

