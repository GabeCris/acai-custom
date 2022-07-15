import React, { useEffect } from "react";
import { useState } from "react";
import Data from "../../data/DataExample";
import DataGourmet from "../../data/DataMenuGourmet";
import DataTraditional from "../../data/DataMenuTraditional";
import { useContext } from "react";
import { Context } from "../../contexts/Context";

const Card = ({ title, text, price, url, amount, id }) => {
    const { cart, handleAddItemCart, removeItemCart} = useContext(Context);

    const data = [...DataGourmet, ...DataTraditional];
       
    // console.log("MEUS DADOS SÃO")
    // console.log(data)
    return (
        <div className="card">
            <div className="card_image">
                <img src={`.${url}`} alt="" />
            </div>
            <div className="card_content">
                <h1 className="card_title">{title}</h1>
                <p className="card_text">Tamanho {text}</p>
                <h2 className="card_price">${price * amount}</h2>
            </div>
            <div className="card_input">
                <span
                
                    onClick={() => {
                        data.filter((data) => data.acai.id == id).map((data) =>
                        removeItemCart(data)
                    );
                    }}
                >
                    -
                </span>
                <p>{amount}</p>
                <span
                    onClick={() => {
                        data.filter((data) => data.acai.id == id).map((data) =>
                        handleAddItemCart(data));
                    }}
                >
                    +
                </span>
            </div>
        </div>
    );
};

export default Card;
