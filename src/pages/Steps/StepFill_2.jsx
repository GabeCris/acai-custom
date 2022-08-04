import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../contexts/Context";
import OptionStep from "../../components/OptionStep/OptionStep";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import "../StepContainer/step.scss";
import Data from "../../data/DataStep2.js";
import { motion } from "framer-motion";

const StepFill_2 = () => {
    const { acai, setAcai, setRender, setPosition, position, setFlag, flag, price, setPrice } =
        useContext(Context);

    useEffect(() => {
        setPosition(2);
        console.log("PAGE 2 MEU POSITION É " + position);
    });

    const handleClick = (e) => {
        const clicked = e.target.value;

        if (clicked == 1 || clicked == 2) {
            if (flag.fill) {
                setFlag({...flag, fill: false})
                setPrice(price + 1);
            }
        } else {
            if (!flag.fill) {
                setFlag({...flag, fill: true})
                setPrice(price - 1);
            }
        }
        setRender(true);
        setTimeout(() => setRender(false), 200);
        acai.acai.fill = clicked;
    };

    return (
        <div className="step-content">
            <motion.div
                className="step-transition"
                initial={{ translateX: -window.innerWidth * 2 }}
                animate={{ translateX: 0 }}
                exit={{ translateX: -window.innerWidth * 2 }}
            >
                <h1 className="title-step">Você gosta de recheios?</h1>
                <div className="text">Quantas camadas de recheio?</div>

                <div className="options">
                    {Data.map((option, index) => 
                        (
                        <OptionStep
                            content={option.content}
                            icon={option.icon}
                            text={option.text}
                            handle={handleClick}
                            param={acai.acai.fill}
                            desc={option.desc}
                        />
                    ))}
                </div>
            </motion.div>
            <div className="buttons">
                <Link to="/step/step1">
                    <Button text="Voltar" />
                </Link>
                <Link to="/step/step3">
                    <Button text="Próximo" secondary={true}/>
                </Link>
            </div>
        </div>
    );
};

export default StepFill_2;
