import React, {useEffect, useState} from "react";

export default function Clock() {
    const [time, setTime] = useState('Time');

    useEffect(() => {
        document.getElementById("timer").textContent = time;
    });
    return (
        <div className="container">
            <h2 id='timer'>Time</h2>
            <button onClick={() => {
                setInterval(() => {
                    setTime(new Date().toLocaleTimeString())
                }, 1000);
            }}>Get Time</button>
        </div>
    );
}