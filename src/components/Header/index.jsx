import { HeaderImg } from "./components/imgHeader";
import { HeaderTitle } from "./components/ttitleHeader";
import { HeaderSubTitle } from "./components/subtitleHeader";
import { Button } from "../Others/Button/button";
import './css/style.css'

export const Header = () => {
    return (
        <>
            <header className="header header-img">
                <div className="header__wrapper">
                    <HeaderImg />
                    <HeaderTitle />
                    <HeaderSubTitle />
                    <div className="header-btn">
                        <Button
                            text="Get Started"
                        />
                    </div>
                </div>
            </header>
        </>
    );
}