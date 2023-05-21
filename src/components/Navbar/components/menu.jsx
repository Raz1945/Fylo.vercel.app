import { ItemMenu } from "./item";

export const Menu = () => {
    return (
        <>
            <div className="navbar-menu">
                <ul className="navbar-menu__list">
                    <li className="navbar-menu__item">
                        <ItemMenu
                            href={"#features-ref"}
                            text={"Features"}
                        />
                    </li>
                    <li className="navbar-menu__item">
                        <ItemMenu
                            href={"#team-ref"}
                            text={"Team"}
                        />
                    </li>
                    <li className="navbar-menu__item">
                        <ItemMenu
                            href={""}
                            text={"Sing In"}
                        />
                    </li>
                </ul>
            </div>
        </>
    );
};
