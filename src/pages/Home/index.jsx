import { useEffect } from "react";
import { gql, useQuery, useLazyQuery } from "@apollo/client";

import DefaultLayout from "../../layouts/DefaultLayout"; // explizit die Komponente importieren, nicht die ganze Datei
import ChooseProgram from "../../components/ChooseProgram";
import ShowOverview from "../../components/ShowOverview";
import Startbild from "./startbild.png";
import NavBar from "../../components/navbar/index";

const GET_USER = gql`
  query GetUser {
    appUsers(first: 1) {
      name
      programId
    }
  }
`;

const GET_PROGRAM = gql`
  query GetProgram($id: ID!) {
    program(where: { id: $id }) {
      id
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

//content type user, profile in hygraph; holen, Daten abfragen

function Home() {
  const {
    loading: userLoading,
    error: userError,
    data: userData,
  } = useQuery(GET_USER);
  const [
    fetchProgram,
    { loading: programloading, error: programError, data: programData },
  ] = useLazyQuery(GET_PROGRAM);

  useEffect(() => {
    if (userData) {
      fetchProgram({ variables: { id: userData.appUsers[0].programId } });
    }
  }, [userData]);

  if (userLoading || programloading || !programData) return null;
  if (userError || programError) return `Error!`;
  const appUser = userData.appUsers[0];
  console.log(programData);
  const { program } = programData;

  return (
    <DefaultLayout>
      <div>
        <h1 className="pb-6 pl-4 pt-10 text-left text-4xl font-bold text-light">
          Hi {appUser.name}!
        </h1>
      </div>
      <div className="mb-10 flex justify-center">
        <img src={Startbild}></img>
      </div>
      {/* Bedingung true? dann ShowOverview, else ChooseProgram */}
      {appUser.programId ? (
        <ShowOverview program={program} />
      ) : (
        <ChooseProgram />
      )}
      <NavBar />
    </DefaultLayout>
  );
}

export default Home;
