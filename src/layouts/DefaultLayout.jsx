import NavBar from "../components/navBar/NavBar";

function DefaultLayout({ children, className }) {
    return (
        <div className="bg-dark h-auto w-100 ${className}">
            { children }
            <NavBar/>
        </div>
    );
}

export default DefaultLayout;