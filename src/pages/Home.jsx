import DefaultLayout from "../layouts/DefaultLayout.jsx"; //explizit die Komponente importieren, nicht die ganze Datei; NavBar Variable wird heir deklariert
import ChooseProgram from "../components/choose-programm.jsx";
import ShowOverview from "../components/overview-workout.jsx";
import ButtonGrad1, { ButtonGrad2, ButtonGrad3 } from "../components/buttons/button-primary.jsx";

const user = {
  name: "Maxine Musterfrau",
  hasChosen: false,
};

function Home() {
  return (
    <DefaultLayout>
      <div>
        <h1 className="pb-6 pl-4 pt-10 text-left text-4xl font-bold text-light">
          Hi {user.name}!
        </h1>
      </div>
      <div className="mb-10 justify-center flex">
        <img src="../startbild.png"></img>
      </div>
      {/* Bedingung true? dann ShowOverview, else ChooseProgram */}
      {user.hasChosen ? <ShowOverview /> : <ChooseProgram />}
    </DefaultLayout>
  );
}

export default Home;
