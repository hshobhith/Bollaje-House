import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import ProblemSolution from "@/app/components/ProblemSolution";
import FarmerProfile from "@/app/components/FarmerProfile";
import Footer from "@/app/components/Footer";
import WhatsAppQuery from "@/app/components/WhatsAppQuery";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />
      <main className="flex flex-col flex-1">
        <Hero />
        <About />
        <ProblemSolution />
        <FarmerProfile />
        <WhatsAppQuery />
      </main>
      <Footer />
    </div>
  );
}
