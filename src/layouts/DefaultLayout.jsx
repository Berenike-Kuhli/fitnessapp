
// das className gebe ich mit (und rufe es mit ${} auf, um zusätzlich zu den definierten Sachen noch eigene beim Aufruf der Component mitgeben zu können)

function DefaultLayout({ children, className }) {
  return (
    <div className={`w-100 ${className} flex min-h-screen flex-col bg-dark text-light`}>
      {children}
    </div>
  );
}

export default DefaultLayout;
