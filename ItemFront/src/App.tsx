import { useState } from 'react';
import './App.css'
import { Card } from './components/card/card'
import { useItemData } from './hooks/useItemData'
import { CreateModal } from './create-modal/create-modal';


function App() {
  const {data} = useItemData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }
  return (
    <div className="container">
      <h1>Itens</h1>

      <div className="card-grid">
        {data?.map(itemData => 
          <Card 
            produto={itemData.produto} 
            categoria={itemData.categoria}
            quantidade={itemData.quantidade} 
            dataComprada={itemData.dataComprada} 
            dataVencimento={itemData.dataVencimento} 
          />)}
      </div>
      {isModalOpen && <CreateModal closeModal={handleOpenModal} />}
      <button onClick={handleOpenModal} >Adicionar Novo Item</button>
    </div>
  )
}

export default App
