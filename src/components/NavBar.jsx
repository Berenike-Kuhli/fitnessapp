// import "./App.css";

function NavBar() {
  return (
    <nav>
      <ul className="h-13 flex list-none justify-between rounded-t-3xl bg-black px-12 py-3.5">
        <li>
          <img src="./icon-house.svg"></img>
        </li>
        <li>
          <img src="./icon-dumbbell.svg"></img>
        </li>
        <li>
          <img src="./icon-avatar.svg"></img>
        </li>
      </ul>
    </nav>
  );
}

// jede Komponente braucht Export! sonst wirds schwierig^^
export default NavBar