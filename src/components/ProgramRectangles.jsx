// import { ButtonPrimary } from "./buttons/ButtonPrimary";



// export default function ProgramLarge({className}) {
//     const bgStyles = {
//         grad1: "from-g1a to-g1b",
//         grad2: " from-g2a to-g2b",
//         grad3: "from-g3d from-[21.35%] via-g3c via-[74.35%] to-g3b to-[92.71%]",
//       };
//    return (
// <div>
//     <p>Vorschau</p>
// <ButtonPrimary className="bg-light"><p>Programm auswählen</p></ButtonPrimary>
// </div>
//  );   
// }


export default function ProgramMedium({ children, className, bg = "grad1"}) {
    const bgStyles = {
        grad1: "from-g1a to-g1b",
        grad2: " from-g2a to-g2b",
        grad3: "from-g3d from-[21.35%] via-g3c via-[74.35%] to-g3b to-[92.71%]",
      };
return (
    <div className={`${className} rounded-3xl mx-5 mb-5 h-56 flex-col px-4 pt-24 text-left bg-gradient-to-br ${bgStyles[bg]}`}>
        <h2 className="text-3xl font-bold text-light text-center">
            {children}
        </h2>
    </div>
);
}