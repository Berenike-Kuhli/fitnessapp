import ButtonPrimary from "./buttons/button-primary"

// TODO zentrieren

function ChooseProgram () {
return (
<div className="justify-center">
        <h3 className="mt-10 text-2xl font-bold text-light mb-10">Bitte wähle ein Programm aus</h3>
        {/* TODO Button mit BrowseProgram verbinden */}
        <ButtonPrimary>
        <p>Alle Programme</p>
        </ButtonPrimary>
      </div>);
}

export default ChooseProgram;