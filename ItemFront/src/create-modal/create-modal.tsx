import { useEffect, useState } from "react"
import { useItemDataMutate } from "../hooks/useItemDataMutate";
import { itemData } from "../inteface/itemData";
import './modal.css'
import DatePicker from "react-datepicker";
import { FaRegCalendarCheck } from "react-icons/fa";
import 'react-datepicker/dist/react-datepicker.css'


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
    const[quantidade, setQuantidade] =useState("");
    const[dataComprada, setDataComprada] =useState(new Date());
    const[dataVencimento, setDataVencimento] =useState(new Date());
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
<br/>

                <label>Data Da Compra</label>
<br/>
                <DatePicker  selected={dataComprada} onChange={compra => compra && setDataComprada(compra)}/>
<br/>
                <label>Data de Vencimento</label>
                <DatePicker selected={dataVencimento} onChange={vencimento => vencimento && setDataVencimento(vencimento)} />
<br/>

                <label>Categoria</label>
<br/>
                <select name="categoria" value={categoria} onChange={texto => setCategoria(texto.target.value)}>
                    <option>LIMPEZA</option>
                    <option>ALIMENTO_PERECIVEL</option>
                    <option>ALIMENTO_NAO_PERECIVEL</option>
                    </select><br/><br/>
                    <label>Quantidade</label>
<br/>
                <select name="quantidade" value={quantidade} onChange={quantidade => setQuantidade(quantidade.target.value)}>
                    <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option>
                    <option>7</option><option>8</option><option>9</option><option>10</option><option>11</option><option>12</option>
                    <option>13</option><option>14</option><option>15</option><option>16</option><option>17</option><option>18</option>
                    <option>19</option><option>20</option><option>21</option><option>22</option><option>23</option><option>24</option>
                </select>
             <button onClick={submit} className="btn-secondary">Adicionar</button>

                </form>
                
            </div> 
        </div>
    )
}