//TODO wie den placeholder flexibel gestalten

export default function InputField(props) {
  const placeholder = "test";
  return (
    <input
      type="text"
      placeholder={placeholder}
      // placeholder= {props.text}
      className="m-3.5 h-11 w-[19rem] rounded-xl border border-light bg-transparent py-3 pl-6 text-light"
    />
  );
}
