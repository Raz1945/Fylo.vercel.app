import "./css/style.css"
export const Productive = () => {
    return (
        <>
            <main className="productive-wrapper" id="team-ref">
                <div className="productive-container__left">
                    <img src="src/assets/images/illustration-stay-productive.png" alt="Imagen" className="productive__img" />
                </div>
                <div className="productive-container__right">
                    <h1 className="productive__title">Stay productive, wherever you are</h1>
                    <p className="productive__text">
                        Never let location be an issue when accessing your files.
                        Fylo has you covered for all of your file storage needs.
                    </p>
                    <p className="productive__text">
                        Securely share files and folders with friends, family and colleagues for live
                        collaboration. No email attachments required.
                    </p>
                    <span className="productive__link">
                        <a className="productive__link-a" href="#">
                            See how Fylo works
                        <i className="fa-solid fa-circle-right productive__icon"></i>
                        </a>
                    </span>
                </div>
            </main>

        </>
    );
};