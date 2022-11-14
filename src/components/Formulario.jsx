import React from 'react'

const Formulario = () => {

    const [fruta, setFruta] = React.useState('')
    const [descripcion, setDescripcion] = React.useState('')
    const estadoInicial = []
    const [lista, setLista] = React.useState(estadoInicial)

    // AGREGAR ELEMENTO AL ARRAY
    const agregarElemento = (fruta, descripcion) => {
        setLista([
            ...lista, { fruta: fruta, descripcion: descripcion }
        ])
    }

    const guardarDatos = (e) => {
        e.preventDefault()

        if (!fruta.trim()) {
            console.log('esta vacio fruta')
            return
        }
        if (!descripcion.trim()) {
            console.log('esta vacio descripcion')
            return
        }

        console.group('Procesando datos...' + fruta + ' - ' + descripcion)

        agregarElemento(fruta, descripcion)

        e.target.reset()
        setFruta('')
        setDescripcion('')
    }
    return (
        <div>
            <h2 className='text-danger text-center'>Formulario</h2>
            <form onSubmit={guardarDatos}>
                <div className='mb-3'>
                    <input
                        type="text"
                        placeholder='Ingrese fruta'
                        className='form-control mb-4'
                        onChange={(e) => setFruta(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder='Ingrese descripción'
                        className='form-control mb-4'
                        onChange={(e) => setDescripcion(e.target.value)}
                    />
                </div>
                <div className='mb-3'>
                    <button type='submit' className='btn btn-primary btn-block'>Agregar</button>
                </div>
            </form>

            <h2>Lista</h2>
            {
                lista.map((item, index) => (

                    <li key={index}>
                        {item.fruta + ' - ' + item.descripcion}
                    </li>
                ))
            }

        </div>
    )
}

export default Formulario