import React from "react";
import "./modal.scss";
import { Context } from "../../contexts/Context";
import { useContext } from "react";
import { motion } from "framer-motion";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Modal = ({ button1, button2, title, text, children }) => {
    const { modal, setModal } = useContext(Context);

    const changeModal = () =>{
        setModal(!modal)
    }
    return (
        <div className={`modal-container`}>
            <motion.div
                className="modal-box"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
            >
                <h1 className="title-modal">{title}</h1>
                <p className="text-modal">{text}</p>
                <div className="buttons">
                    <div className="button-modal" onClick={changeModal}>Fechar</div>
                    {children}
                </div>
            </motion.div>
            <div className="bg-modal" onClick={changeModal}></div>
        </div>
    );
};

export default Modal;
