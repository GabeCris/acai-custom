import React, { useEffect } from "react";
import DataGourmet from "../../data/DataMenuGourmet";
import DataTraditional from "../../data/DataMenuTraditional";
import "../../pages/StepContainer/step.scss";
import { useContext } from "react";
import { Context } from "../../contexts/Context";

const Card = ({ title, text, price, url, amount, id, custom }) => {
    const { cart, handleAddItemCart, removeItemCart, customCart } =
        useContext(Context);

    useEffect(() => {
        console.log("MEU CART É");
        console.log(customCart);
    }, []);

    const data = [...DataGourmet, ...DataTraditional, ...customCart];

    return (
        <div className={`card ${custom ? "card-custom" : ""}`}>
            {custom != true ? (
                <div className="card_image">
                    <img src={`.${url}`} alt="" />
                </div>
            ) : (
                cart
                    .filter((data) => data.acai.id == id)
                    .map((data) => (
                        <div className="card_image">
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
                            {data.acai.fruit != " " && data.acai.fill == 1 && (
                                <img
                                    className={`fruit-acai-cutted`}
                                    src={`../assets/page/steps/step5/fruit_${data.acai.fruit}-cutted.svg`}
                                    alt=""
                                />
                            )}
                            {data.acai.fruit != " " && data.acai.fill == 2 && (
                                <img
                                    className={`fruit-acai-cutted`}
                                    src={`../assets/page/steps/step5/double-cutted/fruit_${data.acai.fruit}-double-cutted.svg`}
                                    alt=""
                                />
                            )}
                            {data.acai.fill != 0 && (
                                <img
                                    className={`fill-acai`}
                                    src={`../assets/page/steps/step2/fill_${data.acai.fill}.svg`}
                                    alt=""
                                />
                            )}
                            {data.acai.roof != " " && (
                                <img
                                    className={`roof-acai`}
                                    src={`../assets/page/steps/step3/roof_${data.acai.roof}.svg`}
                                    alt=""
                                />
                            )}
                            {data.acai.aditional1 != " " && (
                                <img
                                    className={`aditional1-acai`}
                                    src={`../assets/page/steps/step4/aditional1_${data.acai.aditional1}.svg`}
                                    alt=""
                                />
                            )}
                            {data.acai.aditional2 != " " && (
                                <img
                                    className={`aditional2-acai`}
                                    src={`../assets/page/steps/step6/aditional2_${data.acai.aditional2}.svg`}
                                    alt=""
                                />
                            )}
                            {data.acai.fruit != " " && (
                                <img
                                    className={`fruit-acai`}
                                    src={`../assets/page/steps/step5/fruit_${data.acai.fruit}.svg`}
                                    alt=""
                                />
                            )}
                            <img
                                className={`logo-acai`}
                                src={`../assets/page/steps/logo-acai.svg`}
                                alt=""
                            />
                        </div>
                    ))
            )}
            <div className="card_content">
                <h1 className="card_title">{title}</h1>
                <p className="card_text">Tamanho {text}</p>
                <h2 className="card_price">${price * amount}</h2>
            </div>
            <div className="card_input">
                <span
                    onClick={() => {
                        data.filter((data) => data.acai.id == id).map((data) =>
                            removeItemCart(data)
                        );
                    }}
                >
                    -
                </span>
                <p>{amount}</p>
                <span
                    onClick={() => {
                        data.filter((data) => data.acai.id == id).map((data) =>
                            handleAddItemCart(data)
                        );
                    }}
                >
                    +
                </span>
            </div>
        </div>
    );
};

export default Card;
