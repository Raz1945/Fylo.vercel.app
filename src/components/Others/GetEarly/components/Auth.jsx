import { Button } from "../../Button/button";
import { useState } from "react";

export const Auth = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const [isValid, setIsValid] = useState(false);
    const [emailInput, setEmailInput] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!emailRegex.test(emailInput)) {
            setIsValid(true);
            return;
        }
        console.log("La suscripcion fue exitosa");
    };

    const handleInput = (event) => {
        const value = event.target.value;
        setEmailInput(value);
        setIsValid(!emailRegex.test(value));
    };

    return (
        <form className="get-bottom" onSubmit={handleSubmit}>
            <div className="get-bottom__group">
                <input
                    type="email"
                    name="getBtn"
                    id="getBtn"
                    className={`get-bottom__email ${isValid ? "error" : ""}`}
                    placeholder="email@example.com"
                    value={emailInput}
                    onChange={handleInput}
                />
                {isValid && (
                    <span className="get-bottom__email-error">
                        Please enter a valid email address
                    </span>
                )}
            </div>
            <Button
                className="btn-large"
                id="getBtn"
                text="Get Started For Free"
                type="submit"
            />
        </form>
    );
};