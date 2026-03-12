import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";


const Home = () => {
  return (
    <main>
      <Hero />
      <section id="projects">
        <Projects />
      </section>
    </main>
  );
};

export default Home;

