import { useState } from "react";
import usePasswordGenerator from "./CustomeHooks/usePasswordGenerator";
import PasswordStrengthIndicator from "./components/StrengthChecker";
import Button from "./components/Button";
import Checkbox from "./components/Checkbox";
import { FaCopy } from 'react-icons/fa';

export default function App() {
    const [length, setLength] = useState(4);
    const [checkboxData, setCheckboxData] = useState([
        { title: "Include uppercase letters", state: false },
        { title: "Include lowercase letters", state: false },
        { title: "Include numbers", state: false },
        { title: "Include symbols", state: false }
    ]);

    const handleCheckboxChange = (i:number) => {
        const updatedCheckboxData = [...checkboxData];
        updatedCheckboxData[i].state = !updatedCheckboxData[i].state;
        setCheckboxData(updatedCheckboxData);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(password);
    };

    const { password, errorMessage, generatePassword } = usePasswordGenerator();

    return (
        <div className="app">
            <div className='container'>
                <div className='subContainer'>
                    <h1 className="text-center">Password Generator</h1>
                    <div>
                        <input type="text" value={password} className="form-control" style={{background:"#041923"}} />
                        <button
                            onClick={handleCopy}
                            className="copyBtn"
                        > <FaCopy style = {{color: "white", fontSize: "1.9em"}} />
                        </button>
                    </div>
                    <div className='option'>
                    <label>Password length</label>
                    <input
                        type='number'
                        name='length'
                        min='4'
                        max='20'
                        defaultValue={length}
                        // disabled={length < 20 ? false : true}
                        onChange={(e:any) => setLength(e.target.value)}
                        id="pass"
                    />
                        <div className="option">
                            {checkboxData.map((checkbox, index) => {
                            return (
                                <Checkbox
                                    key={index}
                                    title={checkbox.title}
                                    onChange={() => handleCheckboxChange(index)}
                                    state={checkbox.state}
                                />
                            );
                        })}
                         </div>
                        <PasswordStrengthIndicator password={password} />

                        {errorMessage && <div className="errorMessage">{errorMessage}</div>}

                        <Button
                            text="Generate Password"
                            onClick={() => {generatePassword(checkboxData, length)}}
                            customClass="generateBtn" />
                    </div>
                </div>
            </div>
        </div>
    );
}