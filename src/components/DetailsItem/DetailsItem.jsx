import React from "react";
import "../Details/details.scss";
import { Context } from "../../contexts/Context";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import Card from "../Card/Card";


const DetailsItem = ({ title, item, img, subtitle, image, initial }) => {
    const { idDetails, details } = useContext(Context);

    // const changeDetails = () =>{
    //     DataGourmet.filter((card) => card.id == clicked ? console.log(card.acai) : '')
    // }
    console.log("FRUTA "+image)
    return (
        <div className="details_item-container">
            <p className="details_item-title">{title}</p>
            <div className="details_item-box">
                {initial ? 
                (
                    <img src={`${initial}${image}.svg`} alt="" />
                ):(
                    <p>{image}</p>
                )}
            </div>
            <p className="details_item-content">{subtitle}</p>
        </div>
    );
};

export default DetailsItem;
