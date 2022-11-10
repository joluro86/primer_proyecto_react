import React from 'react'

const Contador = () => {

    const [contador, SetContador] = React.useState(0)

    const aumentar = setInterval(() => {
        SetContador(contador + 1)
        if(contador===10){
            SetContador(0)
        } 
        console.log(contador)
    }, 1000)


    return (
        <div>
            <h2>Contador</h2>
            <h3>Nuestro numero aumentando: {contador}</h3>
        </div>
    )
}


export default Contador