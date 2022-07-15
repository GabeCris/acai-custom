import React from "react";
import "./card_acai.scss";
import Button from "../Button/Button";
import { Context } from "../../contexts/Context";
import { useState, useContext } from "react";
import DataGourmet from "../../data/DataMenuGourmet";
import DataTraditional from "../../data/DataMenuTraditional";

const CardShopAcai = ({ title, size, price, url, id, handleClick }) => {
    const {
        detailsModal,
        setDetailsModal,
        handleAddItemCart,
        idDetails,
        handleSize,
    } = useContext(Context);
    // console.log("MEU ID É "+id)

    const sizes = [
        {
            title: "p",
        },
        {
            title: "m",
        },
        {
            title: "g",
        },
    ];

    const [sizeChanged, setSizeChanged] = useState(size);
    const handleRadioClick = (e) => {
        setSizeChanged(e.target.value);
        console.log(e.target.value);
    };

    return (
        <div className="card-shop">
            <p className="price">${price}</p>

            <img className="card-shop_image" src={url} />
            <Button text="Adicionar" secondary={true} handle={true} id={id} size={sizeChanged}/>
            <img
                className="card-shop_icon-detail"
                src="./assets/page/icon-detail.svg"
                alt=""
                id={id}
                onClick={handleClick}
            />
            <p className="text">{title}</p>
            <div className="card-shop_label-container">
                {sizes.map((sizeArray) => (
                    <label
                        className={`label-size ${
                            sizeArray.title == sizeChanged
                                ? "label-checked"
                                : " "
                        }`}
                    >
                        <input
                            type="radio"
                            name="sizes"
                            value={sizeArray.title}
                            onClick={handleRadioClick}
                        />
                        {sizeArray.title}
                    </label>
                ))}
            </div>
        </div>
    );
};

export default CardShopAcai;
