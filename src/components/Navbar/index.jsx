import { Logo } from "./components/logo";
import { Menu } from "./components/menu";
import "./css/style.css";

export const Navbar = () => {
    return (
        <>
            <nav className="navbar" id="navbar-ref">
                <Logo />
                <Menu />
            </nav>
        </>
    )
}