import img1 from "./../../assets/poert1.png";
import img2 from "./../../assets/port2.png";
import img3 from "./../../assets/port3.png";
export default function Portfolio() {
  return (
    <div className="py-4">
      <div className="text-cyan-950 flex justify-center items-center ">
        <div>
          <h2 className="text-center text-4xl font-bold mt-7">
            PORTFOLIO COMPONENT
          </h2>
          <div className="my-4 flex items-center justify-center">
            <div className="w-20 h-1 bg-cyan-950 "></div>
            <i className="fa-solid fa-star mx-6"></i>
            <div className="w-20 h-1 bg-cyan-950 "></div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-2">
          <div className="bg-pink-800 rounded-lg relative group">
            <img src={img1} alt="home" className="rounded-lg" />
            <div className="absolute rounded-lg bg-cyan-400/80 top-0 bottom-0 start-0 end-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-500 "><i className="fa-solid fa-plus text-white text-8xl font-bold "></i></div>
          </div>
          <div className="bg-blue-500	rounded-lg relative group">
            <img src={img2} alt="cake" className="rounded-lg" />
             <div className="absolute rounded-lg bg-cyan-400/80 top-0 bottom-0 start-0 end-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-500 "><i className="fa-solid fa-plus text-white text-8xl font-bold "></i></div>
          </div>
          <div className="bg-zinc-950	rounded-lg relative group">
            <img src={img3} alt="tent" className="rounded-lg" />
             <div className="absolute rounded-lg bg-cyan-400/80 top-0 bottom-0 start-0 end-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-500 "><i className="fa-solid fa-plus text-white text-8xl font-bold "></i></div>
          </div>
          <div className="bg-pink-800 rounded-lg relative group">
            <img src={img1} alt="home" className="rounded-lg" />
             <div className="absolute rounded-lg bg-cyan-400/80 top-0 bottom-0 start-0 end-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-500 "><i className="fa-solid fa-plus text-white text-8xl font-bold "></i></div>
          </div>
          <div className="bg-blue-500	rounded-lg relative group">
            <img src={img2} alt="cake" className="rounded-lg" />
             <div className="absolute rounded-lg bg-cyan-400/80 top-0 bottom-0 start-0 end-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-500 "><i className="fa-solid fa-plus text-white text-8xl font-bold "></i></div>
          </div>
          <div className="bg-zinc-950	rounded-lg relative group">
            <img src={img3} alt="tent" className="rounded-lg" />
             <div className="absolute rounded-lg bg-cyan-400/80 top-0 bottom-0 start-0 end-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-500 "><i className="fa-solid fa-plus text-white text-8xl font-bold "></i></div>
          </div>
        </div>
      </div>
    </div>
  );
}
