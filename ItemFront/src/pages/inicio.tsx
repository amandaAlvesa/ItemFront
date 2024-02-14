import { CreateModal } from "../create-modal/create-modal";
import { useState } from 'react';
import '../App.css'
import { useItemData } from '../hooks/useItemData'
import { Card } from "../components/card/card";
import { Link} from 'react-router-dom';


export function Inicio() {
    const {data} = useItemData();
    
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handleOpenModal = () => {
      setIsModalOpen(prev => !prev)
    }

    
  
    return (
     
       <div className="container">
        <h1>Itens</h1>
        <div className="card-grid"> 
          {data?.map(itemData  =>  
          
          <div className='card-unico'>
            <Link to={`/editar/${itemData.id}`} >
              <Card 
                imagem={itemData.imagem}
                produto={itemData.produto} 
                quantidade={itemData.quantidade} 
                dataVencimento={itemData.dataVencimento} 
                key={itemData.id}/>  
            </Link>
          </div>
          )}
        </div> 
        
        {isModalOpen && <CreateModal closeModal={handleOpenModal} />}
        <button onClick={handleOpenModal} >Adicionar Novo Item</button>
      </div>
    )
  }