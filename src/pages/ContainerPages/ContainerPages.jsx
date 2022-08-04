import React from "react";
import { Outlet } from "react-router-dom";
import "../../styles/container_pages.scss";

import { Context } from "../../contexts/Context";
import { useContext } from "react";
import Modal from "../../components/Modal/Modal";
import { Link } from "react-router-dom";
import { useState } from "react";

const ContainerPages = () => {
    const { modal, setModal, priceCart } = useContext(Context);

    return (
        <div className="container-pages">
            <img
                className="logo_page"
                src="../assets/page/logo_custom-acai.svg"
                alt="Logo do custom acai"
            />
            <Outlet></Outlet>
            <img
                src="../assets/page/acai-model.svg"
                alt=""
                className="acai-model"
            />
            <img className="step-bg" src="../assets/page/bg-step.svg" alt="" />
            <Link to="/">
                <div className="close-icon">
                    <img src="../assets/page/close-icon.svg" alt="" />
                </div>
            </Link>
            <div className="price_container">
                <p className="price-symbol">$</p>
                <div className="price-value">
                    <p>{priceCart}</p>
                    <span>Total</span>
                </div>
                <img
                    className="price-background"
                    src="../assets/page/price.svg"
                    alt="Logo do custom acai"
                />
            </div>
        </div>
    );
};

export default ContainerPages;
