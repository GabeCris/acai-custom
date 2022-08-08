import React, { useContext, useEffect } from "react";
import { Context } from "../../contexts/Context";
import OptionStep from "../../components/OptionStep/OptionStep";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import "../StepContainer/step.scss";
import Data from "../../data/DataStep4.js";
import { motion } from "framer-motion";

const StepAditional1_3 = () => {
    const { acai, setRender, setPosition, setPrice, price, flag, setFlag } =
        useContext(Context);

    useEffect(() => {
        setPosition(4);
    });

    const handleClick = (e) => {
        const clicked = e.target.value;

        if (clicked != " ") {
            if (flag.aditional1) {
                setFlag({ ...flag, aditional1: false });
                setPrice(price + 2);
            }
        } else {
            if (!flag.aditional1) {
                setFlag({ ...flag, aditional1: true });
                setPrice(price - 2);
            }
        }

        setRender(true);
        setTimeout(() => setRender(false), 200);
        acai.acai.aditional1 = clicked;
    };

    return (
        <div className="step-content">
            <motion.div
                className="step-transition"
                initial={{ translateX: -window.innerWidth * 2 }}
                animate={{ translateX: 0 }}
                exit={{ translateX: -window.innerWidth * 2 }}
            >
                <h1 className="title-step">Eai, vai algum adicional?</h1>
                <div className="text">Qual ingrediente adicional?</div>

                <div className="options">
                    {Data.map((option) => (
                        <OptionStep
                            content={option.content}
                            icon={option.icon}
                            text={option.text}
                            handle={handleClick}
                            param={acai.acai.aditional1}
                            desc={option.desc}
                            urlIcon={option.url}
                        />
                    ))}
                </div>
            </motion.div>
            <div className="buttons">
                <Link to="/step/step3">
                    <Button text="Voltar" />
                </Link>
                <Link to="/step/step5">
                    <Button text="Próximo" secondary={true} />
                </Link>
            </div>
        </div>
    );
};

export default StepAditional1_3;
