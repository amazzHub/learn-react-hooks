import { useState } from 'react';

export const UseStateExample: React.FC = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        console.log('Incrementing from', count, 'to', count + 1);
        setCount(count + 1);
    };

    const decrement = () => {
        console.log('Decrementing from', count, 'to', count - 1);
        setCount(count - 1);
    };

    return <div>
        <h2>useState Example</h2>
        <p>Current Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>;
}

