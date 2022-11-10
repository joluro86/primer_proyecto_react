import React, {Fragment, useState} from 'react'

const Evento = () => {
    
    const [texto, setTexto] = useState('texto desde estado')

    const eventoClick = () => {
        console.log('diste click')
        setTexto('cambiando el texto')
    }

    return (
    <Fragment>
        <hr />
        <h2>{ texto }</h2>
        <button onClick={ () => eventoClick() }>Click</button>
    </Fragment>
  )

}

export default Evento