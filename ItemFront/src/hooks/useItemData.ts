import axios, { AxiosPromise } from 'axios'
import { itemData } from '../inteface/itemData'
import { useQuery } from '@tanstack/react-query';

const API_URL= "http://localhost:1002"

const fetchData= async (): AxiosPromise<itemData[]> => {
    const response = axios.get(API_URL + '/itens');
    return response;
}

export function useItemData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['item-data'],
        retry: 2
    })

    return{
        ...query,
        data: query.data?.data
    }
}