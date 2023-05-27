import DefaultLayout from "../layouts/DefaultLayout";
import ProgramMedium from "../components/ProgramRectangles";
import { gql, useQuery } from "@apollo/client";

// TODO Es werden nicht alle Programme direkt geladen. Entweder baut ihr ein endless scrolling wo ab einer bestimmten Scrollposition neue Programme geladen werden oder einen "weitere laden" Button unter den jeweils schon angezeigten Programmen

const GET_PROGRAMS = gql`
  query GetPrograms {
    programs {
      name
    }
  }`;


export default function AllPrograms() {
  const { loading, error, data } = useQuery(GET_PROGRAMS);
  
  if (loading) return null;
  if (error) return `Error! ${error}`;
  

  return (
    <DefaultLayout>
      <h2 className="py-14 pl-4 text-left text-3xl font-bold text-light">
        Browse
      </h2>
      {/* TODO make gradients alternate */}
      {/* TODO geht all the programs without hardcoding it here */}
      <ProgramMedium>
        <p>{data.programs[0].name}</p>
      </ProgramMedium>
      <ProgramMedium />
      <ProgramMedium />
    </DefaultLayout>
  );
}
