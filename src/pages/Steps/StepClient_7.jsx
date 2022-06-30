import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../contexts/Context";
import OptionStep from "../../components/OptionStep/OptionStep";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import "../StepContainer/step.scss";
import Data from "../../data/DataStep6.js";
import { motion } from "framer-motion";

const StepClient_7 = () => {
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
    } = useContext(Context);

    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setPosition(7);
        console.log("PAGE 2 MEU POSITION É " + position);
        console.log("CONTEUDO: " + acai.fruit);
    });

    // const [name, setName] = useState('');

    // const handleInput = (e) => {
    //     setName(e.target.value);
    //     setRender(true);
    //     setTimeout(() => setRender(false), 200);
    //     setAcai({
    //         size: acai.size,
    //         fill: acai.fill,
    //         fruit: acai.fruit,
    //         aditional1: acai.aditional1,
    //         roof: acai.roof,
    //         aditional2: acai.aditional2,
    //         client: name,
    //     });
    // };

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
                <Link to="/step/step8">
                    <Button text="Finalizar" />
                </Link>
            </div>
        </div>
    );
};

export default StepClient_7;
