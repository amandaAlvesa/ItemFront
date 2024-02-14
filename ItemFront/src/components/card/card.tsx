import './card.css'

import 'react-datepicker/dist/react-datepicker.css'

///////////////////////////////////
interface CardProps{
    produto:string,
    quantidade:string,
    dataVencimento:Date
    imagem:string
} 


export function Card({ produto, quantidade, dataVencimento, imagem, } : CardProps){
  const dataVencimentoFormatar = new Date(dataVencimento);
  const dataFormatadaVencimento = dataVencimentoFormatar.toLocaleDateString('pt-BR', {
  });

  return(
  
      <div className="card"  style={{ backgroundImage: `url(${imagem})` }} > 
        <h3>{produto}</h3>
        <h3>Quantidade: {quantidade}</h3>
        <h3>Vencimento: {dataFormatadaVencimento}</h3>
      </div>    
  )
}
/////////////////////////////EDIT
