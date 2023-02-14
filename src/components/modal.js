import React from "react";
import "../styles/modal.css";

const Modal = () => {
    
    return (
        <main className="modal-background">
            <div className="modal">
                <h3>Datos bancarios:</h3>
                <p>Titular: Leonardo Popolo</p>
                <p>CBU: 0720043488000001261822</p>
                <p>Alias: NOCHE.DULCE.CESTA</p>
                <p>Nro de cuenta: 043-012618/2</p>
                <p>DNI: 40896935</p>
            </div>
        </main>
    );
}

export default Modal;