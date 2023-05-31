// Square mit Gradients

export default function Square({className, bg = "grad1" }) {
  const bgStyles = {
    grad1: "from-g1a to-g1b",
    grad2: "from-g2a to-g2b",
    grad3: "from-g3d from-[21.35%] via-g3c via-[74.35%] to-g3b to-[92.71%]",
  };
  return (
  <div className={`${className} m-3.5 h-28 w-28 rounded-[30px] bg-gradient-to-br ${bgStyles[bg]}`}
    ></div>
  );
}