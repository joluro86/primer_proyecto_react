import React from 'react'
import { useStopwatch } from 'react-timer-hook';

const Contador = () => {

    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        reset,
    } = useStopwatch({ autoStart: false });

    const [contador, SetContador] = React.useState(0)

    const aumentar = () => {
        SetContador(contador + 1)
        if (contador === 10) {
            SetContador(0)
        }
    }

    return (
        <div>
            <h2>Contador</h2>
            <h3>Nuestro numero aumentando: {contador}</h3>
            <button onClick={() => aumentar()}>Aumentar</button>

            <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
            <p>{isRunning ? 'Running' : 'Not running'}</p>
            <button onClick={start}>Start</button>
            <button onClick={pause}>Pause</button>
            <button onClick={reset}>Reset</button>

        </div>
    )
}


export default Contador