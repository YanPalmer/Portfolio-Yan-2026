import 'tailwindcss'
import { PORTFOLIO_INFO } from '../../lib/constants'
import { Github, Linkedin, Mail } from "lucide-react";

function Hero() {
  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Yan_Palmer_Resume.pdf";
    link.click();
  };

  return (
    <section className="max-w-full flex items-center justify-center min-h-screen py-20 bg-navBackground">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-items-center px-6 md:px-14 max-w-7xl">
        <div className="space-y-8 w-full">
          <div className="space-y-6 mb-12">
            <h1 className="text-5xl md:text-7xl font-extrabold text-whiteText">
              Olá, eu sou{" "}
              <span className="text-5xl md:text-7xl font-extrabold bg-linear-to-r from-cyan-500 to-green-500 bg-clip-text text-transparent">
                {PORTFOLIO_INFO.name}
              </span>
            </h1>
            <p className="text-whiteText text-lg md:text-xl text-muted-foreground">
              {PORTFOLIO_INFO.description}
            </p>
          </div>

          <p className="text-whiteText text-base text-muted-foreground leading-relaxed max-w-xl mb-14">
            {PORTFOLIO_INFO.shortBio}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={handleContactClick}
              className="px-8 py-3 text-lg font-semibold text-whiteText bg-linear-to-r from-cyan-500 to-green-500 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Entrar em Contato
            </button>
            <button
              onClick={handleDownloadResume}
              className="px-8 py-3 text-lg font-semibold text-whiteText bg-linear-to-r from-blue-600 to-purple-600 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
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

        <div className="hidden md:flex items-center justify-center w-full">
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
  );
}

export default Hero
