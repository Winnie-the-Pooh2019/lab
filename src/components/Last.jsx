import React, { useState, useEffect } from 'react';

export default function Last() {
    const [hello, setHello] = useState('Hello');

    useEffect(() => {
        document.getElementById('helloHeader').textContent = hello;
    });
    return (
        <div className="container">
            <h2 id='helloHeader'>Hello</h2>
            <input id="username" type="text" placeholder="What's your name?" />
            <button className='submit' onClick={() =>
                setHello(`Hello, ${document.getElementById('username').value}`)}>Submit</button>
        </div>
    );
}