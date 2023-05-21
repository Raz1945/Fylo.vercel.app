import { Avatar } from "./TestimonialsAvatar";
import testimonials from "../../../data/testimonials.json"

export const Profile = () => {
    if (typeof testimonials === "undefined" || typeof testimonials === null || testimonials.length === 0) {
        return <span>No hay datos para mostrar</span>;
    }
    return (
        <>
            {testimonials.map((testimonials, idx) =>
                <Avatar
                    key={idx}
                    quote={testimonials.quote}
                    image={testimonials.image}
                    name={testimonials.name}
                    title={testimonials.title}
                />
            )}
        </>
    );

}