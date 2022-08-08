import React from "react";
import "./option.scss";

const OptionStep = ({ content, icon, text, handle, param, urlIcon }) => {
    return (
        <div className="option-step">
            <label
                className={`option-button ${
                    content == param ? "option-selected" : " "
                }`}
            >
                <input
                    type="radio"
                    name="options"
                    value={content}
                    onChange={handle}
                />
                <span>
                    {icon == true ? (
                        <img src={`.${urlIcon}`} alt="" />
                    ) : (
                        content
                    )}
                </span>
            </label>
            <p className="option-text">{text}</p>
        </div>
    );
};

export default OptionStep;
