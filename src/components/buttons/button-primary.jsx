// Buttons mit den drei Gradients

export default function ButtonGrad1({ children}) {
    return (
        <button className="bg-gradient-to-br from-g1a to-g1b rounded-3xl w-56 h-11 m-10 ${className}">
            { children }
        </button>
    );
}



export function ButtonGrad2({ children}) {
    return (
        <button className="bg-gradient-to-br from-g2a to-g2b rounded-3xl w-56 h-11 m-10 ${className}">
            { children }
        </button>
    );
}

export function ButtonGrad3({ children}) {
    return (
        <button className="bg-gradient-to-br from-g3d from-0% via-g3c via-[21.35%] to-g3b to-[92.71%] rounded-3xl w-56 h-11 m-10 ${className}">
            { children }
        </button>
    );
}