import './card.css'

interface CardProps{
    produto:string,
    quantidade:number,
    dataComprada:number,
    dataVencimento:number,
    categoria:string
}

export function Card({ produto, quantidade, dataComprada, dataVencimento, categoria} : CardProps) {
  return (
    <div className="card">
         <h3>{produto}</h3>
        <h3>{quantidade}</h3>
        <h3>{dataComprada}/{dataVencimento}</h3>
        <h3>{categoria}</h3>
    </div>
  )
}
