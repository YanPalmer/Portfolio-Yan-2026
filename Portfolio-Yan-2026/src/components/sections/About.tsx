import 'tailwindcss';
import { PORTFOLIO_INFO } from "../../lib/constants";

interface TimelineItem {
  id: number;
  year: string;
  tech: string[];
  description: string;
}

const timeline: TimelineItem[] = [
  {
    id: 1,
    year: "2017",
    tech: ["Python 3"],
    description: "Comecei com backend em Python",
  },
  {
    id: 2,
    year: "2021 - 2022",
    tech: ["Html", "CSS", "JavaScript"],
    description: "Primeiro contato com desenvolvimento web",
  },
  {
    id: 3,
    year: "2022 - 2023",
    tech: ["TypeScript"],
    description: "Adotei TypeScript para código mais seguro",
  },
  {
    id: 4,
    year: "2023 - 2024",
    tech: ["Node.js", "Express", "REST API", "PostgreSQL"],
    description: "Aprofundei em desenvolvimento backend e criação de serviços API",
  },
  {
    id: 5,
    year: "2024 - 2026",
    tech: ["Java", "React", "React Native"],
    description: "Expandi para desenvolvimento Full-Stack e mobile",
  },
  {
    id: 6,
    year: "2026 - Presente",
    tech: ["Firebase", "Docker", "Vite", "n8n"],
    description: "Integrei soluções de backend serverless",
  },
];

function About() {
  return (
    <section id="about" className="max-w-full py-20 bg-navBackground">
      <div className="px-6 md:px-14 max-w-7xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-extrabold text-whiteText">
              Sobre Mim
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl tracking-wide">
              {PORTFOLIO_INFO.explainedBio}
            </p>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-whiteText">
              Trilha de Conhecimento
            </h3>

            <div className="relative">
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-cyan-500 to-green-500 transform md:-translate-x-1/2"></div>

              <div className="space-y-8 md:space-y-12">
                {timeline.map((item, index) => (
                  <div
                    key={item.id}
                    className={`relative md:w-1/2 ${index % 2 === 0 ? "md:ml-0 md:pr-12" : "md:ml-auto md:pl-12"
                      }`}
                  >
                    <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-cyan-500 rounded-full transform -translate-x-1.5 md:-translate-x-2 border-4 border-navBackground"></div>

                    <div className="ml-8 md:ml-0 p-6 bg-card rounded-lg border border-gray-700 hover:border-cyan-500 transition-colors duration-300">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-sm font-semibold text-cyan-500">
                          {item.year}
                        </span>
                        {item.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 text-sm font-semibold text-whiteText bg-linear-to-r from-cyan-500 to-green-500 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* <div className='w-full flex justify-center text-2xl'>
              <p>. . .</p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About
