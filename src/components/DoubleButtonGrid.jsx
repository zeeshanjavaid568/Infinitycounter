import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const DoubleButtonGrid = () => {
    const [counter1, setCounter1] = useState(1);
    const [counter2, setCounter2] = useState(2);
    const [counter3, setCounter3] = useState(3);
    const [counter4, setCounter4] = useState(4);
    const [counter5, setCounter5] = useState(5);
    const [counter6, setCounter6] = useState(6);
    const [intervalId, setIntervalId] = useState(null);
    const [isRunning, setIsRunning] = useState(false); // Track if counter is running

    const handleCounters = () => {
        setCounter1((prev) => prev + 1);
        setCounter2((prev) => prev + 1);
        setCounter3((prev) => prev + 1);
        setCounter4((prev) => prev + 1);
        setCounter5((prev) => prev + 1);
        setCounter6((prev) => prev + 1);
    };

    useEffect(() => {
        // Start counter on initial load
        const id = setInterval(handleCounters, 1000);
        setIntervalId(id);
        setIsRunning(true);

        return () => clearInterval(id);
    }, []);

    const startCounter = () => {
        if (!isRunning) {  // Only start if not already running
            const id = setInterval(handleCounters, 1000);
            setIntervalId(id);
            setIsRunning(true); // Update running state
        }
    };

    const stopCounter = () => {
        clearInterval(intervalId);
        setIsRunning(false); // Update running state
        console.log('Interval cleared');
    };

    const resetCounters = () => {
        setCounter1(1);
        setCounter2(2);
        setCounter3(3);
        setCounter4(4);
        setCounter5(5);
        setCounter6(6);
        stopCounter(); 
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '300%',
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: '-15%',
            }}
        >
            <Link to={'/'} style={{ textDecoration: 'none', marginBottom: '30px' }}>
                Single Button Counter App
            </Link>
            Counter App
            <div
                style={{
                    fontSize: '120%',
                    position: 'relative',
                    top: '10vh',
                    width: '300px',
                }}
            >
                <div className='row'>
                    <div className='col-4'>{counter1}</div>
                    <div className='col-4'>{counter2}</div>
                    <div className='col-4'>{counter3}</div>
                </div>
                <div className='row'>
                    <div className='col-4'>{counter4}</div>
                    <div className='col-4'>{counter5}</div>
                    <div className='col-4'>{counter6}</div>
                </div>
            </div>
            <div className="buttons">
                <button
                    style={{
                        fontSize: '60%',
                        position: 'relative',
                        top: '20vh',
                        marginRight: '5px',
                        backgroundColor: 'green',
                        borderRadius: '8%',
                        padding: '5px 30px',
                        color: 'white',
                        border: 'none'
                    }}
                    onClick={startCounter}
                    disabled={isRunning} // Disable button if counter is running
                >
                    Start
                </button>
                <button
                    style={{
                        fontSize: '60%',
                        position: 'relative',
                        top: '20vh',
                        marginRight: '5px',
                        backgroundColor: '#ffd32c',
                        borderRadius: '8%',
                        padding: '5px 30px',
                        color: 'white',
                        border: 'none'
                    }}
                    onClick={stopCounter}
                >
                    Stop
                </button>
                <button
                    style={{
                        fontSize: '60%',
                        position: 'relative',
                        top: '20vh',
                        marginLeft: '5px',
                        backgroundColor: 'red',
                        borderRadius: '8%',
                        padding: '5px 30px',
                        color: 'white',
                        border: 'none'
                    }}
                    onClick={resetCounters}
                >
                    Reset
                </button>
            </div>
        </div>
    );
};

export default DoubleButtonGrid;
