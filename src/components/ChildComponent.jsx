import React from 'react'

const ChildComponent = ({ message, onRespond }) => {

    const handleClick = () => {
        onRespond("¡Hola respuesta del hijo!");
    }

    return (
        <div className='child'>
            <h1>ChildComponent</h1>
            <p>Hola soy el hijo!</p>
            <p>{message}</p>
            <button onClick={handleClick}>Enviar respuesta al Padre</button>
        </div>
    )
}

export default ChildComponent

