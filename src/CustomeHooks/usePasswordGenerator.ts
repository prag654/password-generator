import { useState } from "react";
import {Passoword} from "../enum/passwordEnum";

const usePasswordGenerator = () => {
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const generatePassword = (checkboxData:any, length:number) => {
        let charset = "",
            generatedPassword = "";

        const selectedOption = checkboxData.filter((checkbox:any) => checkbox.state);

        if (selectedOption.length === 0) {
            setErrorMessage("Select at least one option.");
            setPassword("");
            return;
        }

        selectedOption.forEach((option:any) => {
            switch (option.title) {
                case Passoword.Include_uppercase_letters:
                    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    break;
                case Passoword.Include_lowercase_letters:
                    charset += "abcdefghijklmnopqrstuvwxyz";
                    break;
                case Passoword.Include_numbers:
                    charset += "0123456789";
                    break;
                case Passoword.Include_symbols:
                    charset += "!@#$%^&*()";
                    break;
                default:
                    break;
            }
        });

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            generatedPassword += charset[randomIndex];
        }

        setPassword(generatedPassword);
        setErrorMessage("");
    };
    return { password, errorMessage, generatePassword };
};

export default usePasswordGenerator;