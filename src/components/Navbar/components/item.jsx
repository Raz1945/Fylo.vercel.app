export const ItemMenu = ({ href, text }) => {
    return (
        <>
            <a
                className="navbar-menu__link"
                aria-current="page"
                // page: indica la página actual dentro de un conjunto
                // https://a11y-guidelines.orange.com/en/articles/using-aria-current-attribute/
                href={href}
            >
                {text}
            </a>
        </>
    );
}
