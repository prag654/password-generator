import React from 'react';

interface ButtonProps {
    onClick: any;
    text: string;
    customClass: any;
}

const Button:React.FC<ButtonProps> = ({ onClick, text, customClass }) => {
    return (
        <button className={customClass} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;