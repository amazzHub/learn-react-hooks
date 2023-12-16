import { useState, useRef } from 'react';
import './styles.css'

export const FirstUseRefExample: React.FC = () => {

    const [count, setCount] = useState(0);
    const countRef = useRef(0);

    const handleIncrement = () => {
        setCount(count + 1);
        countRef.current++;

        console.log("State:", count);
        console.log("Ref:", countRef.current);
    };

    return <div className="countContainer">
        <p>Count: {count}</p>
        <button onClick={handleIncrement}>Increment</button>
    </div>;
};
