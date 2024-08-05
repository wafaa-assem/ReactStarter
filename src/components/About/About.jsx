export default function About() {
  return (
    <div className="bg-cyan-400 text-white flex justify-center items-center py-36">
      <div className="w-[80%]">
        <h2 className="text-center text-4xl font-bold mt-7">ABOUT COMPONENT</h2>
        <div className="my-4 flex items-center justify-center">
          <div className="w-20 h-1 bg-white"></div>
          <i className="fa-solid fa-star mx-6"></i>
          <div className="w-20 h-1 bg-white"></div>
        </div>
        <div className="flex">
          <p className="me-3">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
          <p>
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
      </div>
    </div>
  );
}
