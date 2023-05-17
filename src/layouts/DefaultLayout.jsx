import NavBar from "../components/NavBar";

function DefaultLayout({ children, className }) {
  return (
    <div className={`w-100 ${className} flex min-h-screen flex-col bg-dark`}>
      {children}
      <NavBar />
    </div>
  );
}

export default DefaultLayout;
