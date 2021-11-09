import * as React from 'react';
import { useEffect, useState } from 'react';

type AppProps = {
    onCounterUpdate?(value: number): void;
}

const App: React.FC<AppProps> = ({ onCounterUpdate }) => {

    const [count, setCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setCount(1);
            setIsLoading(false);
        }, Math.floor(Math.random() * 1000));
    }, []);

    const handleClick = () => {
        setCount(count + 1);
        if (onCounterUpdate) {
            onCounterUpdate(count);
        }
    };

    return (
        <button data-testid='count-button' disabled={isLoading} onClick={handleClick}>{count}</button>
    );
};

export default App;
