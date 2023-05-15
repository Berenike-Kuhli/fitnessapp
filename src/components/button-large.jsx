// TODO restliches Buttonstyling

function ButtonLarge({ children, className }) {
    return (
        <button className="bg-light w-56 h-11 ${className}">
            { children }
        </button>
    );
}

export default ButtonLarge;