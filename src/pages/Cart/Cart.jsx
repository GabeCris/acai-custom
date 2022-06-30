import React from "react";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import { Context } from "../../contexts/Context";
import { useContext } from "react";
import Modal from "../../components/Modal/Modal";

const Cart = () => {
    const {
        acai,
        render,
        price,
        position,
        priceSize,
        nameClient,
        modal,
        setModal,
    } = useContext(Context);
    return (
        <div className="page-container">
            {modal && (
                <Modal
                    title="Atenção"
                    text="Tem certeza que deseja sair sem finalizar sua compra?"
                >
                    <Link to='/'>
                    <div className="button-modal button-modal-secondary">Sair</div>
                    </Link>
                </Modal>
            )}
            <h1 className="title">Meu carrinho</h1>
            <div className="cards-container">
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
            <div className="buttons">
                <Link to="/">
                    <Button text="Sair" />
                </Link>
                <Link to="/">
                    <Button text="Finalizar"/>
                </Link>
            </div>
            <div className="price_container">
                <p className="price-symbol">$</p>
                <div className="price-value">
                    <p>12</p>
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

export default Cart;
