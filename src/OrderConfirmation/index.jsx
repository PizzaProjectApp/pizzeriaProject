import React from 'react';
import logo from './logo-vector.png';
import icon from './pulgares-para-arriba.png';
import './OrderConfirmation.css';
import { BackToMenuButton } from '../BackToMenuBtn';

function OrderConfirmation({ handleBackToMenu }) { // Ajusta el nombre del prop aquí
    return (
        <section className="order-confirmation-section">
            <div className="order-confirmation-container">
                <div className="pizza-logo-container">
                    <img src={logo} alt="Company Logo" className='pizza'/>
                </div>
                <div className="confirmation-message">
                    <p>Order confirmed!</p>
                    <img src={icon} alt="Thumbs Up" />
                </div>
            </div>
            <BackToMenuButton
                 handleBackToMenu={handleBackToMenu}/> {/* Ajusta el nombre del prop aquí */}
        </section>
    );
}



export {OrderConfirmation};
