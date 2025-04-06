import imageBG from '../Assets/imageBG.jpg'
import imageSM from '../Assets/imageSM.png'
const CountriesOption = () => {
  return (
    <main className="hidden sm:block  p-20 ">
      <div
        className="w-full h-screen relative  flex flex-col  px-10 rounded-2xl bg-cover bg-center overflow-x-auto"
        style={{ backgroundImage: `url(${imageBG})` }}
      >
        <p className=" w-3/4 p-10 text-6xl ">
          Popular vacation rental destinations
          <p className=" text-xl font-medium ">
            Need some inspiration for your next getaway? Find the perfect
            oceanfront, cozy, or luxurious hotel in one of these top
            destinations.
          </p>
        </p>
        <div className="absolute bottom-20 left-10 gap-6 w-full  flex ">
          <div className="relative">
            <img src={imageSM} className=" rounded-2xl" alt="imageSM" />
            <p className="absolute top-20 left-4 text-lg font-bold"> Florida</p>
          </div>
          <div className="relative">
            <img src={imageSM} className=" rounded-2xl" alt="imageSM" />
            <p className="absolute top-20 left-4 text-lg font-bold"> Florida</p>
          </div>
          <div className="relative">
            <img src={imageSM} className=" rounded-2xl" alt="imageSM" />
            <p className="absolute top-20 left-4 text-lg font-bold"> Florida</p>
          </div>
          <div className="relative">
            <img src={imageSM} className=" rounded-2xl" alt="imageSM" />
            <p className="absolute top-20 left-4 text-lg font-bold"> Florida</p>
          </div>
          <div className="relative">
            <img src={imageSM} className=" rounded-2xl" alt="imageSM" />
            <p className="absolute top-20 left-4 text-lg font-bold ">
              {" "}
              Florida
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CountriesOption