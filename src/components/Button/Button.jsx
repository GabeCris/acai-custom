import React from "react";
import { useState } from "react";
import { Context } from "../../contexts/Context";
import { useContext } from "react";

const Button = ({ text, secondary }) => {
    const [click, setClick] = useState(false);
    const { setRender} = useContext(Context);
    // const [style, setStyle] = useState(' ')

    const handleClick = () =>{
        setRender(true);
        setTimeout(() => setRender(false), 200);
        setClick(true);
        setTimeout(()=> setClick(false), 200)
    }
    return (
        <div
            className={`button ${click ? 'button-clicked' : ''}`}
            onClick={handleClick}
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
