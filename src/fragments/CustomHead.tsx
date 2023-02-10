import { HiChevronDoubleDown } from 'react-icons/hi'
import { Link as Scroll } from 'react-scroll'

export default function CustomHeader() {
  return (
    <header>
      {/* 
      <nav className="navbar navbar-expand-lg shadow-md py-2 bg-white relative flex items-center w-full justify-between">
        <div className="px-6 w-full flex flex-wrap items-center justify-between">
          <div className="flex items-center">
            <button
              className="navbar-toggler border-0 py-3 lg:hidden leading-none text-xl bg-transparent text-gray-600 hover:text-gray-700 focus:text-gray-700 transition-shadow duration-150 ease-in-out mr-2"
              type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContentY"
              aria-controls="navbarSupportedContentY" aria-expanded="false" aria-label="Toggle navigation">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-5" role="img"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor"
                  d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
                </path>
              </svg>
            </button>
          </div>
          <div className="navbar-collapse collapse grow items-center" id="navbarSupportedContentY">
            <ul className="navbar-nav mr-auto lg:flex lg:flex-row">
              <li className="nav-item">
                <a className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                  href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                  href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                  href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">Pricing</a>
              </li>
              <li className="nav-item mb-2 lg:mb-0">
                <a className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                  href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">About</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      */}

      {/* Background image */}
      {/*backgroundImage: "url('https://mdbcdn.b-cdn.net/img/new/slides/146.webp')",*/}
      <div className="relative overflow-hidden bg-no-repeat bg-cover h-screen" style={{
        backgroundPosition: "70%",
        backgroundPositionY: "30%",
        backgroundImage: "url(https://drive.google.com/uc?export=view&id=1XrkcKQ2dxEfvGra4XgSylWMrbNiaxeuQ)"
      }}>
        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}>
          <div className="flex justify-center items-center h-full">
            <div className="text-center justify-items-center text-white px-6 md:px-12">
              <h1 className="text-5xl font-bold mt-0 mb-6">Arbara Software</h1>
              <h3 className="text-xl font-bold mb-8">
                En la profunda verda arbaro, vi trovos la ludojn!
              </h3>
              {/* <button type="button"
                className="inline-block px-6 py-2.5 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                data-mdb-ripple="true" data-mdb-ripple-color="light">
                Get started
              </button> */}
              <div className="flex items-center justify-center mt-48">
                <Scroll to="content-applications" smooth={true}>
                  <HiChevronDoubleDown className=" mx-6 my-2.5 text-4xl animate-bounce" />
                </Scroll>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
