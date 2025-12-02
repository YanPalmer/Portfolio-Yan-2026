import 'tailwindcss'

function Header() {
  return (
    <header className='fixed top-0 right-0 left-0 bg-linear-to-r from-navBackground to-navBackground text-white h-16 flex flex-row justify-around items-center'>
      <h1>Logo</h1>
      <ul className='links flex flex-row justify-around items-center w-110 h-full'>
        <li className='text-white hover:text-whiteText'>Home</li>
        <li>Sobre</li>
        <li>Projetos</li>
        <li>Habilidades</li>
        <li>Contato</li>
      </ul>
      <h1>* Modo</h1>
    </header>
  )
}

export default Header
