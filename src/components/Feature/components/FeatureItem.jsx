export const FeatureItem = ({ image, title, description }) => {

    return (
        <>
            <section className="service__item">
                <img
                    src={image}
                    alt="icono"
                    className="service__img"
                />
                <div className="service__text">
                    <h3 className="service__title">
                        {title}
                    </h3>
                    <span className="service__description">
                        {description}
                    </span>
                </div>
            </section>
        </>
    );
}
