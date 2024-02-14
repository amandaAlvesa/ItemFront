import { useEffect, useState } from "react"
import 'react-datepicker/dist/react-datepicker.css'
import { useNavigate, useParams } from "react-router-dom";
import { ItemDataEditar } from "../../inteface/itemDataEditar";
import axios from "axios";



export default function CardEditar(){
  const navigate = useNavigate();


  const {id}=useParams();


    const[produto, setProduto] =useState("");
    const[quantidade, setQuantidade] =useState("");
    const[categoria, setCategoria] =useState("");
    const[dataComprada, setDataComprada] =useState(new Date());
    const[dataVencimento, setDataVencimento] =useState(new Date());

    const submit = async () => {
      const itemDataEditarPronto: ItemDataEditar = {
        produto,
        quantidade,
        categoria,
        dataComprada,
        dataVencimento
      }
      await axios.put(`http://localhost:1002/item/modificar/${id}`,itemDataEditarPronto);
      navigate("/")
  }

useEffect(() => {
  const getItem = async () => {
      await fetch(`http://localhost:1002/item/pegarItem/${id}`)
          .then((response) => response.json())
          .then((responseJson) => {
              setProduto(responseJson.produto);
              setQuantidade(responseJson.quantidade);
              setCategoria(responseJson.categoria)
              setDataComprada(responseJson.dataComprada);
              setDataVencimento(responseJson.dataVencimento);

          });
  }
  getItem();
}, [id]);


    return(
        <div className="modal-overlay">
            <div className="modal-body">
                <form className="input-container" onSubmit={submit}>
                <label htmlFor='Produto' className='form-label'>Produto</label>
                        <input 
                            type={'text'}
                            className='form-control'
                            name='name'
                            value={produto}
                            onChange={evento => setProduto(evento.target.value)} 
                        ></input> 
                

<br/>
                <label>Data de Vencimento</label>
<br/>
                <input type="date" min="2024-01-01"  onChange={v => v && setDataVencimento} />
<br/>

                <label>Categoria</label>
<br/>
                <select name="categoria" value={categoria} onChange={texto => setCategoria(texto.target.value)}>
                    <option>ALIMENTO_PERECIVEL</option>
                    <option>ALIMENTO_NAO_PERECIVEL</option>
                    <option>LIMPEZA</option>
                </select>
<br/>
                    <label>Quantidade</label>
<br/>
                <select name="quantidade" value={quantidade} onChange={quantidade => setQuantidade(quantidade.target.value)}>
                    <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option>
                    <option>7</option><option>8</option><option>9</option><option>10</option><option>11</option><option>12</option>
                    <option>13</option><option>14</option><option>15</option><option>16</option><option>17</option><option>18</option>
                    <option>19</option><option>20</option><option>21</option><option>22</option><option>23</option><option>24</option>
                </select>
                <button onClick={submit}  className="btn-secondary">Feito</button>
                <br/>                
                <br/>                
                <button onClick={() => navigate("/")} className="btn-warning">Cancelar</button>
              </form>
                
            </div> 
        </div>
    )
}