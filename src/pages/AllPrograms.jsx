import DefaultLayout from "../layouts/DefaultLayout";
import ProgramMedium from "../components/ProgramRectangles";
import { gql, useQuery } from "@apollo/client";

// TODO Es werden nicht alle Programme direkt geladen. Entweder baut ihr ein endless scrolling wo ab einer bestimmten Scrollposition neue Programme geladen werden oder einen "weitere laden" Button unter den jeweils schon angezeigten Programmen

// TODO get this working
const GET_PROGRAMS = gql`
  query GetPrograms {
    programs {
      name
    }
  }`;

  function Programs({ GetPrograms }) {
    const { loading, error, data } = useQuery(query);
  
    if (loading) return null;
    if (error) return `Error! ${error}`;
  
    return <pre>{JSON.stringify(data, null, 2)}</pre>;
  }


export default function AllPrograms() {
  return (
    <DefaultLayout>
      <h2 className="py-14 pl-4 text-left text-3xl font-bold text-light">
        Browse
      </h2>
      {/* TODO make gradients alternate */}
      <ProgramMedium>
        {/* TODO add data from GraphQL */}
        <p>Test</p>
      </ProgramMedium>
      <ProgramMedium />
      <ProgramMedium />
    </DefaultLayout>
  );
}
