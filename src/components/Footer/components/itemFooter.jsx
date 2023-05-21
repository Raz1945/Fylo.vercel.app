export const Item = ({ src, alt = "", text = "" }) => {
    return (
        <>
            <div className="footer__bottom_box">
                <img className="footer__bottom-img" src={src} alt={alt} />
                <p className="footer__bottom-text">{text}</p>
            </div>
        </>
    );
}
