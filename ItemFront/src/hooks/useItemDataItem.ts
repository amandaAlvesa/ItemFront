import axios, { AxiosPromise } from 'axios'
import { itemData } from '../inteface/itemData';
import { useMutation, useQueryClient } from '@tanstack/react-query';


const API_URL= "http://localhost:1002"

const postData= async (data: itemData): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/item/${id}', data);
    return response;
}

export function useItemDataItem(){  
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['item-data'] })
            
        }
    })

    return mutate;
}

