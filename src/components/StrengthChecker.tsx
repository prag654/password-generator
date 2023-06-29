import React from "react";
import { ErrorMessage } from "../enum/GlobleEnum";

const PasswordStrengthIndicator = ({ password = "" }) => {
    const getPasswordStrength = () => {
        const passwordLength = password.length;
        console.log('first', passwordLength)
        if (passwordLength < 1) {
            return "";
        } else if (passwordLength < 4) {
            return ErrorMessage.Very_Weak;
        } else if (passwordLength < 8) {
            return ErrorMessage.Poor;
        } else if (passwordLength < 12) {
            return ErrorMessage.Medium;
        } else if (passwordLength < 16) {
            return ErrorMessage.Strong;
        } else {
            return ErrorMessage.Very_Strong;
        }
    };

    const passwordStrength = getPasswordStrength();

    if (!passwordStrength) return <React.Fragment />;

    return (
        <div className="password-strength">
            Strength: <span style={{ fontWeight: "bold", color: "rgb(202,9,73)" , fontSize:"30px" }}>{passwordStrength}</span>
        </div>
    );
};

export default PasswordStrengthIndicator;