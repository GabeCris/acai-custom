import React from "react";
import "./option.scss";
import { useState, useContext } from "react";
import { Context } from "../../contexts/Context";

const OptionStep = ({ content, icon, text, handle, param, urlIcon}) => {
    const {acai} = useContext(Context);
    return (
        <div className="option-step">
            <label
                className={`option-button ${
                    content == param ? "option-selected" : ' '
                }`}
                
                >
                <input
                    type="radio"
                    name="options"
                    value={content}
                    onChange={handle}
                />
                <span>{icon == true ? (
                    <img src={`.${urlIcon}`} alt="" />
                ) : content}</span>
            </label>
            <p className="option-text">{text}</p>
        </div>
    );
};

export default OptionStep;
