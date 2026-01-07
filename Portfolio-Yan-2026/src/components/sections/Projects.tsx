import 'tailwindcss';
import { ExternalLink } from "lucide-react";
import oioidocinhosImage from "../../assets/Oi_Oi_Docinhos_imagem.png";
import meuprimeiroportfolioImage from "../../assets/Meu_Primeiro_Portfólio_imagem.png";
import responsiveportfoliowebJohnSmithImage from "../../assets/Responsive_portfolio_website_John-Smith.png"
import copiadonetflixImage from "../../assets/cópia_do_netflix.png";
import authappImage from "../../assets/auth_app.png"

interface Project {
  id: number;
  title: string;
  description: string;
  emoji: string;
  technologies: string[];
  imageUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Responsive Portfólio Website",
    description: "Portfólio responsivo.",
    emoji: "",
    technologies: ["HTML", "CSS", "JavaScript", "Vercel"],
    imageUrl: responsiveportfoliowebJohnSmithImage ,
    liveUrl: "https://projetos-para-praticar-you-tube.vercel.app/",
  },
  {
    id: 2,
    title: "Meu Primeiro Portfólio",
    description: "Portfólio antigo para testes e estudos.",
    emoji: "",
    technologies: ["HTML", "CSS", "JavaScript", "Vercel"],
    imageUrl: meuprimeiroportfolioImage,
    liveUrl: "https://repositorio-profissional-1fpgfszg7-yanpalmer.vercel.app/",
  },
  {
    id: 3,
    title: "Cardápio Oi Oi Docinhos",
    description: "Cardápio digital interativo para confeitaria com design moderno.",
    emoji: "",
    technologies: ["HTML", "CSS", "JavaScript", "Vercel"],
    imageUrl: oioidocinhosImage,
    liveUrl: "https://cardapio-oi-oi-docinhos-exl9fqmcy-yanpalmer.vercel.app/",
  },
  {
    id: 4,
    title: "Cópia do Netflix (apenas para estudo)",
    description: "Feito com o intuito de testar minhas habilidades.",
    emoji: "",
    technologies: ["HTML", "CSS", "JavaScript", "Vercel"],
    imageUrl: copiadonetflixImage,
    liveUrl: "https://copia-do-netflix.vercel.app/",
  },
  {
    id: 5,
    title: "Auth App",
    description: "Cadastro e Login de usuários com banco de dados. (caso queira testar, use um email fictício)",
    emoji: "",
    technologies: ["Vite", "React", "Firebase", "Vercel"],
    imageUrl: authappImage,
    liveUrl: "https://auth-dxaceuz8t-yanpalmers-projects.vercel.app/",
  },
];

function Projects() {
  return (
    <section id="projects" className="max-w-full py-20 bg-navBackground">
      <div className="px-6 md:px-14 max-w-7xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-extrabold text-whiteText">
              Projetos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Alguns projetos que desenvolvi para demonstrar minhas habilidades.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-card rounded-lg overflow-hidden border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg"
              >
                <div className="bg-cover bg-center h-48 flex items-center justify-center"style={{ backgroundImage: `url(${project.imageUrl})` }}>
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                    {project.emoji}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-whiteText">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 text-sm font-semibold text-whiteText bg-linear-to-r from-cyan-500 to-green-500 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Ver
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects
