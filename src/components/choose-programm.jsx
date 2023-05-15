import ButtonLarge from "./button-large"

function ChooseProgram () {
return (
<div>
        <h3 className="text-2xl font-bold text-light">Bitte wähle ein Programm aus</h3>
        {/* TODO Button mit BrowseProgram verbinden */}
        <ButtonLarge>
        <p>Programm auswählen</p>
        </ButtonLarge>
      </div>);
}

export default ChooseProgram;