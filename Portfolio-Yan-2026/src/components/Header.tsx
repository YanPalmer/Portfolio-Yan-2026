import 'tailwindcss'

function Header() {
  return (
    <header className='fixed top-0 right-0 left-0 bg-linear-to-r from-navBackground to-navBackground text-white h-16 flex flex-row justify-around items-center border-b-2 border-gray-800 z-50'>
      <h1 className='text-xl font-bold'>Logo</h1>
      <ul className='links flex flex-row justify-around items-center w-110 h-full gap-6'>
        <li className='text-white hover:text-whiteText cursor-pointer'><a href="#home">Home</a></li>
        <li className='hover:text-whiteText cursor-pointer'><a href="#sobre">Sobre</a></li>
        <li className='hover:text-whiteText cursor-pointer'><a href="#projetos">Projetos</a></li>
        <li className='hover:text-whiteText cursor-pointer'><a href="#habilidades">Habilidades</a></li>
        <li className='hover:text-whiteText cursor-pointer'><a href="#contato">Contato</a></li>
      </ul>
      <h1>* Modo</h1>
    </header>
  )
}

export default Header
