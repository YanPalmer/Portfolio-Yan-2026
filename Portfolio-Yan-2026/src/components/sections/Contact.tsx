import 'tailwindcss';
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { PORTFOLIO_INFO } from "../../lib/constants";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Mensagem enviada:", formData);
      alert("Mensagem enviada com sucesso!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Erro ao enviar a mensagem.");
    } finally {
      setIsLoading(false);
    }
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Yan_Palmer_Resume.pdf";
    link.click();
  };

  return (
    <section id="contact" className="max-w-full py-20 bg-navBackground">
      <div className="px-6 md:px-14 max-w-7xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-extrabold text-whiteText">
              Entrar em Contato
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Tem uma oportunidade ou projeto em mente? Entre em contato comigo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8 flex flex-col justify-between">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-cyan-500/20 text-cyan-400">
                      <Mail className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-whiteText">Email</h3>
                    <a
                      href={PORTFOLIO_INFO.socialLinks.email}
                      className="text-muted-foreground hover:text-cyan-400 transition-colors"
                    >
                      {PORTFOLIO_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-cyan-500/20 text-cyan-400">
                      <Phone className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-whiteText">Telefone</h3>
                    <a
                      href={`tel:${PORTFOLIO_INFO.phone.replace(/\D/g, "")}`}
                      className="text-muted-foreground hover:text-cyan-400 transition-colors"
                    >
                      {PORTFOLIO_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-cyan-500/20 text-cyan-400">
                      <MapPin className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-whiteText">Localização</h3>
                    <p className="text-muted-foreground">{PORTFOLIO_INFO.location}</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-700">
                <button
                  onClick={downloadResume}
                  className="w-full px-8 py-3 text-lg font-semibold text-whiteText bg-linear-to-r from-blue-600 to-purple-600 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Baixar Currículo
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-whiteText">
                  Nome
                </label>
                <input
                  id="name"
                  name="name"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-card border border-gray-700 rounded-lg text-whiteText placeholder-muted-foreground focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-whiteText">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-card border border-gray-700 rounded-lg text-whiteText placeholder-muted-foreground focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-whiteText">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Sua mensagem..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 bg-card border border-gray-700 rounded-lg text-whiteText placeholder-muted-foreground focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-8 py-3 text-lg font-semibold text-whiteText bg-linear-to-r from-cyan-500 to-green-500 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Enviar Mensagem
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact
