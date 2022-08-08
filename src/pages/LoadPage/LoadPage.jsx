import React from "react";
import { useEffect, useContext } from "react";
import { useState } from "react";
import "./load_page.scss";
import { Context } from "../../contexts/Context";
import { motion } from "framer-motion";

const LoadPage = ({ text, textLoaded }) => {
    const [counter, setCounter] = useState(0);
    const { setLoad } = useContext(Context);
    const [showLoaded, setShowLoaded] = useState(false);
    const [imageLoad, setImageLoad] = useState(false);

    useEffect(() => {
        loadPage();
    }, []);

    const loadPage = () => {
        let aux = 0;
        const interval = setInterval(() => {
            setCounter(aux);
            aux += 2;
            if (aux >= 101) {
                clearInterval(interval);
                setShowLoaded(true);
                setTimeout(() => {
                    aux = 0;
                    setLoad(false);
                    setShowLoaded(false);
                }, 1500);
            }
        }, 30);
    };
    return (
        <div className="load-container">
            <motion.div
                initial={{ translateY: -100 }}
                animate={{ translateY: 0 }}
                className="load-box"
            >
                <img
                    src="../assets/page/icon-load.svg"
                    alt=""
                    onLoad={() => setImageLoad(true)}
                />
                {imageLoad == true && <div className="bg-load"></div>}
            </motion.div>
            <div className="counter-load">
                <p className="counter-number">{counter}%</p>
            </div>
            <span className="load-message">
                {showLoaded == true ? textLoaded : text}
            </span>
        </div>
    );
};

export default LoadPage;
