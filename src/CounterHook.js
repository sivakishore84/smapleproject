import React, { useState } from 'react';

function CounterHook() {
    const [counter, setCounter] = useState(0)

    function onIncrement() {
    setCounter(prev => prev+1)
    }
    function onDecrement() {
        setCounter(prev =>             
            {if(prev>0) {return prev-1} return 0})

    }
    return (
        <>
            <div><button onClick={onIncrement}>Increment</button>
                <button onClick={onDecrement}>Decrement</button>
            </div>
            <p>Clicked on {counter} times.</p>
        </>
    )
}

export default CounterHook;