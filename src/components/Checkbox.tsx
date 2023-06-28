import React from "react";
interface CheckboxProps {
    title: string,
    state: any,
    onChange: () => void;
}
const Checkbox:React.FC<CheckboxProps> = ({ title, state, onChange }) => {
    return (
        <div>
            <label>{title}</label>
            <input type="checkbox" onChange={onChange} checked={state} />
        </div>
    );
};

export default Checkbox;