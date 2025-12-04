import 'tailwindcss'
import { PORTFOLIO_INFO } from '../../lib/constants'
import { Github, Linkedin, Mail } from "lucide-react";

function Hero() {
  return (
    <section className='max-w-full flex items-center justify-center min-h-screen py-20 bg-navBackground'>
      <div className='grid grid-cols-2 gap-12 items-center justify-items-center px-14'>
        <div className='space-y-8'>
          <div className='space-y-6 mb-12'>
            <h1 className='text-7xl font-extrabold text-whiteText'>Olá, eu sou {" "}
              <span className="text-7xl font-extrabold bg-linear-to-r from-cyan-500 to-green-500 bg-clip-text text-transparent">
                {PORTFOLIO_INFO.name}
              </span>
            </h1>
            <p className="text-whiteText text-xl text-muted-foreground h-12">
              Desenvolvedor Full Stack apaixonado por código limpo e soluções inovadoras.
            </p>
          </div>

          <p className="text-whiteText text-base text-muted-foreground leading-relaxed max-w-xl mb-14">
            {PORTFOLIO_INFO.shortBio}
          </p>
          
          <div className='flex flex-col sm:flex-row gap-4 pt-4'>
            <button className='text-3xl text-whiteText bg-green-500 rounded-lg p-3' onClick={() => { window.alert("Entrar em contato...") }}>
              Entrar em Contato
            </button>
            <button className='text-3xl text-whiteText bg-green-500 rounded-lg p-3' onClick={() => { window.alert("Baixando currículo...") }}>
              Baixar Currículo
            </button>
          </div>

          <div className="text-whiteText flex items-center gap-6 pt-4">
            <a
              href={PORTFOLIO_INFO.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href={PORTFOLIO_INFO.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href={PORTFOLIO_INFO.socialLinks.email}
              className="text-muted-foreground hover:text-accent transition-colors hover:scale-110"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="hidden md:flex items-center justify-center">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-500 rounded-lg blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative w-full h-full bg-card rounded-lg border border-gray-700 flex items-center justify-center">
                <div className="text-whiteText flex flex-col items-center">
                  <div className="text-6xl mb-4">👨‍💻</div>
                  <p className="text-sm text-muted-foreground">
                    Full Stack Developer
                  </p>
                </div>
              </div>
            </div>
          </div>
      </div>

    </section>
  )
}

export default Hero
