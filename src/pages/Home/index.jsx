import DefaultLayout from "../../layouts/DefaultLayout"; // explizit die Komponente importieren, nicht die ganze Datei
import ChooseProgram from "../../components/ChooseProgram";
import ShowOverview from "../../components/ShowOverview";
import Startbild from "./startbild.png";
import NavBar from "../../components/navbar/index";

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
      <div className="mb-10 flex justify-center">
        <img src={Startbild}></img>
      </div>
      {/* Bedingung true? dann ShowOverview, else ChooseProgram */}
      {user.hasChosen ? <ShowOverview /> : <ChooseProgram />}
      <NavBar />
    </DefaultLayout>
  );
}

export default Home;
