import { gql, useQuery } from "@apollo/client";

// query anpassen, um Felder aus der DB zu ziehen

const GET_WORKOUTS = gql`
  query GetWorkouts {
    program {
      name
      duration
      category
    }
  }`;

export default function Workout({bg="grad1"}) {
  const bgStyles = {
    grad1: "from-g1a to-g1b",
    grad2: " from-g2a to-g2b",
    grad3: "from-g3d from-[21.35%] via-g3c via-[74.35%] to-g3b to-[92.71%]",
  };

  const { loading, error, data } = useQuery(GET_WORKOUTS);
  
  if (loading) return null;
  if (error) return `Error! ${error}`;
  return (
    <div className="m-3.5 flex h-24 w-88 rounded-[20px] bg-medium">
      <div className={` h-24 w-24 rounded-l-[20px] bg-gradient-to-br ${bgStyles[bg]}`}></div>
      <div className="p-3.5">
        <h1 className="mb-3.5 text-lg font-bold text-light">Tag 1</h1>
        <p className="text-xs text-light">26 Min. &middot;</p>
        <p className="text-xs text-light">Beweglichkeit</p>
      </div>
    </div>
  );
}
