
import React, { useState } from 'react'

export default function Bunnie() {
    const [counter, setCounter] = useState(0)
    const clickHandler = () => {
        setCounter(counter + 1)
    }
  return (
    <section className='bunnie-game' >
        <section className='celphone-screen' >
            <h3>{counter}</h3>
            <div className='layer-1' onClick={clickHandler}>bunny1</div>
            <div className='layer-2' onClick={clickHandler}>bunny2</div>
            <div className='layer-3'>wall1</div>
            <div onClick={clickHandler} >bunny</div>
        </section>
    </section>
  )
}
