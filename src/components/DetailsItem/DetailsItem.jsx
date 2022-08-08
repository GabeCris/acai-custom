import React from "react";
import "../Details/details.scss";

const DetailsItem = ({ title, subtitle, image, initial }) => {
    console.log("FRUTA " + image);
    return (
        <div className="details_item-container">
            <p className="details_item-title">{title}</p>
            <div className="details_item-box">
                {initial ? (
                    <img src={`${initial}${image}.svg`} alt="" />
                ) : (
                    <p>{image}</p>
                )}
            </div>
            <p className="details_item-content">{subtitle}</p>
        </div>
    );
};

export default DetailsItem;
