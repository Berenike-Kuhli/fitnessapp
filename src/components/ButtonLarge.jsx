// TODO restliches Buttonstyling

function ButtonLarge({ children, className }) {
    return (
        <div className="bg-light w-56 h-11 ${className}">
            { children }
        </div>
    );
}

export default ButtonLarge;