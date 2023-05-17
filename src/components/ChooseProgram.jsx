import Button from "./buttons/ButtonPrimary";

// TODO zentrieren

function ChooseProgram() {
  return (
    <div className="flex flex-col items-center">
      <h3 className="mb-11 text-2xl font-bold text-light">
        Bitte wähle ein Programm aus
      </h3>
      {/* TODO Button mit BrowseProgram verbinden */}
      <Button bg="grad2">Alle Programme</Button>
    </div>
  );
}

export default ChooseProgram;
