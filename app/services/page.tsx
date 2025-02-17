import TitleText from "@/components/TitleText";
import { AllServices } from "./Ourservices";
import { projects } from "@/components/ui/services/ServicesProject";

export default function PricingPage() {
  return (
    <div>
      <TitleText
        text="আমাদের সার্ভিস সমূহ"
        size="2xl"
        align="center"
        gradient
      />
      <AllServices items={projects} />
    </div>
  );
}
