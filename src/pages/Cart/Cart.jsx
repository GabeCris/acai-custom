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
        priceCart,
        cart,
        sumAmountView
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
            <h1 className="title">Meu carrinho
            <span className="card_amount">
                [{sumAmountView}]
            </span>
            </h1>
            <div className="cards-container">
                {cart != '' ? cart.map((item) => item.acai.amount > 0 ? (
                    <Card
                        title={item.acai.title}
                        text={item.acai.details.size}
                        price={item.acai.price}
                        url={item.acai.url}
                        id={item.acai.id}
                        key={item.acai.id}
                        amount={item.acai.amount}
                    />
                ): ''): (<p>Nenhum item adicionado ainda :(</p>)}
            </div>
            <div className="buttons">
                <Link to="/">
                    <Button text="Sair" />
                </Link>
                <Link to="/">
                    <Button text="Finalizar" />
                </Link>
            </div>
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

export default Cart;
