import { Button } from "../../Button/button";
import { useState } from "react";

export const GetInputBottom = () => {
    const verifyEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 
    const [wrong, setWrong] = useState(true);
    const [emailInpunt, setEmailInput] = useState("");


    const handleSubmit = (event) => {
        event.preventDefault();
        if (verifyEmail.test(emailInpunt)) {
            console.log('La suscripcion fue exitosa');
        }
    }

    const handleInput = (event) => {
        const valor = event.target.value;
        setEmailInput(valor);
        setWrong(false);
    };

    return (
        <>
            <form
                className="get-bottom"
                onChange={handleSubmit}
            >
                <div>
                    <input
                        type="email"
                        name="getBtn"
                        id="getBtn"
                        className={wrong ? "get-bottom__email " : "get-bottom__email error"}
                        placeholder="email@exaple.com"
                        value={emailInpunt}
                        onChange={handleInput}
                    />
                    {(wrong !== true ) &&
                        <span className="hidden">
                            Please enter a valid email address
                        </span>
                    }
                </div>
                <Button
                    className="btn-large"
                    id="getBtn"
                    text="Get Started For Free"
                />

            </form>

        </>
    );
}