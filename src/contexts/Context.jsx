import React, { createContext, useState } from "react";

export const Context = createContext({});

const ContextProvider = ({ children }) => {
    const [price, setPrice] = useState(0);
    const [priceSize, setPriceSize] = useState(6);
    const [position, setPosition] = useState(0);
    const [nameClient, setNameClient] = useState("");
    const [modal, setModal] = useState(false);
    const [detailsModal, setDetailsModal] = useState(false);

    const resetAcai = () => {
        setAcai({
            size: "p",
            fill: 0,
            fruit: " ",
            aditional1: " ",
            roof: " ",
            aditional2: " ",
            client: " ",
        });
    };

    const [acai, setAcai] = useState({
        size: "p",
        fill: 2,
        fruit: "strawberry",
        aditional1: "confetti",
        roof: "nutella",
        aditional2: "one-tube",
        client: "Gabriel",
    });

    const [render, setRender] = useState(false);

    return (
        <Context.Provider
            value={{
                acai,
                setAcai,
                render,
                setRender,
                setPrice,
                price,
                position,
                setPosition,
                setPriceSize,
                priceSize,
                setNameClient,
                nameClient,
                modal,
                setModal,
                resetAcai,
                detailsModal,
                setDetailsModal
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;
