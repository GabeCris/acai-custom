import React, { createContext, useState } from "react";

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

    const [cart, setCart] = useState([]);
    const [sumAmountView, setAmountView] = useState(0)
   
    const handleAddItemCart = (item, size) => {
        const copyCart = [...cart];
        const found = copyCart.find((element) => element.acai.id == item.acai.id);
        if (!found) {
            copyCart.push(item)
        }
        // console.log("SIZE È "+size)
        else{
            item.acai.amount = item.acai.amount + 1;
        }
        //     console.log("ENCONTREI "+foundSize.acai.size+" E "+size)
        //     if(foundSize == size){
        //     }
        //     else{
        //         found.acai.details.size = size
        //         copyCart.push(item)
        //     }
        //     // if(size == 'p'){
        //     //     item.acai.details.size = 'Pequeno'
        //     //     copyCart.push(item)
        //     // }
        //     // else if(size == 'm'){
        //     //     item.acai.details.size = 'Médio'
        //     //     copyCart.push(item)
        //     // }
        //     // else if(size == 'g'){
        //     //     item.acai.details.size = 'Grande'
        //     //     copyCart.push(item)
        //     // }
        // }

        setPriceCart(0)
        setCart(copyCart);
        let sumPrice = 0;
        let sumAmount = 0;
        sumAmount = 0;
        sumPrice = 0;

        copyCart.map(item =>{
            sumPrice += item.acai.price * item.acai.amount;
            sumAmount += item.acai.amount;
        })
        console.log(sumPrice)
        setAmountView(sumAmount)
        setPriceCart(sumPrice)
    };
    
    const removeItemCart = (item) => {
        const copyCart = [...cart];
        const found = copyCart.find((element) => element.acai.id == item.acai.id);
        
        if (found.acai.amount >= 1) {
            found.acai.amount = found.acai.amount -1;
            setCart(copyCart);
        }
        
        if(item.acai.amount == 0){
            const arrayFiltered = copyCart.filter((element) => element.acai.id != item.acai.id);
            setCart(arrayFiltered);
            console.log('Array filtrado');
            console.log(cart);
        }
        setPriceCart(0)
        setCart(copyCart);
        let sumPrice = 0;
        let sumAmount = 0;
        sumAmount = 0;
        sumPrice = 0;

        copyCart.map(item =>{
            sumPrice += item.acai.price * item.acai.amount;
            sumAmount += item.acai.amount;
        })
        console.log(sumPrice)
        setAmountView(sumAmount)
        setPriceCart(sumPrice)
    }

    const [acai, setAcai] = useState({
        // size: "p",
        // fill: 2,
        // fruit: "strawberry",
        // aditional1: "confetti",
        // roof: "nutella",
        // aditional2: "one-tube",
        // client: "Gabriel",
        size: "p",
        fill: 0,
        fruit: " ",
        aditional1: " ",
        roof: " ",
        aditional2: " ",
        client: " ",
    });

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
                renderCart

            }}
        >
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;
