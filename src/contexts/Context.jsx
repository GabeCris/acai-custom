import React, { createContext, useState } from "react";
import translateFruit from "../data/TranslateFruit";
import translateRoof from "../data/TranslateRoof";

export const Context = createContext({});

const ContextProvider = ({ children }) => {
    const [price, setPrice] = useState(0);
    const [priceSize, setPriceSize] = useState(6);
    const [position, setPosition] = useState(0);
    const [nameClient, setNameClient] = useState("");
    const [modal, setModal] = useState(false);
    const [detailsModal, setDetailsModal] = useState(false);
    const [idDetails, setIdDetails] = useState(2);
    const [priceCart, setPriceCart] = useState(0);
    const [idAcai, setIdAcai] = useState(20);

    const [flag, setFlag] = useState({
        aditional1: true,
        aditional2: true,
        fruit: true,
        roof: true,
        fill: true,
    });

    const resetAcai = () => {
        setPrice(0);
        setPriceSize(6);
        setNameClient("")
        setAcai({
            acai: {
                id: "",
                amount: 1,
                title: "Sem nada",
                size: "p",
                fill: 0,
                fruit: " ",
                aditional1: " ",
                roof: " ",
                aditional2: " ",
                price: 0,
                url: `./assets/acai/acai_traditional-3.svg`,
                custom: true,
                details: {
                    size: "Pequeno",
                    fill: "Camadas",
                    fruit: "Uva",
                    aditional1: "Granulado",
                    roof: "Leite Cond",
                    aditional2: "2 tubetes",
                },
            },
        });
    };

    const [cart, setCart] = useState([]);
    // const [lengthCart, setLengthCart] = useState(cart.length);
    const [sumAmountView, setAmountView] = useState(0);
    const [customCart, setCustomCart] = useState([]);

    const handleAddItemCart = (item) => {
        console.log("item adicionado");
        const copyCart = [...cart];
        const copyCustom = [];
        const found = copyCart.find(
            (element) => element.acai.id == item.acai.id
        );

        if (item.acai.custom == true) {
            copyCustom.push(item);
            setCustomCart(copyCustom);
        }
        // console.log('O CUSTOM É');
        // console.log(item.acai.custom);

        if (!found) {
            console.log("NAO TEM UM ACAI");
            // if (item.acai.size == "p") {
            //     // item.acai.price = 6;
            //     item.acai.details.size = "Pequeno";
            // } else if (item.acai.size == "m") {
            //     // item.acai.price = 8;
            //     item.acai.details.size = "Médio";
            // } else if (item.acai.size == "g") {
            //     // item.acai.price = 10;
            //     item.acai.details.size = "Grande";
            // }
            copyCart.push(item);
        } else {
            found.acai.amount = found.acai.amount + 1;
        }

        setPriceCart(0);
        setCart(copyCart);
        let sumPrice = 0;
        let sumAmount = 0;
        sumAmount = 0;
        sumPrice = 0;
        copyCart.map((item) => {
            sumPrice += item.acai.price * item.acai.amount;
            sumAmount += item.acai.amount;
        });
        // console.log(sumPrice);
        setAmountView(sumAmount);
        setPriceCart(sumPrice);
        // setLengthCart(cart.length)
    };

    const removeItemCart = (item) => {
        const copyCart = [...cart];
        const found = copyCart.find(
            (element) => element.acai.id == item.acai.id
        );

        if (found.acai.amount >= 1) {
            found.acai.amount = found.acai.amount - 1;
            setCart(copyCart);
        }

        if (item.acai.amount == 0) {
            const arrayFiltered = copyCart.filter(
                (element) => element.acai.id != item.acai.id
            );
            setCart(arrayFiltered);
        }
        setPriceCart(0);
        setCart(copyCart);
        let sumPrice = 0;
        let sumAmount = 0;
        sumAmount = 0;
        sumPrice = 0;

        copyCart.map((item) => {
            sumPrice += item.acai.price * item.acai.amount;
            sumAmount += item.acai.amount;
        });
        console.log(sumPrice);
        setAmountView(sumAmount);
        setPriceCart(sumPrice);
        // setLengthCart(cart.length)
    };

    const [acai, setAcai] = useState({
        acai: {
            id: "",
            amount: 1,
            title: "Sem nada",
            size: "p",
            fill: 0,
            fruit: " ",
            aditional1: " ",
            roof: " ",
            aditional2: " ",
            price: 0,
            url: `./assets/acai/acai_traditional-3.svg`,
            custom: true,
            details: {
                size: "Pequeno",
                fill: "Camadas",
                fruit: "Uva",
                aditional1: "Granulado",
                roof: "Leite Cond",
                aditional2: "2 tubetes",
            },
        },
    });

    const addCustomAcaiToCart = (acai) => {
        acai.acai.price = price + priceSize;
        acai.acai.id = idAcai;
        if (acai.acai.fruit != "") {
            translateFruit
                .filter((data) => data.fruit[0] == acai.acai.fruit)
                .map((data) => (acai.acai.title = data.fruit[1]));
        }

        if (acai.acai.roof != "") {
            translateRoof
                .filter((data) => data.roof[0] == acai.acai.roof)
                .map((data) =>
                    acai.acai.title != ""
                        ? (acai.acai.title = `${acai.acai.title} & ${data.roof[1]}`)
                        : (acai.acai.title = data.roof[1])
                );
        }
        setIdAcai(idAcai + 1);
        handleAddItemCart(acai);
    };

    const [render, setRender] = useState(false);
    const [renderCart, setRenderCart] = useState(false);

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
                setDetailsModal,
                idDetails,
                setIdDetails,
                resetAcai,
                flag,
                setFlag,
                handleAddItemCart,
                removeItemCart,
                cart,
                priceCart,
                sumAmountView,
                setRenderCart,
                renderCart,
                addCustomAcaiToCart,
                customCart,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;
