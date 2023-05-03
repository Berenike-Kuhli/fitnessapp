import "./App.css";
import "./NavBar.jsx";

const user = {
  name: "Maxine Musterfrau",
};

function App() {

  return (
    <div className="App h-content w-100 bg-dark">
      <div>
        <h1 className="pb-6 pl-4 pt-10 text-left text-4xl font-bold text-light">
          Hi {user.name}!
        </h1>
      </div>
      <div className="flex justify-center">
        <img src="../startbild.png"></img>
      </div>
      <div className="flex items-baseline justify-between pt-10">
        <h3 className="pl-4 text-2xl font-bold text-light">
          Dein Workout heute
        </h3>
        <label className="pr-4 text-left text-xs font-normal text-light">
          Trainingsplan
        </label>
      </div>

      <div className="m-5 h-56 flex-col rounded-3xl bg-medium px-4 pb-8 pt-24 text-left">
        <h3 className="text-2xl font-bold text-light">Tag 2</h3>
        <h2 className="text-3xl font-bold text-light">Titel des Programms</h2>
        <div className="h-56">
          <label className="text-xs font-normal text-light">26 Min.</label>
          <label className="text-xs font-normal text-light"> &middot; </label>
          <label className="text-xs font-normal text-light">
            Beweglichkeit
          </label>
        </div>
      </div>
      {/* <NavBar /> */}
    </div>
  );
}

export default App;
