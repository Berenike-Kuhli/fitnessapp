import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import Workout from "../components/Workout";
import DefaultLayout from "../layouts/DefaultLayout";
import Ellipse from "../components/ellipsen";

const GET_DETAILS = gql`
  query GetDetails($id: ID!) {
    program(where: { id: $id }) {
      name
      description
      focus
      difficulty
      duration
      workouts(first: 3) {
        name
      }
    }
  }
`;

export default function ProgramDetails() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_DETAILS, { variables: { id } });

  if (loading) return null;
  if (error) return `Error! ${error}`;
  const { program } = data;
  return (
    <DefaultLayout>
      <section className="relative flex h-[30vh] flex-col items-center justify-center bg-gradient-to-br from-g1a to-g1b">
        {/* X close */}
        <h1 className="text-center text-4xl font-bold">{program.name}</h1>
        {/* justify-around braucht Weiten-Angabe! 
        nochmal Hero Rustica angucken */}
        <section className="absolute bottom-4 flex w-screen flex-row content-end justify-around">
          <article className="flex flex-col items-center">
            <Ellipse bg="medium" as="medium" />
            <p>{program.focus}</p>
          </article>
          <article className="flex flex-col items-center">
            <Ellipse bg="medium" as="medium" />
            <p>{program.difficulty}</p>
          </article>
          <article className="flex flex-col items-center">
            <Ellipse bg="medium" as="medium" />
            <p>{program.duration} Minuten</p>
          </article>
        </section>
      </section>

      <section className="bg-medium p-3.5">{program.description}</section>

      <section>
        <h3 className="m-3.5 text-lg font-bold">
          So ist das Programm aufgeteilt:
        </h3>

        <article className="mb-16 flex">
          {/* Tortendiagramm kommt später */}
          {/* TODO Abstände zwischen der Aufzählung optimieren (kleiner, enger) */}
          <Ellipse bg="medium" as="large" />
          <ul className="text-xs">
            <li className="flex flex-row items-center">
              <Ellipse bg="medium" as="small" />
              Krafttraining
            </li>
            <li className="flex flex-row items-center">
              <Ellipse bg="medium" as="small" />
              Koordination
            </li>
            <li className="flex flex-row items-center">
              <Ellipse bg="medium" as="small" />
              Cardio
            </li>
            <li className="flex flex-row items-center">
              <Ellipse bg="medium" as="small" />
              Beweglichkeit
            </li>
          </ul>
        </article>
      </section>

      <section className="pb-28">
        <article className="flex flex-row items-center justify-between">
          <h2 className="m-3.5 font-bold">{program.duration} Tage</h2>
          <p className="m-3.5 text-xs">Alle anzeigen</p>
        </article>
        {/*  for each workout in data.programs[0].workout show 
        wie die einzelnen Workouts eines Programmes ansprechen, programm ausgewählt anderswo */}
        <Workout className="grad1" />
        <Workout />
        <Workout />
      </section>
    </DefaultLayout>
  );
}
