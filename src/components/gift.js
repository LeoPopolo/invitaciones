import React from "react";
import '../styles/gift.css';

const Gift = ({path, name, customClickEvent}) => {

    const sendGift = () => {
        customClickEvent({name,path});
    }

    return (
        <>
            <main className="gift" onClick={sendGift}>
                <div className="gift-image">
                    <img src={path} alt={name}/>
                </div>
                <p className="gift-name">{name}</p>
            </main>
        </>
    );
}

export default Gift;