import ButtonPrimary from "./buttons/ButtonPrimary";

function ChooseProgram() {
  return (
    <div className="flex flex-col items-center">
      <h3 className="mb-11 text-2xl font-bold text-light">
        Bitte wähle ein Programm aus
      </h3>
      <ButtonPrimary bg="grad2"><a href="/programs">Alle Programme</a></ButtonPrimary>
    </div>
  );
}

export default ChooseProgram;
