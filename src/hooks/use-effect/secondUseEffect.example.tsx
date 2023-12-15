import React, { useState, useEffect } from 'react';

export const SecondUseEffectExample = () => {

    const [count, setCount] = useState(0);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(
        () => {
            console.log('Component did mount/update. Current count:', count);
            return () => {
                console.log('Component will unmount... Cleanup can be done here.');
            };
        },
        [count]
    );

    useEffect(
        () => {
            const handleResize = () => {
                console.log('resizing the window...');
                setWidth(window.innerWidth);
            };

            window.addEventListener('resize', handleResize);
            console.log('This log will only run once!');
            //* Cleanup
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        },
        [] //* Empty dependency array makes this effect run only on mount and unmount
    );

    return (
        <div>
            <h2>useEffect as Lifecycle Methods</h2>
            <p>Window width: {width}px</p>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
        </div>
    );
};
