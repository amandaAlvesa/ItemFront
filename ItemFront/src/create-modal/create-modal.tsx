import { useEffect, useState } from "react"
import { useItemDataMutate } from "../hooks/useItemDataMutate";
import { itemData } from "../inteface/itemData";
import './modal.css'
interface InputProps{
    label:string,
    value:string | number,
    updateValue(value:any):void
}

interface ModalProps{
    closeModal():void
}

const Input = ({label, value, updateValue}: InputProps) => {
    return(
        <>
        <label>{label}</label>
        <input value={value} onChange={evento => updateValue(evento.target.value)}></input>
        </>
    )
}

export function CreateModal({closeModal}:ModalProps){

    const[produto, setProduto] =useState("");
    const[quantidade, setQuantidade] =useState(0);
    const[dataComprada, setDataComprada] =useState(0);
    const[dataVencimento, setDataVencimento] =useState(0);
    const[categoria, setCategoria] =useState("");
    const{mutate, isSuccess} = useItemDataMutate();

    const submit = () => {
        const itemData: itemData = {
            produto,
            quantidade,
            dataComprada,
            dataVencimento,
            categoria
        }
        mutate(itemData)
    }

    useEffect(()=>{
        if(!isSuccess) return
        closeModal();
    },[isSuccess])

    return(
        <div className="modal-overlay">
            <div className="modal-body">
                <form className="input-container">
                <Input label="Produto" value={produto} updateValue={setProduto}></Input>
                <Input label="Quantidade" value={quantidade} updateValue={setQuantidade}></Input>
                <Input label="Data Comprada" value={dataComprada} updateValue={setDataComprada}></Input>
                <Input label="Data de Vencimento" value={dataVencimento} updateValue={setDataVencimento}></Input>
                <Input label="Categoria" value={categoria} updateValue={setCategoria}></Input>
                </form>
                <button onClick={submit} className="btn-secondary">Adicionar</button>
            </div>
        </div>
    )
}