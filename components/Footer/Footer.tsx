import GithubIcon from "../styled/svg-icons/GithubIcon";

export default function Footer() {
  return (
    // <footer className="relative bg-green-500 h-50">cest le footer</footer>

    <footer className="relative mainBg shadow border-t border-white">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="/"
            className="flex items-center mb-4 sm:mb-0"
          >
            <img
              src="/logo.png"
              className="h-8 mr-3"
              alt="Whybecause Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Whybecause
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
            <li>
              <a href="/#about" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="/#projects" className="mr-4 hover:underline md:mr-6">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Contact
              </a>
            </li>
            <li>
              <a href="https://github.com/Whybecause?tab=repositories" className="hover:underline flex">
                <GithubIcon />
                Source Code
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-400 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="/" className="hover:underline">
            Whybecause
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
