import React from 'react'

const saludo = 'Hola desde constante'
const image= 'data:image/jpeg;base64,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'

const Variables = () => {
  return (
    <div>
        <h2>Nuevo componente {saludo}</h2>
        <img src={image} alt="" />
    </div>
  )
}

export default Variables