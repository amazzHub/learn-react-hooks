import { useState, useEffect } from 'react';

export const FirstUseEffectExample: React.FC = () => {

    const [count, setCount] = useState(0);

    useEffect(
        () => {
            //* Log message when the component mounts or count changes - it will trigger one time in any case
            console.log('Component mounted/updated. Current count:', count);
            //* Cleanup function - runs before the component unmounts and before the effect re-runs.
            return () => {
                console.log('Component will unmount... Cleanup can be done here.');
            };
        },
        //* The dependency array dictates when the effect should run, it runs when 'count' changes in this case.
        [count]
    );

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <h2>useEffect as Lifecycle Methods</h2>
            <p>Current Count: {count}</p>
            <button style={{ marginRight: 10 }} onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};
