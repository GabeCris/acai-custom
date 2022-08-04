import React from "react";
import "../styles/global.scss";
import LogoPage from "../components/LogoPage/LogoPage";
import TitlePage from "../components/TitlePage/TitlePage";
import Text from "../components/Text/Text";
import Button from "../components/Button/Button";
import Products from "./Products/Products";
import MakeYour from "./MakeYour/MakeYour";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { Context } from "../contexts/Context";
import Details from "../components/Details/Details";

const Fullpage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const {
        setModal,
        detailsModal,
        resetAcai,
        sumAmountView,
        renderCart,
        addCustomAcaiToCart,
    } = useContext(Context);

    useEffect(() => {
        setModal(false);
        // addCustomAcaiToCart();
        window.addEventListener("scroll", listenToScroll);
        resetAcai();
        return () => window.removeEventListener("scroll", listenToScroll);
    }, []);

    const listenToScroll = () => {
        let heightToHideFrom = window.innerHeight / 2;
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;

        if (winScroll > heightToHideFrom) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    return (
        <div className="page">
            {detailsModal && <Details />}

            <Link to="/page/cart">
                <div
                    className={`open_cart ${
                        isVisible == true ? "open_cart-show" : ""
                    }   
                    `}
                >
                    <p className="amount_cart">{sumAmountView}</p>
                    <img
                        src="./assets/page/cart.svg"
                        alt=""
                        className={`open_cart-icon ${
                            renderCart == true ? "open_cart-icon-shake" : ""
                        }`}
                    />
                </div>
            </Link>

            <div className="home">
                <LogoPage />
                <img
                    src="./assets/page/background.svg"
                    className="background"
                    alt=""
                />
                <div className="content">
                    <TitlePage title="AQUI VOCÊ MONTA O SEU AÇAÍ" />
                    <Text text="Escolha o jeitinho do seu açaí, e nós entregaremos no conforto da sua casa" />
                    <Link to="step/step1">
                        <Button text="Eu quero" secondary={false} />
                    </Link>
                </div>
                <img
                    src="./assets/page/acai-model.svg"
                    alt=""
                    className="acai-model"
                />
            </div>
            <Products title="Gourmet" type="gourmet"></Products>
            <Products title="Tradicional" type="traditional"></Products>
            <MakeYour></MakeYour>
            <footer className="footer">
                <a href="https://www.linkedin.com/in/gabriel-crisanto/"
                target='_blank'>
                    <img
                        className="icon"
                        src="./assets/page/linkedin.svg"
                        alt=""
                    />
                </a>
                <a href="https://github.com/GabeCris" target='_blank'>
                <img className="icon" src="./assets/page/github.svg" alt="" />
                </a>
                <img
                    className="bg-footer"
                    src="./assets/page/footer.svg"
                    alt=""
                />
            </footer>
        </div>
    );
};

export default Fullpage;
