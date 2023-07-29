

const Nowshowing = () => {
  return (
         <section className="text-gray-600 body-font bg-gray-950">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex w-full mb-20 flex-wrap text-center">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-red-600 lg:w-1/3 lg:mb-0 mb-4 text-left">Now Showing</h1>
      
    </div>
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://cdn.pixabay.com/photo/2015/10/06/22/01/harry-potter-975357_1280.jpg" />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://cdn.pixabay.com/photo/2016/01/22/03/00/oxford-1155171_640.jpg" />
        </div>
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://cdn.pixabay.com/photo/2021/11/24/12/11/owl-6820989_640.jpg" />
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://cdn.pixabay.com/photo/2017/03/24/19/50/hogwarts-2172050_1280.jpg" />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://cdn.pixabay.com/photo/2016/01/10/19/32/harry-potter-1132332_640.jpg" />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://cdn.pixabay.com/photo/2016/01/10/20/31/harry-potter-1132474_640.jpg" />
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Nowshowing