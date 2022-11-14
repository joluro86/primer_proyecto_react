import React, { useState } from 'react'

const Listas = () => {

    const estadoInicial = [
        { id: 1, texto: 'uno' },
        { id: 2, texto: 'dos' },
        { id: 3, texto: 'tres' },
        { id: 4, texto: 'cuatro' },
        { id: 5, texto: 'cinco' }
    ]

    const [lista, setLista] = useState(estadoInicial)

    // ASI UNIMOS ARRAYS

    const arrayUno = ['Chile', 'Argentina']
    const arrayDos = ['Perú', 'Mexico']

    const Unidos = [...arrayUno, ...arrayDos]

    // AGREGAR ELEMENTO AL ARRAY
    const agregarElemento = () => {
        console.log('click')
        setLista([
            ...lista, { id: 6, texto: 'seis' }
        ])
    }

    return (
        <div>
            <h2>Lista</h2>
            {
                lista.map((item, index) => (

                    <h4 key={item.id}>
                        {item.texto === 'dos' ? item.texto = 'cien' : item.texto}
                    </h4>
                ))
            }
            <button onClick={() => agregarElemento()} >Agregar</button>
        </div>
    )
}

export default Listas