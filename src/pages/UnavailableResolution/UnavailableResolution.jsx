import React from "react";
import LogoPage from "../../components/LogoPage/LogoPage";
import "./unavailable.scss";

const UnavailableResolution = () => {
    return (
        <div className="un-container">
            <LogoPage />
            <div className="un-content">
                <h1 className="un-title">Oops...</h1>
                <p className="un-text">
                    Nosso website ainda não está disponível nessa resolução de
                    tela :(
                </p>
            </div>
            <img
                className="un-footer"
                src="../assets/page/unavailable-footer.svg"
                alt=""
            />
        </div>
    );
};

export default UnavailableResolution;
