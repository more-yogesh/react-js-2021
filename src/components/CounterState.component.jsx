import { useState } from 'react';

const CounterState = () => {
    const [counter, setCounter] = useState(0);

    const incrementHandler = () => {
        setCounter(counter + 1);
    }
    const decrementHandler = () => {
        setCounter(counter - 1);
    }

    return (
        <div>
            <h1>Counter Is {counter}</h1>
            <h1>Counter Is {counter}</h1>
            <button onClick={incrementHandler}>+</button>
            <button onClick={decrementHandler}>-</button>
        </div>
    );

}

export default CounterState;