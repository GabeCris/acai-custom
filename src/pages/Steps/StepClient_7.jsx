import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../contexts/Context";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import "../StepContainer/step.scss";
import { motion } from "framer-motion";

const StepClient_7 = () => {
    const {
        setPosition,
        setNameClient,
        nameClient,
        addCustomAcaiToCart,
        acai,
    } = useContext(Context);

    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setPosition(7);
    });

    return (
        <div className="step-content">
            <motion.div
                className="step-transition"
                initial={{ translateX: -window.innerWidth * 2 }}
                animate={{ translateX: 0 }}
                exit={{ translateX: -window.innerWidth * 2 }}
            >
                <h1 className="title-step">Já estamos finalizando...</h1>
                <div className="text">Informe seu nome:</div>
                <input
                    value={nameClient}
                    className="input_name-client"
                    maxLength={13}
                    onChange={(e) => {
                        setNameClient(e.target.value);
                    }}
                    type="text"
                    placeholder="ex: Joãozinho"
                    disabled={checked}
                />
                <label className="disable-input_name-client">
                    <input
                        type="checkbox"
                        onClick={() => {
                            setChecked(!checked);
                            setNameClient("");
                        }}
                        name="nameClient"
                        id="check-name"
                        checked={checked}
                    />
                    Não quero colocar nome no copo
                </label>
            </motion.div>
            <div className="buttons">
                <Link to="/step/step6">
                    <Button text="Voltar" />
                </Link>
                <Link
                    to="/step/step8"
                    onClick={() => addCustomAcaiToCart(acai)}
                >
                    <Button text="Finalizar" secondary={true} />
                </Link>
            </div>
        </div>
    );
};

export default StepClient_7;
