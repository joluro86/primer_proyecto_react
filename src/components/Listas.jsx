import React, {useState} from 'react'

const Listas = () => {
    
    const estadoInicial = [
        { id:1, texto:'uno'},
        { id:2, texto:'dos'},
        { id:3, texto:'tres'},
        { id:4, texto:'cuatro'},
        { id:5, texto:'cinco'} 
    ]

    const [lista, setLista] = useState(estadoInicial)

  return (
    
    <div>
        <h2>Lista</h2>
        {
            lista.map( (item, index) => (
                
                <h4 key={item.id}>
                    
                    { item.texto==='dos' ? item.texto='cien': item.texto }
                    
                    </h4>
            ))
        }
    </div>
  
    )
}

export default Listas