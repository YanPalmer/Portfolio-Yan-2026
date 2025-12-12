import 'tailwindcss';
import { Code2, Database, Zap, Palette, GitBranch, Cpu } from "lucide-react";

interface SkillCategory {
  id: number;
  category: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    id: 1,
    category: "Front-End",
    icon: <Palette className="h-6 w-6" />,
    skills: ["React", "TypeScript", "TailwindCSS"],
  },
  {
    id: 2,
    category: "Back-End",
    icon: <Code2 className="h-6 w-6" />,
    skills: ["Node.js", "Express", "Java", "REST APIs", "GraphQL"],
  },
  {
    id: 3,
    category: "Banco de Dados",
    icon: <Database className="h-6 w-6" />,
    skills: ["Firebase", "PostgreSQL", "MySQL"],
  },
  {
    id: 4,
    category: "Ferramentas",
    icon: <Zap className="h-6 w-6" />,
    skills: ["Git", "Docker", "VS Code", "Postman", "npm/pnpm"],
  },
  {
    id: 5,
    category: "Controle de Versão",
    icon: <GitBranch className="h-6 w-6" />,
    skills: ["Git", "GitHub"],
  },
  {
    id: 6,
    category: "DevOps (Aprendendo)",
    icon: <Cpu className="h-6 w-6" />,
    skills: ["CI/CD", "GitHub Actions", "Vercel", "AWS Basics"],
  },
];

function Skills() {
  return (
    <section id="skills" className="max-w-full py-20 bg-navBackground">
      <div className="px-6 md:px-14 max-w-7xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-extrabold text-whiteText">
              Habilidades
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Tecnologias e ferramentas que domino para desenvolver soluções modernas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => (
              <div
                key={category.id}
                className="group relative bg-card border border-gray-700 rounded-lg p-6 hover:border-cyan-500 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>

                <div className="relative space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-cyan-500/20 rounded-lg text-cyan-400 group-hover:bg-cyan-500 group-hover:text-whiteText transition-colors duration-300">
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-whiteText">
                      {category.category}
                    </h3>
                  </div>

                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-whiteText transition-colors duration-300"
                      >
                        <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                        {skill}
                      </div>
                    ))}
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

export default Skills
