import React, { useContext, useEffect } from "react";
import { Context } from "../../contexts/Context";
import OptionStep from "../../components/OptionStep/OptionStep";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import "../StepContainer/step.scss";
import Data from "../../data/DataStep5.js";
import { motion } from "framer-motion";

const StepFruit_3 = () => {
    const {
        acai,
        setRender,
        setPosition,
        position,
        setPrice,
        price,
        flag,
        setFlag,
    } = useContext(Context);

    useEffect(() => {
        setPosition(5);
    });

    const handleClick = (e) => {
        const clicked = e.target.value;

        if (clicked != " ") {
            if (flag.fruit) {
                setFlag({ ...flag, fruit: false });
                setPrice(price + 2);
            }
        } else {
            if (!flag.fruit) {
                setFlag({ ...flag, fruit: true });
                setPrice(price - 2);
            }
        }

        setRender(true);
        setTimeout(() => setRender(false), 200);
        acai.acai.fruit = clicked;
    };

    return (
        <div className="step-content">
            <motion.div
                className="step-transition"
                initial={{ translateX: -window.innerWidth * 2 }}
                animate={{ translateX: 0 }}
                exit={{ translateX: -window.innerWidth * 2 }}
            >
                <h1 className="title-step">Vamos agora para as frutas!</h1>
                <div className="text">Qual fruta mais gosta?</div>

                <div className="options">
                    {Data.map((option) => (
                        <OptionStep
                            content={option.content}
                            icon={option.icon}
                            text={option.text}
                            handle={handleClick}
                            param={acai.acai.fruit}
                            desc={option.desc}
                            urlIcon={option.url}
                        />
                    ))}
                </div>
            </motion.div>
            <div className="buttons">
                <Link to="/step/step4">
                    <Button text="Voltar" />
                </Link>
                <Link to="/step/step6">
                    <Button text="Próximo" secondary={true} />
                </Link>
            </div>
        </div>
    );
};

export default StepFruit_3;
