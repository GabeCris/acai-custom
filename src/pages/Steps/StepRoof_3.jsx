import React, { useContext, useEffect } from "react";
import { Context } from "../../contexts/Context";
import OptionStep from "../../components/OptionStep/OptionStep";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import "../StepContainer/step.scss";
import Data from "../../data/DataStep3.js";
import { motion } from "framer-motion";

const StepRoof_3 = () => {
    const { acai, setRender, setPosition, setPrice, price, flag, setFlag } =
        useContext(Context);

    useEffect(() => {
        setPosition(3);
    });

    const handleClick = (e) => {
        const clicked = e.target.value;
        if (clicked != " ") {
            if (flag.roof) {
                setFlag({ ...flag, roof: false });
                setPrice(price + 2);
            }
        } else {
            if (!flag.roof) {
                setFlag({ ...flag, roof: true });
                setPrice(price - 2);
            }
        }

        setRender(true);
        setTimeout(() => setRender(false), 200);
        acai.acai.roof = clicked;
    };

    return (
        <div className="step-content">
            <motion.div
                className="step-transition"
                initial={{ translateX: -window.innerWidth * 2 }}
                animate={{ translateX: 0 }}
                exit={{ translateX: -window.innerWidth * 2 }}
            >
                <h1 className="title-step">E de uma coberturinha?</h1>
                <div className="text">Escolha o sabor da cobertura:</div>

                <div className="options">
                    {Data.map((option, index) => (
                        <OptionStep
                            content={option.content}
                            icon={option.icon}
                            text={option.text}
                            handle={handleClick}
                            param={acai.acai.roof}
                            desc={option.desc}
                            urlIcon={option.url}
                        />
                    ))}
                </div>
            </motion.div>
            <div className="buttons">
                <Link to="/step/step2">
                    <Button text="Voltar" />
                </Link>
                <Link to="/step/step4">
                    <Button text="Próximo" secondary={true} />
                </Link>
            </div>
        </div>
    );
};

export default StepRoof_3;
