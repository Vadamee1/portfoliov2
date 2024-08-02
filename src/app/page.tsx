import Home from "@/components/home";
import BasicData from "@/components/home/basicData";
import Experience from "@/components/home/experience";
import NextCard from "@/components/home/next";
import Projects from "@/components/home/projects";

export default function RootPage() {
  return (
    <main className="relative h-full py-80">
      <div className="absolute inset-0 h-[90vh] w-full bg-[url('/background-code.jpg')] bg-no-repeat bg-cover opacity-30 z-0" />
      <div className="relative z-10">
        <Home />
        <BasicData />
        <NextCard />
        <Experience />
        <Projects />
      </div>
    </main>
  );
}
