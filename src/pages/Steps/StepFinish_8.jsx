import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../contexts/Context";
import OptionStep from "../../components/OptionStep/OptionStep";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import "../StepContainer/step.scss";
import { motion } from "framer-motion";

const StepFinish_8 = () => {
    const {
        acai,
        setAcai,
        setRender,
        setPosition,
        position,
        setPrice,
        price,
        setNameClient,
        nameClient,
        resetAcai,
    } = useContext(Context);

    useEffect(() => {
        setPosition(8);
        console.log("PAGE 2 MEU POSITION É " + position);
        console.log("CONTEUDO: " + acai.fruit);
    });

    return (
        <div className="step-content">
            <motion.div
                className="step-transition"
                initial={{ translateX: -window.innerWidth * 2 }}
                animate={{ translateX: 0 }}
                exit={{ translateX: -window.innerWidth * 2 }}
            >
                <h1 className="title-step">Você terminou seu açaí!</h1>
                <div className="text">
                    Ele foi adicionado aos seus favoritos e ao seu carrinho,
                    então não perca tempo e vá finalizar seu pedido :D
                </div>
            </motion.div>
            <div className="buttons">
                <Link to="/">
                    <Button text="Sair" />
                </Link>
                <Link to="/page/cart">
                    <Button text="Carrinho" />
                </Link>
            </div>
        </div>
    );
};

export default StepFinish_8;
