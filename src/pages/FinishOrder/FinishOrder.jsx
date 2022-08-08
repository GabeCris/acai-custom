import React from "react";
import { useState, useContext } from "react";
import OptionStep from "../../components/OptionStep/OptionStep";
import Data from "../../data/DataPayment";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Modal from "../../components/Modal/Modal";
import { Context } from "../../contexts/Context";
import { useEffect } from "react";
import LoadPage from "../LoadPage/LoadPage";

const FinishOrder = () => {
    const { setModal, modal, priceCart, load, setLoad } = useContext(Context);
    const [param, setParam] = useState("money");

    const handleClick = (e) => {
        setParam(e.target.value);
    };

    useEffect(() => {
        setLoad(true);
    }, []);

    return (
        <div className="page-container">
            {load && (
                <LoadPage
                    text={"Calculando pedido..."}
                    textLoaded={"Pedido calculado!"}
                />
            )}
            {modal && (
                <Modal
                    title="Atenção"
                    text={`Deseja finalizar a sua compra com ${Data.filter(
                        (option) => option.content == param
                    ).map(
                        (option) => option.text
                    )} no valor de R$${priceCart}?`}
                >
                    <Link to="/">
                        <div className="button-modal button-modal-secondary">
                            Comprar
                        </div>
                    </Link>
                </Modal>
            )}
            <h1 className="title title-finish">
                Só um passo para a felicidade!
            </h1>
            <div className="text">Informe a forma de pagamento:</div>
            <div className="options">
                {Data.map((option) => (
                    <OptionStep
                        content={option.content}
                        icon={option.icon}
                        text={option.text}
                        handle={handleClick}
                        param={param}
                        urlIcon={option.url}
                    />
                ))}
            </div>
            <div className="buttons">
                <Link to="/">
                    <Button text="Sair" />
                </Link>
                <div className="div-button" onClick={() => setModal(!modal)}>
                    <Button text="Finalizar" secondary={true} />
                </div>
            </div>
        </div>
    );
};

export default FinishOrder;
