import './card.css'

interface CardProps{
    produto:string,
    quantidade:string,
    dataComprada:Date,
    dataVencimento:Date,
    categoria:string
}

export function Card({ produto, quantidade, dataComprada, dataVencimento, categoria} : CardProps) {
  const dataCompraFormatar = new Date(dataComprada);
  const dataFormatadaCompra = dataCompraFormatar.toLocaleDateString('pt-BR', {
   timeZone: 'UTC',
  });
  
  const dataVencimentoFormatar = new Date(dataVencimento);
  const dataFormatadaVencimento = dataVencimentoFormatar.toLocaleDateString('pt-BR', {
    timeZone: 'UTC',
  });

  return (
    <div className="card">
         <h3>{produto}</h3>
        <h3>{quantidade}</h3>
        <h3>{dataFormatadaCompra} - {dataFormatadaVencimento}</h3>
        <h3>{categoria}</h3>
    </div>
  )
}
