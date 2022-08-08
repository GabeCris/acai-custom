import React, { useEffect } from "react";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import { Context } from "../../contexts/Context";
import { useContext } from "react";
import Modal from "../../components/Modal/Modal";
import LoadPage from "../LoadPage/LoadPage";

const Cart = () => {
    const { modal, cart, sumAmountView, setLoad, load } = useContext(Context);

    useEffect(() => {
        setLoad(true);
    }, []);

    return (
        <div className="page-container">
            {load && (
                <LoadPage
                    text={"Organizando carrinho..."}
                    textLoaded={"Carrinho pronto!"}
                />
            )}
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
                    <Button text="Menu" secondary={false} />
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
