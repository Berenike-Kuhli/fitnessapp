import InputField from "../components/InputField";
import DefaultLayout from "../layouts/DefaultLayout";
import Square from "../components/Square";
import Workout from "../components/Workout";
import ButtonGradient from "../components/buttons/ButtonPrimary";
import { ButtonSolid } from "../components/buttons/ButtonPrimary";


export default function Sandbox () {
    return (
        <DefaultLayout>
            <InputField placeholder={"Test4"}/>
            <Square bg="grad2"/>
            <Workout bg="grad1"/>
            <ButtonGradient bg="grad3">Test</ButtonGradient>
            <ButtonSolid bg="light"></ButtonSolid>
        </DefaultLayout>
        
    );
}