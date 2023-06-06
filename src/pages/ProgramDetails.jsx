import Workout from "../components/Workout";
import DefaultLayout from "../layouts/DefaultLayout";
import Ellipse from "../components/ellipsen";
import { gql, useQuery } from "@apollo/client";

const GET_DETAILS = gql`
  query GetDetails {
    programs {
      name
      description
      focus
      difficulty
      duration
    }
  }`;

export default function ProgramDetails() {

  
    const { loading, error, data } = useQuery(GET_DETAILS);
  
    if (loading) return null;
    if (error) return `Error! ${error}`;
    return (
      <DefaultLayout>
        <section className="bg-gradient-to-br from-g1a to-g1b h-[540px] flex flex-col ">
          {/* X close */}
          <h1 className="text-4xl font-bold text-center justify-self-center self-center">{data.programs[0].name}</h1>
          <section className="flex-row flex justify-around">
            <article>
              <Ellipse bg="medium" as="medium"/> 
              <p>{data.programs[0].focus}</p>
            </article>
            <article>
            <Ellipse bg="medium" as="medium"/> 
              <p>{data.programs[0].difficulty}</p>
            </article>
            <article>
            <Ellipse bg="medium" as="medium"/> 
              <p>{data.programs[0].duration} Minuten</p>
            </article>
          </section>
        </section>
      <section className="bg-medium p-3.5">
          {data.programs[0].description}
      </section>
          <section>
          <h3 className="font-bold text-lg m-3.5">So ist das Programm aufgeteilt:</h3>
          
          {/* Tortendiagramm kommt später */}
          <Ellipse bg="medium" as="large"/>
          <ul className="text-xs"><li className="flex-row flex items-center"><Ellipse bg="medium" as="small"/>Krafttraining</li>
          <li className="flex-row flex items-center"><Ellipse bg="medium" as="small"/>Koordination</li>
          <li className="flex-row flex items-center"><Ellipse bg="medium" as="small"/>Cardio</li>
          <li className="flex-row flex items-center"><Ellipse bg="medium" as="small"/>Beweglichkeit</li></ul>
        </section>
        <section className="pb-28">
         <article  className="flex flex-row justify-between items-center">
          <h2 className="font-bold m-3.5">{data.programs[0].duration} Tage</h2>
          <p className="text-xs m-3.5">Alle anzeigen</p>
          </article>
          {/*  for each workout in data.programs[0].workout show  */}
          <Workout className="grad1" />
        </section>

   
     

</DefaultLayout>
    );
}