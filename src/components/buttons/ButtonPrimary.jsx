// Buttons mit den drei Gradients und Solids

export default function ButtonGradient({ children, className, bg = "grad1" }) {
  const bgStyles = {
    grad1: "from-g1a to-g1b",
    grad2: " from-g2a to-g2b",
    grad3: "from-g3d from-[21.35%] via-g3c via-[74.35%] to-g3b to-[92.71%]",
  };

  return (
    <button
      className={`${className} m-3.5 h-11 w-56 rounded-3xl bg-gradient-to-br ${bgStyles[bg]}`}
    >{children}
    </button>
  );
}

export function ButtonSolid({ children, className, bg = "light" }) {
  const bgStyles = {
   light: "light",
    medium: "medium",
  };

  return (
    <button
      className={`${className} m-3.5 h-11 w-56 rounded-3xl bg-${bgStyles[bg]}`}
    >
      {children}
    </button>
  );
}
