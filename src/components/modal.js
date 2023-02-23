import React from "react";
import "../styles/modal.css";
import { GrClose, GrCopy } from 'react-icons/gr';
import { Snackbar, SnackbarContent } from '@mui/material';
import Gift from './gift';

const Modal = ({toggleModal, getGift}) => {
    
    const [isOpen, setIsOpen] = React.useState(false);
    const safePath = require.context("../assets/", true);

    const gifts = [
        { name: 'Almohadas', path: './ALMOHADAS.webp' },
        { name: 'Batidora', path: './BATIDORA.webp' },
        { name: 'Cubiertos', path: './CUBIERTOS.png' },
        { name: 'Cubrecama', path: './CUBRECAMA.jpg' },
        { name: 'Cucharones', path: './CUCHARONES.jpg' },
        { name: 'Heladera', path: './HELADERA.jpg' },
        { name: 'Lavarropas', path: './LAVARROPAS.jpg' },
        { name: 'Licuadora', path: './LICUADORA.jpeg' },
        { name: 'Mesa y sillas', path: './MESA Y SILLAS.jpeg' },
        { name: 'Mesa ratona', path: './mesaratona.jpg' },
        { name: 'Mesitas de luz', path: './MESITAS DE LUZ.webp' },
        { name: 'Minipimer', path: './MINIPIMER.jpeg' },
        { name: 'Ollas', path: './OLLAS.webp' },
        { name: 'Plancha', path: './PLANCHA.webp' },
        { name: 'Sabanas', path: './SABANAS.jpg' },
        { name: 'Sillón', path: './SILLON.jpg' },
        { name: 'Sommier', path: './SOMMIER.jpeg' },
        { name: 'Toallones', path: './TOALLONES.jpeg' },
        { name: 'Vajilla', path: './VAJILLA.webp' },
    ];

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
                <h3>...O selecciona de nuestra lista de regalos</h3>
                <div className="modal-gifts">
                    {gifts.map(gift => (
                        <Gift
                            name={gift.name}
                            path={safePath(gift.path)}
                            key={gift.name}
                            customClickEvent={getGift}
                        />
                    ))}
                </div>
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