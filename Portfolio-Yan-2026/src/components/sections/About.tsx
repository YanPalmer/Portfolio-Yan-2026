import 'tailwindcss'

function About() {
  return (
    <section className='bg-aboutBackground w-full h-screen flex flex-col items-center pt-30'>
      <h1 className='text-7xl font-extrabold bg-linear-to-r from-cyan-500 to-green-500 bg-clip-text text-transparent'>Sobre</h1>
      <p className='pt-16 text-6xl text-white'>Yan Palmer Web Developer</p>
    </section>
  )
}

export default About
