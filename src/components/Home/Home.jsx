import person from "./../../assets/avataaars.svg";
export default function Home() {
  return (
    <div className="bg-cyan-400 text-white flex justify-center items-center py-36">
      <div className="flex flex-col justify-center items-center">
        <img src={person} alt="person" className="w-48" />
        <h2 className="text-4xl font-bold mt-7">START FRAMEWORK</h2>
        <div className="flex items-center justify-center my-5">
          <div className="w-20 h-1 bg-white"></div>
          <i className="fa-solid fa-star mx-6"></i>
          <div className="w-20 h-1 bg-white"></div>
        </div>
        <div>Graphic Artist - Web Designer - Illustrator</div>
      </div>
    </div>
  );
}
