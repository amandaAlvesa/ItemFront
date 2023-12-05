import './App.css'
import { Card } from './components/card/card'
import { useItemData } from './hooks/useItemData'

function App() {
  const {data} = useItemData();
  return (
    <div className='conteiner'>
      <h1>Itens</h1>

      <div className="card-grip">
        {data?.map(itemData => 
          <Card 
          produto={itemData.produto} 
            categoria={itemData.categoria}
            quantidade={itemData.quantidade} 
            dataComprada={itemData.dataComprada} 
            dataVencimento={itemData.dataVencimento} 
          />)}
      </div>
    </div>
  )
}

export default App
