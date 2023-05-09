import DefaultLayout from "../layouts/DefaultLayout.jsx"; //explizit die Komponente importieren, nicht die ganze Datei; NavBar Variable wird heir deklariert
import ButtonLarge from "../components/ButtonLarge.jsx";

const user = {
  name: "Maxine Musterfrau",
};

function Home() {
  return (
    < DefaultLayout >
      <div>
        <h1 className="pb-6 pl-4 pt-10 text-left text-4xl font-bold text-light">
          Hi {user.name}!
        </h1>
      </div>
      <div className="flex justify-center">
        <img src="../startbild.png"></img>
      </div>

      {/* TODO if-else-Schleife bauen */}
      {/* if Programm ausgewählt, heutiges Workout mit Dauer und Art,  */}
      <div> 
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
      </div>
      {/* else Hinweis, Programm auszuwählen mit Link auf Browse Ansicht */}
      <div>
        <h3 className="text-2xl font-bold text-light">Bitte wähle ein Programm aus</h3>
        {/* TODO checken, ob der Button funktioniert */}
        <ButtonLarge>
          <p>Programm auswählen</p>
        </ButtonLarge>
      </div>
    </DefaultLayout>
  );
}

export default Home;
