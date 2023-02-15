import React from "react";
import "../styles/modal.css";
import { GrClose, GrCopy } from 'react-icons/gr';
import { Snackbar, SnackbarContent } from '@mui/material';

const Modal = ({toggleModal}) => {
    
    const [isOpen, setIsOpen] = React.useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText('0720043488000001261822').then(() => {
            openSnackbar();
        });
    }

    const openSnackbar = () => {
        setIsOpen(true);
    }

    const handleClose = () => {
        setIsOpen(false);
    }

    // -licuadora
    // -juego de mesas y sillas
    // -mesitas de luz
    // -juego de sábanas y acolchados
    // -toallones
    // -cubiertos
    // -juego de platos
    // -batidora/mixer
    // -plancha 
    // -exprimidor
    // -almohadas
    // -tazas
    // -sartén
    // -espejo
    // -cucharon y piezas de acero
    // -mesa ratona
    // -lavarropas
    // -set de baño
    // -utensillos de cocina

    return (
        <>
        <main className="modal-background">
            <div className="modal">
                <GrClose className="close" onClick={toggleModal} />
                <h3>Datos bancarios:</h3>
                <p>Titular: Leonardo Popolo</p>
                <p>CBU: 0720043488000001261822</p>
                <p>Alias: NOCHE.DULCE.CESTA</p>
                <p>Nro de cuenta: 043-012618/2</p>
                <p>DNI: 40896935</p>
                <button className="primary-button btn-copy" onClick={copyToClipboard}> <GrCopy className="copy-icon" /> Copiar datos</button>
            </div>
        </main>
        <Snackbar
            autoHideDuration={2000}
            open={isOpen}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center'
            }}
        >
            <SnackbarContent 
                style={{
                    backgroundColor:'var(--primary-color)',
                    justifyContent: 'center',
                    marginBottom: '10px'
                }}
                message='¡CBU copiado!'
            />
        </Snackbar>
        </>
    );
}

export default Modal;