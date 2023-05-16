// Buttons u. a. mit den drei Gradients

export default function ButtonGrad1({ children }) {
  return (
    <button className="${className} m-10 h-11 w-56 rounded-3xl bg-gradient-to-br from-g1a to-g1b">
      {children}
    </button>
  );
}

export function ButtonGrad2({ children }) {
  return (
    <button className="${className} m-10 h-11 w-56 rounded-3xl bg-gradient-to-br from-g2a to-g2b">
      {children}
    </button>
  );
}

export function ButtonGrad3({ children }) {
  return (
    <button className="${className} m-10 h-11 w-56 rounded-3xl bg-gradient-to-br from-g3d from-0% via-g3c via-[21.35%] to-g3b to-[92.71%]">
      {children}
    </button>
  );
}

export function ButtonLight({ children }) {
    return (
      <button className="${className} m-10 h-11 w-56 rounded-3xl bg-light">
        {children}
      </button>
    );
  }
