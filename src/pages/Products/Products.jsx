import React from "react";
import "./products.scss";
import CardShopAcai from "../../components/CardShopAcai/CardShopAcai";
import DataGourmet from "../../data/DataMenuGourmet";
import DataTraditional from "../../data/DataMenuTraditional";
import { Context } from "../../contexts/Context";
import { useContext } from "react";

const Products = ({ title, type }) => {
    const { detailsModal, setDetailsModal, setIdDetails } = useContext(Context);
    // console.log(Data);

    const handleClick = (e) => {
        const clicked = e.target.id;
        setIdDetails(clicked);
        setDetailsModal(!detailsModal);
    };

    return (
        <section className="products">
            <div className="title-page title">{title}</div>
            <div className="products_row">
                {/* {DataGourmet.map((card, index) => (
                    <>
                        <CardShopAcai
                            key={card.id}
                            title={card.acai.title}
                            size={card.acai.size}
                            price={card.acai.price}
                            id={card.acai.id}
                            url={card.acai.url}
                            handleClick={handleClick}
                        />
                    </>
                ))} */}
                {type == "gourmet"
                    ? DataGourmet.map((card, index) => (
                          <>
                              <CardShopAcai
                                  key={card.acai.id}
                                  title={card.acai.title}
                                  size={card.acai.size}
                                  price={card.acai.price}
                                  id={card.acai.id}
                                  url={card.acai.url}
                                  handleClick={handleClick}
                              />
                          </>
                      ))
                    : DataTraditional.map((card, index) => (
                          <>
                              <CardShopAcai
                                  key={card.id}
                                  title={card.acai.title}
                                  size={card.acai.size}
                                  price={card.acai.price}
                                  id={card.acai.id}
                                  url={card.acai.url}
                                  handleClick={handleClick}
                              />
                          </>
                      ))}
            </div>
        </section>
    );
};

export default Products;
