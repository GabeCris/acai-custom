import React from "react";
import { useState } from "react";

const Card = () => {
    const [amount, setAmount] = useState(1);
    return (
        <div className="card">
            <div className="card_image">
                <img src="../assets/page/acai-model.svg" alt="" />
            </div>
            <div className="card_content">
                <h1 className="card_title">Banana e Confete</h1>
                <p className="card_text">Tamanho P</p>
                <h2 className="card_price">$20</h2>
            </div>
            <div className="card_input">
                <span onClick={() => amount >= 1 ? setAmount(amount-1) : null}>-</span>
                <p>{amount}</p>
                <span onClick={() => setAmount(amount+1)}>+</span>
            </div>
        </div>
    );
};

export default Card;
