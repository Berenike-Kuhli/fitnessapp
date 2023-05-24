import InputField from "../components/InputField";
import DefaultLayout from "../layouts/DefaultLayout";
import Square from "../components/Square";
import Workout from "../components/Workout";


export default function Sandbox () {
    return (
        <DefaultLayout>
            <InputField/>
            <Square/>
            <Workout/>
        </DefaultLayout>
    );
}