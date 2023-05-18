import DefaultLayout from "../layouts/DefaultLayout";
import ProgramMedium from "../components/ProgramRectangles";

export default function AllPrograms() {
  return (
    <DefaultLayout>
      <h2 className="py-14 pl-4 text-left text-3xl font-bold text-light">
        Browse
      </h2>
      {/* TODO make gradients alternate */}
      <ProgramMedium><p>Test</p></ProgramMedium>
      <ProgramMedium/>
      <ProgramMedium/>
    </DefaultLayout>
  );
}
