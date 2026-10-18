import Hero from "./Components/Hero";
import Collections from "./Collections/page";
import FashionShowcase from "./Components/FashionShowcase"
import NewArrival from "./NewArrival/page";
import About from "./About/page";
import Contact from "./Contact/page";

export default function Home() {
  return (
    <main>
      <Hero />
      <Collections />
      <FashionShowcase />
      <NewArrival />
      <About />
      <Contact />
    </main>
  );
}

