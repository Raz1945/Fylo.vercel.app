import { Auth } from "./components/Auth";
import "./css/style.css"

export const GetEarly = () => {
    return (
        <>
            <div className="get-wrapped">
                <div className="get-top">
                    <h1 className="get-top__title">Get early access today</h1>
                    <p className="get-top__paragraph">
                        It only takes a minute to sing up and pur free startet tier extremely generous.
                        If you have any questions, our support team would be happy to help you.
                    </p>
                </div>
                <Auth />
            </div>
        </>
    );
}