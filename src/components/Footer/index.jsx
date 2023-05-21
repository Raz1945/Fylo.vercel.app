import "./css/style.css"
import { Logo } from "./components/logoFooter";
import { Item } from "./components/itemFooter";
import { LitaDeEnlaces } from "./components/listasDeEnlaceFooter";
import { Redes } from "./components/redesFooter";

export const Footer = () => (
    <>
        <footer className="footer__conteiner">
            <Logo />
            <div className="footer__bottom">
                <div className="footer__box-01">
                    <Item
                        src="src/assets/icons/icon-location.svg"
                        alt="Icono de Ubicacion"
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Deleniti quos similique nam commodi voluptatum"
                    />
                </div>
                <div className="footer__box-02">
                    <Item
                        src="src/assets/icons/icon-phone.svg"
                        alt="Icono de telefono"
                        text="+1-543-123-4567"
                    />
                    <Item
                        src="src/assets/icons/icon-email.svg"
                        alt="Icono de email"
                        text="example@fylo.com"
                    />
                </div>
                <div className="footer__box-03">
                    <LitaDeEnlaces/>
                </div>
                <div className="footer__box-04">
                    <Redes/>
                </div>
            </div>
        </footer>
    </>
)