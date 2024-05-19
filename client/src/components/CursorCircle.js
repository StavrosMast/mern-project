// src/components/CursorCircle.js
import React, { useState, useEffect } from 'react';
import './CursorCircle.css'; // Ensure the path is correct

const CursorCircle = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updatePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', updatePosition);

        return () => {
            window.removeEventListener('mousemove', updatePosition);
        };
    }, []);

    return (
        <div
            className="cursor-circle"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
            }}
        />
    );
};

export default CursorCircle;
