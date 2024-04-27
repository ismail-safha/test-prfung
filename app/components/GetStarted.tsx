import Link from "next/link";

const GetStarted = () => {
  return (
    <main className="container w-full m-auto px-2 h-[100%] ">
      <div className="   h-[109px]">
        <div className="flex justify-between items-center  bg-red-800 p-2 ml-1">
          <div className="text-white font-black text-[50px]">tlc</div>

          <div className="text-white  text-[12px]">LNGUAGE TESTS</div>
          <div className="w-full mb-8 lg:mb-0 text-right ">
            <Link
              href="/login"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300 "
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto px-4 pt-8 lg:px-8 flex flex-col gap-[50px]  items-center justify-center">
        <div className="w-full">
          <div className="w-full h-[500px]">
            <iframe
              className="w-full h-full rounded-lg"
              src="/telc-test.mp4"
              title="Introduction Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="w-full mb-8 lg:mb-0 text-center ">
          <Link
            href="/login"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300 "
          >
            Get Started
          </Link>
        </div>
      </div>
    </main>
  );
};

export default GetStarted;
