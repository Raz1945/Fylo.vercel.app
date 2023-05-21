export const Avatar = ({ quote, image, name, title }) => {
    return (
        <>
            <section className="testimonials-item">
                <p className="testimonials-text">{quote}</p>
                <div className="testimonials-avatar">
                    <img className="testimonials-avatar__img" src={image} alt={name} />
                    <div className="testimonials-avatar__text">
                        <h2 className="testimonials-avatar__h2">{name}</h2>
                        <p className="testimonials-avatar__p">{title}</p>
                    </div>
                </div>
            </section>
        </>

    )
};