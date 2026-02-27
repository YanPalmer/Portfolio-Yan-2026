import { useState } from 'react'
import 'tailwindcss'
import logo from '../assets/Logo_Yan_Palmer2.png'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#contato', label: 'Contato' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="fixed top-0 right-0 left-0 bg-navBackground text-whiteText h-16 flex flex-row justify-between items-center px-4 md:justify-around md:px-0 border-b-2 border-gray-700 z-50">
      <img src={logo} alt="Logo Yan Palmer" className="h-full py-2" />

      {/* Desktop: links visíveis a partir de md */}
      <ul className="links hidden md:flex flex-row justify-around items-center w-110 h-full gap-6">
        {navLinks.map(({ href, label }) => (
          <li key={href} className="text-whiteText hover:opacity-80 cursor-pointer">
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>

      {/* Desktop: botão de tema */}
      <div className="hidden md:flex items-center gap-4">
        <button
          type="button"
          onClick={toggleTheme}
          className="p-2 rounded-lg text-whiteText hover:bg-white/10 transition-colors"
          aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
        >
          {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile: hambúrguer + tema */}
      <div className="flex md:hidden items-center gap-2">
        <button
          type="button"
          onClick={toggleTheme}
          className="p-2 rounded-lg text-whiteText hover:bg-white/10 transition-colors"
          aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
        >
          {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile: menu dropdown */}
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden top-16"
            onClick={closeMenu}
            aria-hidden
          />
          <nav
            className="fixed top-16 left-0 right-0 bg-navBackground border-b-2 border-gray-700 z-50 md:hidden shadow-xl"
            aria-label="Menu principal"
          >
            <ul className="links flex flex-col py-4">
              {navLinks.map(({ href, label }) => (
                <li key={href} className="border-b border-gray-700/50 last:border-0">
                  <a
                    href={href}
                    onClick={closeMenu}
                    className="block py-3 px-6 text-whiteText hover:opacity-80 hover:bg-gray-500/10 transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </>
      )}
    </header>
  )
}

export default Header
