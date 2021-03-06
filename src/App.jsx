// import './App.css';
import React from "react";
import Fullpage from "./pages/Fullpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Step1 from "./pages/Steps/StepSize_1";
import Step2 from "./pages/Steps/StepFill_2";
import Step3 from "./pages/Steps/StepRoof_3";
import Step4 from "./pages/Steps/StepAditional1_4";
import Step5 from "./pages/Steps/StepFruit_5";
import Step6 from "./pages/Steps/StepAditional2_6";
import Step7 from "./pages/Steps/StepClient_7";
import Step8 from "./pages/Steps/StepFinish_8";
import StepContainer from "./pages/StepContainer/StepContainer";
import { useState, useContext } from "react";
import { Context } from "./contexts/Context";
import { AnimatePresence } from "framer-motion";
import Modal from "./components/Modal/Modal";
import ContainerPages from "./pages/ContainerPages/ContainerPages";
import Cart from "./pages/Cart/Cart";


function App() {
    return (
        <AnimatePresence>
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Fullpage />} />
                        <Route path="/step" element={<StepContainer />}>
                            <Route path="step1" element={<Step1 />} />
                            <Route path="step2" element={<Step2 />} />
                            <Route path="step3" element={<Step3 />} />
                            <Route path="step4" element={<Step4 />} />
                            <Route path="step5" element={<Step5 />} />
                            <Route path="step6" element={<Step6 />} />
                            <Route path="step7" element={<Step7 />} />
                            <Route path="step8" element={<Step8 />} />
                        </Route>
                        <Route path="/page" element={<ContainerPages/>}>
                            <Route path="cart" element={<Cart />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </AnimatePresence>
    );
}

export default App;
