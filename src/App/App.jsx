import "./App.css";

function App() {
  return (
    <div className="App h-content w-[28rem] bg-dark">
      <div>
        <h1 className="text-left text-4xl font-bold text-light pt-10 pl-4 pb-6">Hi Name!</h1>
        </div>
        <div className="flex justify-center">
        <img src="../startbild.png"></img></div>
        <div className="flex justify-between items-baseline pt-10">
          <h3 className="text-2xl font-bold text-light pl-4">Dein Workout heute</h3>
          <label className="text-xs font-normal text-light text-left pr-4">
            Trainingsplan
          </label>
        </div>
      
      <div className="flex-col rounded-3xl m-5 h-56 bg-medium px-4 pb-8 pt-24 text-left">
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
      <nav className="flex rounded-t-3xl h-13 justify-between bg-black px-12 py-3.5">
        <img src="./icon-house.svg"></img>
        <img src="./icon-dumbbell.svg"></img>
        <img src="./icon-avatar.svg"></img>
      </nav>
    </div>
  );
}

export default App;
