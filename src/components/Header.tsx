const Header = () => {
  return (
    <>
      <header className="bg-base-100">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <a className="block text-primary font-bold text-xl" href="/">
                <span className="sr-only">Home</span>
                repoanalyzer.com
              </a>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              {/* <nav
                className="hidden md:block"
                aria-labelledby="header-navigation"
              >
                <h2 className="sr-only" id="header-navigation">
                  Header navigation
                </h2>

                <ul className="flex items-center text-sm gap-6">
                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="/"
                    >
                      About
                    </a>
                  </li>
                </ul>
              </nav> */}

              <div className="flex items-center gap-4">
                <div className="sm:gap-4 sm:flex">
                  <a
                    className="px-5 py-2.5 text-sm font-medium text-white bg-primary rounded-md shadow"
                    href="/"
                  >
                    Login
                  </a>
                </div>

                <div className="block md:hidden">
                  <button className="p-2 text-gray-600 bg-gray-100 rounded transition hover:text-gray-600/75">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
