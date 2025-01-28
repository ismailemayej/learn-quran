import TitleText from "@/components/TitleText";
import { Services } from "./Services";
import { projects } from "./ServicesProject";

export function Ourservices() {
  return (
    <div className=" mx-auto bangla ">
      <TitleText
        text="আমাদের সার্ভিস সমূহ"
        size="2xl"
        align="center"
        gradient
      />
      <Services items={projects} />
    </div>
  );
}
