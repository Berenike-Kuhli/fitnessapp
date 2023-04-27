import "./App.css";

function App() {
  return (
    <div className="App h-screen bg-dark">
      <div>
        <h1 className="text-4xl font-bold text-light">Hi Name!</h1>
        <img src="../startbild.png"></img>
        <h3 className="text-2xl font-bold text-light">Dein Workout heute</h3>
        <label className="text-xs font-normal text-light">Trainingsplan</label>
      </div>
      <div classname="bg-medium">
        <h3 className="text-2xl font-bold text-light">Tag 2</h3>
        <h2 className="text-3xl font-bold text-light">Titel des Programms</h2>
        <label className="text-xs font-normal text-light">26 Min.</label>
        <label className="text-xs font-normal text-light"> &middot; </label>
        <label className="text-xs font-normal text-light">Beweglichkeit</label>
      </div>
      <nav>
        <img src="./icon-house.svg"></img>
        <img src="./icon-dumbbell.svg"></img>
        <img src="./icon-avatar.svg"></img>
      </nav>
    </div>
  );
}

export default App;
