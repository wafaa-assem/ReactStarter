export default function Footer() {
  return (
    <>
      <div className="bg-gray-700 text-white py-5">
        <div className="container mx-auto text-center">
          <div className="grid grid-cols-1 sm:grid-cols-3">
            <div className="p-4">
              <h2 className="text-2xl font-semibold ">LOCATION</h2>
              <h4 className="font-normal mb-3">2215 John Daniel Drive</h4>
              <h5 className="font-normal">Clark, MO 65243</h5>
            </div>
            <div className="p-4">
              <h2 className="text-2xl font-semibold ">AROUND THE WEB</h2>
              <div className="flex justify-center items-center mt-2">
                <div className="w-8 h-8 border rounded-full flex justify-center items-center me-3">
                  <i className="fa-brands fa-facebook text-white"></i>
                </div>
                <div className="w-8 h-8 border rounded-full flex justify-center items-center me-3">
                  <i className="fa-brands fa-twitter text-white"></i>
                </div>
                <div className="w-8 h-8 border rounded-full flex justify-center items-center me-3">
                  <i className="fa-brands fa-linkedin text-white"></i>
                </div>
                <div className="w-8 h-8 border rounded-full flex justify-center items-center me-3">
                  <i className="fa-solid fa-globe text-white"></i>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-2xl font-semibold ">ABOUT FREELANCER</h2>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 text-white text-center font-thin py-5">
        <p>Copyright © Your Website 2021</p>
      </div>
    </>
  );
}
