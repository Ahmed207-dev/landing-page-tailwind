import { AIBenefit } from "../Components/AIBenefit";
import { AIYype } from "../Components/aitype";
import { Content } from "../Components/Content";
import { Footer } from "../Components/footer";
import { Hero } from "../Components/Hero";
import Navbar from "../Components/Navbar";

export const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AIYype />
        <AIBenefit />
        <Content />
      </main>
      <Footer />
    </>
  );
};
