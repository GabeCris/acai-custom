import React, { useContext, useEffect } from "react";
import { Context } from "../../contexts/Context";
import OptionStep from "../../components/OptionStep/OptionStep";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import "../StepContainer/step.scss";
import Data from "../../data/DataStep1.js";
import { motion } from "framer-motion";
import LoadPage from "../LoadPage/LoadPage";


const StepSize_1 = () => {
    const { acai, setPriceSize, setPosition, setModal, modal, load, setLoad } =
        useContext(Context);

    useEffect(() => {
        setPosition(1);
    });
    

    const handleClick = (e) => {
        const clicked = e.target.value;
        if (clicked == "p") {
            setPriceSize(6);
        } else if (clicked == "m") {
            setPriceSize(8);
        } else if (clicked == "g") {
            setPriceSize(10);
        }
        acai.acai.size = clicked;
    };

    return (
        <div className="step-content">
            {load && (
                <LoadPage
                    text={"Preparando ingredientes..."}
                    textLoaded={"Ingredientes prontos!"}
                />
            )}
            <motion.div
                className="step-transition"
                initial={{ translateX: -window.innerWidth * 2 }}
                animate={{ translateX: 0 }}
                exit={{ translateX: -window.innerWidth * 2 }}
            >
                <h1 className="title-step">Vamos começar pelo básico!!</h1>
                <div className="text">Qual será o tamanho do açaí?</div>
                <div className="options">
                    {Data.map((option, index) => (
                        <OptionStep
                            key={index}
                            content={option.content}
                            icon={option.icon}
                            text={option.text}
                            handle={handleClick}
                            param={acai.acai.size}
                            price={option.price}
                        />
                    ))}
                </div>
            </motion.div>
            <div className="buttons">
                <div onClick={() => setModal(!modal)}>
                    <Button text="Voltar" secondary={false} />
                </div>
                <Link to="/step/step2">
                    <Button text="Próximo" secondary={true} />
                </Link>
            </div>
        </div>
    );
};

export default StepSize_1;
