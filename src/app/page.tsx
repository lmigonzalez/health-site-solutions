import Hero from "@/sections/Hero";
import TechStack from "@/sections/TechStack";
import ServicesOverview from "@/sections/ServicesOverview";
import WhyUs from "@/sections/WhyUs";
import Testimonials from "@/sections/Testimonials";
import CallToAction from "@/sections/CallToAction";
export default function Home() {
  return (
    <main className="">
      <Hero />
      <TechStack />
      <WhyUs />
      <ServicesOverview />
      <Testimonials />
      <CallToAction />
    </main>
  );
}
