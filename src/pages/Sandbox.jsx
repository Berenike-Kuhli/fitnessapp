import InputField from "../components/InputField";
import DefaultLayout from "../layouts/DefaultLayout";
import Square from "../components/Square";
import Workout from "../components/Workout";
import ButtonPrimary from "../components/buttons/ButtonPrimary";


export default function Sandbox () {
    return (
        <DefaultLayout>
            <InputField placeholder={"Test4"}/>
            <Square/>
            <Workout/>
            <ButtonPrimary bg="grad2">Test</ButtonPrimary>
        </DefaultLayout>
        
    );
}