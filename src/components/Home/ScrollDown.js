import React from "react";
import { FaArrowDown } from "react-icons/fa";
import "./ScrollDown.css"; // Ensure the correct path to your CSS file

const ScrollDown = () => {
    return (
        <div className="scroll-down">
            <button className="scroll-button">
                <FaArrowDown className="scroll-icon" />
                <div className="scroll-text">Scroll Down</div>
            </button>
        </div>
    );
}

export default ScrollDown;
