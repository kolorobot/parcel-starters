import React, { useEffect, useState } from 'react';

export default function App() {

    const [count, setCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setCount(1);
            setIsLoading(false);
        }, Math.floor(Math.random() * 1000));
    }, []);

    return (
        <button data-testid='count-button' disabled={isLoading} onClick={() => setCount(count + 1)}>{count}</button>
    );
}
