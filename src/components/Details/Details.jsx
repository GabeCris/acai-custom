import React from "react";
import "./details.scss";
import { motion } from "framer-motion";
import { Context } from "../../contexts/Context";
import { useContext } from "react";
import DetailsItem from "../DetailsItem/DetailsItem";
import Button from "../Button/Button";
import DataGourmet from "../../data/DataMenuGourmet";
import DataTraditional from "../../data/DataMenuTraditional";
import { useEffect, useState } from "react";

const Details = () => {
    const { detailsModal, setDetailsModal, idDetails } = useContext(Context);

    useEffect(() => {
        changeDetails();
    }, []);

    const [details, setDetails] = useState([{}]);

    const changeDetails = () => {
        const data = [ ...DataGourmet, ...DataTraditional ];
        data.filter((data) => data.acai.id == idDetails).map((data) =>
            setDetails([
                {
                    title: "Frutas",
                    subtitle: data.acai.details.fruit,
                    url: data.acai.fruit,
                    initial: "./assets/page/steps/step5/icons/fruit_",
                },
                {
                    title: "Adicional",
                    subtitle: data.acai.details.aditional1,
                    url: data.acai.aditional1,
                    initial: "./assets/page/steps/step4/icons/aditional1_",
                },
                {
                    title: "Adicional",
                    subtitle: data.acai.details.aditional2,
                    url: data.acai.aditional2,
                    initial: "./assets/page/steps/step6/icons/aditional2_",
                },
                {
                    title: "Recheio",
                    subtitle: data.acai.details.fill,
                    url: data.acai.fill,
                    initial: ''
                },
                {
                    title: "Cobertura",
                    subtitle: data.acai.details.roof,
                    url: data.acai.roof,
                    initial: "./assets/page/steps/step3/icons/roof_",
                },
                {
                    title: "Tamanho",
                    subtitle: data.acai.details.size,
                    url: data.acai.size,
                    initial: '',
                },
            ])
        );
    };

    return (
        <div>
            <div className={`details-container`}>
                <motion.div
                    className="details-box"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                >
                    <h1 className="title-details">Detalhes</h1>
                    <div className="details_items">
                        {details.map((element) => (
                            <DetailsItem
                                title={element.title}
                                subtitle={element.subtitle}
                                image={element.url}
                                initial={element.initial}
                            ></DetailsItem>
                        ))}
                    </div>
                    <div onClick={() => setDetailsModal(!detailsModal)}>
                        <Button text="Voltar" secondary={true}></Button>
                    </div>
                </motion.div>
                <div
                    className="bg-details"
                    onClick={() => setDetailsModal(!detailsModal)}
                ></div>
            </div>
        </div>
    );
};

export default Details;
