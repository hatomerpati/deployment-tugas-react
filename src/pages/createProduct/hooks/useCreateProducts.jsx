import { useCallback } from "react";
import { useState } from "react"
import { Await } from "react-router-dom";
import { api } from "../../../api";
import { message } from "antd";

export const useGetProduct = () => {
    const [isLoading,setIsLoading] = useState(true);
    const [data, setData] = useState();

    const getData = useCallback(async () => {
        try{
            const res = await api.getProduct()
            console.log(res)
            setData(res.data)
        } catch (err) {
            message.open({
                type: 'error',
                content:   `${err?.message}`,
              });
        } finally {
            setIsLoading(false);
            message.open({
                type: 'success',
                content: 'This is a success message',
              });

        }
        },[])

    

        return [isLoading, data, getData]
};

export const useDeleteProduct = () => {
    const [isLoading,setIsLoading] = useState(false);

    const deleteData = useCallback(async (id, onSuccess) => {
        try{
            setIsLoading(true);
            await api.deleteProduct(id)
           onSuccess && onSuccess();
        } catch (err) {
            message.open({
                type: 'error',
                content:   `${err?.message}`,
              });
        } finally {
            setIsLoading(false);
            message.open({
                type: 'success',
                content: 'berhasil hilang',
              });

        }
        },[])

        

    

        return [isLoading, deleteData]
};

export const usePostProduct = () => {
    const [isLoading,setIsLoading] = useState(false);

    const createData = useCallback(async (body, onSuccess) => {
        try{
            setIsLoading(true);
            await api.createProduct(body)
           onSuccess && onSuccess();
        } catch (err) {
            message.open({
                type: 'error',
                content:   `${err?.message}`,
              });
        } finally {
            setIsLoading(false);
            message.open({
                type: 'success',
                content: 'berhasil terkirim',
              });

        }
        },[])

        

    

        return [isLoading, createData]
};


export const useUpdateProduct = () => {
    const [isLoading,setIsLoading] = useState(false);

    const updateData = useCallback(async (id, body, onSuccess) => {
        try{
            setIsLoading(true);
            await api.updateProduct(id, body)
           onSuccess && onSuccess();
        } catch (err) {
            message.open({
                type: 'error',
                content:   `${err?.message}`,
              });
        } finally {
            setIsLoading(false);
            message.open({
                type: 'success',
                content: 'berhasil update',
              });

        }
        },[])

        

    

        return [isLoading, updateData]
};

