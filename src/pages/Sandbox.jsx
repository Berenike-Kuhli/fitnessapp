import InputField from "../components/InputField";
import DefaultLayout from "../layouts/DefaultLayout";
import Square from "../components/Square";
import Workout from "../components/Workout";
import ButtonPrimary from "../components/buttons/ButtonPrimary";
import Ellipse from "../components/ellipsen";



export default function Sandbox () {
    return (
        <DefaultLayout>
            <InputField placeholder={"Test4"}/>
            <Square bg="grad2"/>
            <Workout bg="grad1"/>
            <ButtonPrimary bg="grad3" as="a" href="/">Test</ButtonPrimary>
            <ButtonPrimary bg="light" as="button" className="text-dark">Test2</ButtonPrimary>
            <Ellipse bg="medium" as="small"></Ellipse>
            <Ellipse bg="grad2" as="medium"></Ellipse>
        </DefaultLayout>
        
    );
}