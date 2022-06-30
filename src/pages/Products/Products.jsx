import React from "react";
import "./products.scss";
import CardShopAcai from "../../components/CardShopAcai/CardShopAcai";

const Products = ({ title }) => {
    const cards = [
        {
            title: "Morango e Confete",
            size: "p",
            price: 16,
        },
        {
            title: "Banana e Ninho",
            size: "g",
            price: 19,
        },
        {
            title: "Ninho e Confete",
            size: "m",
            price: 20,
        },
        {
            title: "Morango e Amendoim",
            size: "p",
            price: 15,
        },
    ];

    return (
        <section className="products">
            <div className="title-page title">{title}</div>
            <div className="products_row">
                {cards.map((card, index) => (
                    <>
                        <CardShopAcai
                            key={index}
                            title={card.title}
                            size={card.size}
                            price={card.price}
                        />
                    </>
                ))}
            </div>
        </section>
    );
};

export default Products;
