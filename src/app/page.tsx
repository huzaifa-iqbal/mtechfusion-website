import Hero from "@/components/home/Hero";
import TrustedBy from "@/components/home/TrustedBy";
import Capabilities from "@/components/home/Capabilities";
import InnovationShowcase from "@/components/home/InnovationShowcase";
import TechnologyPartner from "@/components/home/TechnologyPartner";
import WhyTechFusion from "@/components/home/WhyTechFusion";
import Solutions from "@/components/home/Solutions";
import Process from "@/components/home/Process";
import CareersCTA from "@/components/home/CareersCTA";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#f7f7f4]">
      <Hero />
      <TrustedBy />
      <Capabilities />
      <InnovationShowcase />
      <TechnologyPartner />
      <WhyTechFusion />
      <Solutions />
      <Process />
      <CareersCTA />
      <FinalCTA />
    </main>
  );
}
