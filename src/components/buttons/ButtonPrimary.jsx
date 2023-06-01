// Button mit den drei Gradients und Solids

export default function ButtonPrimary({
  children,
  className,
  bg = "grad1",
  as = "button",
  href,
}) {
  const bgStyles = {
    grad1: "from-g1a to-g1b bg-gradient-to-br",
    grad2: " from-g2a to-g2b bg-gradient-to-br",
    grad3:
      "from-g3d from-[21.35%] via-g3c via-[74.35%] to-g3b to-[92.71%] bg-gradient-to-br",
    light: "bg-light",
    medium: "bg-medium",
  };
  const buttonStyle = `${className} flex justify-center items-center m-3.5 h-11 w-56 rounded-3xl ${bgStyles[bg]}`;

  if (as === "button") {
    return (<button className={buttonStyle}>
      {children}
      </button>
    );
  }
  if (as === "a") {
    return (
      <a href={href} className={buttonStyle}>
        {children}
      </a>
    );
  }
}
