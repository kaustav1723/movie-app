import"./hero.css"
const Hero = () => {
  return (
   <>
   <section className="text-white body-font herobg ">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Before they sold out
        <br className="hidden lg:inline-block text-white" />readymade gluten
      </h1>
      <p className="mb-8 leading-relaxed">Welcome to the captivating world of cinema, where dreams come alive on the silver screen! Our movie website is your ultimate gateway to entertainment and cinematic wonders. Immerse yourself in a kaleidoscope of genres, from heart-pounding action to heartwarming romance, spine-chilling thrillers to uproarious comedies. With an extensive collection of classics and the latest blockbusters, our website promises an unforgettable cinematic experience. Explore in-depth reviews, exclusive interviews with filmmakers, and behind-the-scenes insights that reveal the magic of moviemaking. Grab your popcorn, dim the lights, and let the journey begin! Lights, camera, action – your cinematic adventure awaits!.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Register</button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Help?</button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src="https://cdn.pixabay.com/photo/2020/04/30/19/01/dining-room-5114247_640.jpg" />
    </div>
  </div>
</section>

   </>
  )
}

export default Hero