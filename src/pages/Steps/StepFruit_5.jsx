import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../contexts/Context";
import OptionStep from "../../components/OptionStep/OptionStep";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import "../StepContainer/step.scss";
import Data from "../../data/DataStep5.js";
import { motion } from "framer-motion";

const StepFruit_3 = () => {
    const { acai, setAcai, setRender, setPosition, position , setPrice, price} =
        useContext(Context);

    useEffect(() => {
        setPosition(5);
        console.log("PAGE 2 MEU POSITION É " + position);
        console.log("CONTEUDO: "+acai.fruit)
    });

    const [flag, setFlag] = useState(true);

    const handleClick = (e) => {
        const clicked = e.target.value;
        
        if(clicked != ' '){
            if(flag){
                setFlag(false);
                setPrice(price+2);
            }
        }
        else{
            if(!flag){
                setFlag(true);
                setPrice(price-2);
            }

        }
        
        setRender(true);
        setTimeout(() => setRender(false), 200);
        setAcai({
            size: acai.size,
            fill: acai.fill,
            fruit: clicked,
            aditional1: acai.aditional1,
            roof: acai.roof,
            aditional2: acai.aditional2,
            client: acai.client,
        });
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
                <div className="text">Qual fruta mais gosta?
            </div>

                <div className="options">
                    {Data.map((option, index) => 
                        (
                        <OptionStep
                            content={option.content}
                            icon={option.icon}
                            text={option.text}
                            handle={handleClick}
                            param={acai.fruit}
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
                    <Button text="Próximo" />
                </Link>
            </div>
        </div>
    );
};

export default StepFruit_3;
