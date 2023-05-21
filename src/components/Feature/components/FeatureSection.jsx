import { FeatureItem } from "./FeatureItem";
import features from "../../../data/features.json";

export const FeatureSection = () => {
    if (typeof features === "undefined" || typeof features === null || features.length === 0) {
        return <span>No hay datos para mostrar</span>;
    }
    return (
        <>
            {features.map((features, idx) =>
                <FeatureItem key={idx}
                image={features.image}
                title={features.title}
                description={features.description}
                />
            )}
        </>
    );
}
