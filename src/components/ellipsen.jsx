// Ellipse mit verschiedenen Größen

export default function Ellipse({
    className,
    bg = "medium",
    as = "small, medium",
  }) {
    const bgStyles = {
      grad1: "from-g1a to-g1b bg-gradient-to-br",
      grad2: " from-g2a to-g2b bg-gradient-to-br",
      grad3:
        "from-g3d from-[21.35%] via-g3c via-[74.35%] to-g3b to-[92.71%] bg-gradient-to-br",
      light: "bg-light",
      medium: "bg-medium",
    };
    const style = `${className} flex justify-center items-center m-3.5 rounded-full ${bgStyles[bg]}`;
  
    if (as === "small") {
      return (<div className={`${style} h-3.5 w-3.5`} >
        </div>
      );
    }
    if (as === "medium") {
      return (
        <div className={`${style} h-6 w-6`}>
        </div>
      );
    }
    if (as === "large") {
      return (
        <div className={`${style} h-36 w-36`}>
        </div>
      );
    }
  }
  