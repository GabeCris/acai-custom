import React, { useContext, useEffect } from "react";
import { Context } from "../../contexts/Context";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import "../StepContainer/step.scss";
import { motion } from "framer-motion";
import LoadPage from "../LoadPage/LoadPage";


const StepFinish_8 = () => {
    const { setPosition, load, setLoad } = useContext(Context);

    useEffect(() => {
        setPosition(8);
    });

    useEffect(() => {
        setLoad(true);
    }, []);

    return (
        <div className="step-content">
            {load && (
                <LoadPage
                    text={"Montando seu açaí..."}
                    textLoaded={"Açaí Montado!"}
                />
            )}
            <motion.div
                className="step-transition"
                initial={{ translateX: -window.innerWidth * 2 }}
                animate={{ translateX: 0 }}
                exit={{ translateX: -window.innerWidth * 2 }}
            >
                <h1 className="title-step">Você terminou seu açaí!</h1>
                <div className="text">
                    E ele já foi adicionado ao seu carrinho, então não perca
                    tempo e corra para finalizar o seu pedido :D
                </div>
            </motion.div>
            <div className="buttons">
                <Link to="/">
                    <Button text="Menu" />
                </Link>
                <Link to="/page/cart">
                    <Button text="Carrinho" secondary={true} />
                </Link>
            </div>
        </div>
    );
};

export default StepFinish_8;
