export const Enlace = ({text, href="#"}) => {
    return (
        <>
            <li><a className="footer__link" href={href}>{text}</a></li>
        </>
    );
}
