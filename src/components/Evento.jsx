import React from 'react'

const Evento = () => {

    const eventoClick = (e, a) => {
        const mult = e*a
        alert('la mult ' + mult)
    }

    return (
    <div>
        <hr />
        <h2>Eventos</h2>
        <button onClick={ () => eventoClick(2,4) }>Click</button>
    </div>
  )

}

export default Evento