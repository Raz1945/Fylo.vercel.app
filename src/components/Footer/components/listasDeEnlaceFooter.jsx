import { Enlace } from "./enlaceFooter.jsx";

export const LitaDeEnlaces = () => {
    return (
        <>
            <div className="footer__box-03left">
                <ul className="footer__links-group">
                    <Enlace text="About Us" />
                    <Enlace text="Jobs" />
                    <Enlace text="Press" />
                    <Enlace text="Blog" />
                </ul>
            </div>
            <div className="footer__box-03rigth">
                <ul className="footer__links-group">
                    <Enlace text="Contact Us" />
                    <Enlace text="Terms" />
                    <Enlace text="Privacy" />
                </ul>
            </div>
        </>
    );
}
