import Header from "../components/Header"
import Hero from "../components/sections/Hero"
import About from "../components/sections/About"
import Projects from "../components/sections/Projects"
import Skills from "../components/sections/Skills"
import Contact from "../components/sections/Contact"

// Exemplo simples de página Home
function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}

export default Home
