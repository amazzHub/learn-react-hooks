import React, { useRef } from 'react';

export const SecondUseRefExample: React.FC = () => {

    const inputRef = useRef<HTMLInputElement>(null);

    const focusOnInput = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return <div>
        <h2>Focus Input using useRef</h2>
        <input ref={inputRef} type="text" placeholder="Click button to focus" />
        <button onClick={focusOnInput}>Focus on Input</button>
    </div>;
};
