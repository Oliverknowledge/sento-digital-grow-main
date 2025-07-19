
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Comparison from "@/components/Comparison";
import Testimonials from "@/components/Testimonials";
import LeadForm from "@/components/LeadForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Comparison />
      <Testimonials />
     
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
