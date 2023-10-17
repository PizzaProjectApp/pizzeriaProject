import React from 'react';

const BackToMenuButton = ({ handleBackToMenu }) => {
    return (
        <button onClick={handleBackToMenu}>
        Volver al Menú
        </button>
    );
    };

export {BackToMenuButton};
