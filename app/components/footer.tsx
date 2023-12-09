import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" rounded-lg shadow bg-gray-900 mt-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
        <span className="block text-sm  sm:text-center text-gray-400">
          © 2024{" "}
          <Link
            href="https://ismailsafha.com/"
            className="hover:underline font-medium"
          >
            Ismail 😎
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
