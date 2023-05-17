import iconAvatar from "./icon-avatar.svg";
import iconDumbbell from "./icon-dumbbell.svg";
import iconHouse from "./icon-house.svg";

function NavBar() {
  return (
    <nav className="fixed bottom-0 w-full">
      <ul className="h-13 flex list-none justify-between rounded-t-3xl bg-black px-12 py-3.5">
        <li>
          <img src={iconHouse}></img>
        </li>
        <li>
          <img src={iconDumbbell}></img>
        </li>
        <li>
          <img src={iconAvatar}></img>
        </li>
      </ul>
    </nav>
  );
}

// jede Komponente braucht Export! sonst wirds schwierig^^
export default NavBar;
