import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Extras from "./components/Extras";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-left justify-between">
      <Nav />
      {/* <div className="w-full flex flex-row gap-4 sm:gap-8 lg:gap-10">
        <div className="w-full"> */}
      <Hero />
      <Portfolio />
      <Extras />
      
    </main>
  );
}
