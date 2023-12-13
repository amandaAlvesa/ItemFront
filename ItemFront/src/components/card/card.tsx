import './card.css'


interface CardPropsEditar{
    produto:string,
    quantidade:string,
    dataComprada:Date,
    dataVencimento:Date,
    categoria:string
}

interface CardProps{
    produto:string,
    quantidade:string,
    dataVencimento:Date
    imagem:string
}

export function Card({ produto, quantidade, dataVencimento, imagem} : CardProps){
  const dataVencimentoFormatar = new Date(dataVencimento);
  const dataFormatadaVencimento = dataVencimentoFormatar.toLocaleDateString('pt-BR', {
    timeZone: 'UTC',
  });

  return(
      <div className="card" style={{ backgroundImage: `url(${imagem})` }}> 
        <h3>{produto}</h3>
        <h3>Quantidade: {quantidade}</h3>
        <h3>Vencimento: {dataFormatadaVencimento}</h3>
      </div>    
  )
}

export function CardEditar({ produto, quantidade, dataComprada, dataVencimento, categoria} : CardPropsEditar) {
  const dataCompraFormatar = new Date(dataComprada);
  const dataFormatadaCompra = dataCompraFormatar.toLocaleDateString('pt-BR', {
   timeZone: 'UTC',
  });
  
  const dataVencimentoFormatar = new Date(dataVencimento);
  const dataFormatadaVencimento = dataVencimentoFormatar.toLocaleDateString('pt-BR', {
    timeZone: 'UTC',
  });

  return (
    
    <div className="card_editar">
         <h3>{produto}</h3>
        <h3>{quantidade}</h3>
        <h3>{dataFormatadaCompra} - {dataFormatadaVencimento}</h3>
        <h3>{categoria}</h3>
    </div>
  )
}
