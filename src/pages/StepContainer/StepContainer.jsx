import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./step.scss";
import { Context } from "../../contexts/Context";
import { useContext } from "react";
import ProgressData from "../../data/DataProgress.js";
import Modal from "../../components/Modal/Modal";

const StepContainer = () => {
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
        <div className="step-container">
            {modal && (
                <Modal
                    title="Atenção"
                    text="Se sair perderá seu progresso e o açaí será esquecido :("
                >
                    <Link to="/">
                        <div className="button-modal button-modal-secondary">
                            Menu
                        </div>
                    </Link>
                </Modal>
            )}
            <img
                className="logo_page"
                src="../assets/page/logo_custom-acai.svg"
                alt="Logo do custom acai"
            />
            <Outlet></Outlet>
            <div className={`custom-acai ${render ? "render-element" : ""}`}>
                {position > 1 && (
                    <img
                        className="flag-size-acai"
                        src={`../assets/page/steps/step1/size-flags/flag_size-${acai.acai.size}.svg`}
                        alt=""
                    />
                )}
                {position > 1 && <p className="name-client">{nameClient}</p>}
                {position <= 1 ? (
                    <img
                        className="cup-acai"
                        src="../assets/page/steps/step1/size-cups.svg"
                        alt=""
                    />
                ) : (
                    <>
                        <img
                            className="cup-acai"
                            src="../assets/page/steps/acai-cup.svg"
                            alt=""
                        />
                        <img
                            className="cup-acai-shadow"
                            src="../assets/page/steps/shadow.svg"
                            alt=""
                        />
                    </>
                )}
                {acai.acai.fruit != " " &&
                    acai.acai.fill == 1 &&
                    position > 1 && (
                        <img
                            className={`fruit-acai-cutted`}
                            src={`../assets/page/steps/step5/fruit_${acai.acai.fruit}-cutted.svg`}
                            alt=""
                        />
                    )}
                {acai.acai.fruit != " " &&
                    acai.acai.fill == 2 &&
                    position > 1 && (
                        <img
                            className={`fruit-acai-cutted`}
                            src={`../assets/page/steps/step5/double-cutted/fruit_${acai.acai.fruit}-double-cutted.svg`}
                            alt=""
                        />
                    )}
                {acai.acai.fill != 0 && position > 1 && (
                    <img
                        className={`fill-acai`}
                        src={`../assets/page/steps/step2/fill_${acai.acai.fill}.svg`}
                        alt=""
                    />
                )}
                {acai.acai.roof != " " && position > 1 && (
                    <img
                        className={`roof-acai`}
                        src={`../assets/page/steps/step3/roof_${acai.acai.roof}.svg`}
                        alt=""
                    />
                )}
                {acai.acai.aditional1 != " " && position > 1 && (
                    <img
                        className={`aditional1-acai`}
                        src={`../assets/page/steps/step4/aditional1_${acai.acai.aditional1}.svg`}
                        alt=""
                    />
                )}
                {acai.acai.aditional2 != " " && position > 1 && (
                    <img
                        className={`aditional2-acai`}
                        src={`../assets/page/steps/step6/aditional2_${acai.acai.aditional2}.svg`}
                        alt=""
                    />
                )}
                {acai.acai.fruit != " " && position > 1 && (
                    <img
                        className={`fruit-acai`}
                        src={`../assets/page/steps/step5/fruit_${acai.acai.fruit}.svg`}
                        alt=""
                    />
                )}
                {position == 8 && (
                    <img
                        className={`logo-acai`}
                        src={`../assets/page/steps/logo-acai.svg`}
                        alt=""
                    />
                )}
            </div>
            <div className="price_container">
                <p className="price-symbol">$</p>
                <div className="price-value">
                    <p>{price + priceSize}</p>
                    <span>Total</span>
                </div>
                <img
                    className="price-background"
                    src="../assets/page/price.svg"
                    alt="Logo do custom acai"
                />
            </div>
            {position != 8 && (
                <div className="progress-bar">
                    {ProgressData.map((pos, index) => (
                        <div
                            className={`progress ${
                                index + 1 <= position ? "progress-active" : ""
                            }`}
                        >
                            {index + 1}
                        </div>
                    ))}
                </div>
            )}
            <img className="step-bg" src="../assets/page/bg-step.svg" alt="" />
            <div className="close-icon" onClick={() => setModal(!modal)}>
                <img src="../assets/page/close-icon.svg" alt="" />
            </div>
        </div>
    );
};

export default StepContainer;
