import 'tailwindcss'

function Hero() {
  return (
    <section className='min-h-screen flex items-center justify-center py-20 bg-navBackground'>
      <div className='container px-8 flex flex-row justify-stretch space-y-12'>
        <h1 className='text-7xl font-extrabold bg-linear-to-r from-cyan-500 to-green-500 bg-clip-text text-transparent'>Minha section</h1>
        <p className='pt-16 text-6xl text-white'>Yan Palmer Web Developer</p>
      </div>

    </section>
  )
}

export default Hero
