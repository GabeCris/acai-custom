import React, { useContext, useEffect } from "react";
import { Context } from "../../contexts/Context";
import OptionStep from "../../components/OptionStep/OptionStep";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import "../StepContainer/step.scss";
import Data from "../../data/DataStep6.js";
import { motion } from "framer-motion";

const StepAditional2_6 = () => {
    const {
        acai,
        setRender,
        setPosition,
        position,
        setPrice,
        price,
        setFlag,
        flag,
    } = useContext(Context);

    useEffect(() => {
        setPosition(6);
    });

    const handleClick = (e) => {
        const clicked = e.target.value;

        if (clicked != " ") {
            if (flag.aditional2) {
                setFlag({ ...flag, aditional2: false });
                setPrice(price + 2);
            }
        } else {
            if (!flag.aditional2) {
                setFlag({ ...flag, aditional2: true });
                setPrice(price - 2);
            }
        }

        setRender(true);
        setTimeout(() => setRender(false), 200);
        acai.acai.aditional2 = clicked;
    };

    return (
        <div className="step-content">
            <motion.div
                className="step-transition"
                initial={{ translateX: -window.innerWidth * 2 }}
                animate={{ translateX: 0 }}
                exit={{ translateX: -window.innerWidth * 2 }}
            >
                <h1 className="title-step">Mais adicional? Mas é Claro!</h1>
                <div className="text">Adicional para completar:</div>

                <div className="options">
                    {Data.map((option) => (
                        <OptionStep
                            content={option.content}
                            icon={option.icon}
                            text={option.text}
                            handle={handleClick}
                            param={acai.acai.aditional2}
                            desc={option.desc}
                            urlIcon={option.url}
                        />
                    ))}
                </div>
            </motion.div>
            <div className="buttons">
                <Link to="/step/step5">
                    <Button text="Voltar" />
                </Link>
                <Link to="/step/step7">
                    <Button text="Próximo" secondary={true} />
                </Link>
            </div>
        </div>
    );
};

export default StepAditional2_6;
