import Workout from "../components/Workout";
import DefaultLayout from "../layouts/DefaultLayout";
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
        <section>
          {/* X close */}
          <h1 className="text-4xl font-bold text-center">{data.programs[0].name}</h1>
          <section>
            {/* Ellipsen */}
            <article>
              <p>{data.programs[0].focus}</p>
            </article>
            <article>
              <p>{data.programs[0].difficulty}</p>
            </article>
            <article>
              <p>{data.programs[0].duration}</p>
            </article>
          </section>
        </section>
      <section className="text-light bg-medium p-3.5">
          {data.programs[0].description}
      </section>
          <section>
          <h3 className="font-bold text-lg">So ist das Programm aufgeteilt</h3>
          {/* Tortendiagramm kommt später */}
          <ul><li>Krafttraining</li>
          <li>Koordination</li>
          <li>Cardio</li>
          <li>Beweglichkeit</li></ul>
        </section>
        <section>
          <Workout className="grad1" />
        </section>
</DefaultLayout>
    );
}