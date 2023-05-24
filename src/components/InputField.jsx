//TODO wie den placeholder flexibel gestalten

export default function InputField (props) {
    const placeholder = "test"
    return(
        <input type="text" 
        placeholder={placeholder} 
        // placeholder= {props.text} 
        className="rounded-xl h-11 w-[19rem] border border-light bg-transparent text-light py-3 pl-6"/>
    );
}