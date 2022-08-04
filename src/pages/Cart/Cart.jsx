import React from "react";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import { Context } from "../../contexts/Context";
import { useContext } from "react";
import Modal from "../../components/Modal/Modal";
import { useEffect } from "react";
import { useState } from "react";

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
        cart,
        addCustomAcaiToCart,
        sumAmountView,
        lengthCart,
    } = useContext(Context);

    return (
        <div className="page-container">
            {modal && (
                <Modal
                    title="Atenção"
                    text="Tem certeza que deseja sair sem finalizar sua compra?"
                >
                    <Link to="/">
                        <div className="button-modal button-modal-secondary">
                            Sair
                        </div>
                    </Link>
                </Modal>
            )}
            <h1 className="title">
                Meu carrinho
                <span className="card_amount">[{sumAmountView}]</span>
            </h1>
            {sumAmountView > 0 ? (
                <div className="cards-container">
                    {cart.map((item) =>
                        item.acai.amount > 0 ? (
                            <Card
                                title={item.acai.title}
                                text={item.acai.details.size}
                                price={item.acai.price}
                                url={item.acai.url}
                                id={item.acai.id}
                                key={item.acai.id}
                                amount={item.acai.amount}
                                custom={item.acai.custom}
                            />
                        ) : (
                            ""
                        )
                    )}
                </div>
            ) : (
                <div className="cards-container cards-container-null">
                    <p>Nenhum açaí foi adicionado ainda :(</p>
                </div>
            )}
            <div className="buttons">
                <Link to="/">
                    <Button text="Sair" secondary={false} />
                </Link>
                {sumAmountView != 0 && (
                    <Link to="/page/finish">
                        <Button text="Finalizar" secondary={true} />
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Cart;
