import React from "react";
import { useState } from "react";
import { Context } from "../../contexts/Context";
import { useContext } from "react";
import DataGourmet from "../../data/DataMenuGourmet";
import DataTraditional from "../../data/DataMenuTraditional";

const Button = ({ text, secondary, handle, id, size }) => {
    const [click, setClick] = useState(false);
    const { setRender, setRenderCart, handleAddItemCart} = useContext(Context);
    // const [style, setStyle] = useState(' ')

    const handleClick = (e) =>{
        setRender(true);
        setRenderCart(true);
        setTimeout(() => setRender(false), 200);
        setTimeout(() => setRenderCart(false), 200);
        setClick(true);
        setTimeout(()=> setClick(false), 200)
        const data = [...DataGourmet, ...DataTraditional];
        data.filter((data) => data.acai.id == e.target.id).map((data) =>
            handleAddItemCart(data, size)
        );
    }

    return (
        <div
        id={id}
            className={`button ${click ? 'button-clicked' : ''}`}
            onClick={(e) => handle == true ? handleClick(e) : ''}
        >

            {text}
            {secondary == true ? (
                <img src="./assets/page/button-detail-secondary.svg" alt="" />
                )
                :
                (
                    <img src="./assets/page/button-detail.svg" alt="" />
        )}
        </div>
    );
};

export default Button;
