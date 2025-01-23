import TitleText from "@/components/TitleText";
import { Services } from "./Services";
import { projects } from "./ServicesProject";

export function Ourservices() {
  return (
    <div className="container mx-auto">
      <TitleText text="Our Services" size="5xl" align="center" gradient />
      <Services items={projects} />
    </div>
  );
}
