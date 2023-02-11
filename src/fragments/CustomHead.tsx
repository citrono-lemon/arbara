import { url } from '@/utility'
import { HiChevronDoubleDown } from 'react-icons/hi'
import { Link as Scroll } from 'react-scroll'

export default function CustomHead() {
  return (
    <header>
      <div className="relative overflow-hidden bg-no-repeat bg-cover h-screen" style={{
        backgroundPosition: "70%",
        backgroundPositionY: "30%",
        backgroundImage: "url(" + url("/images/top.png") + ")"
      }}>
        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}>
          <div className="flex justify-center items-center h-full">
            <div className="text-center justify-items-center text-white px-6 md:px-12">
              <h4 className="md:text-xl text-xs text-gray-400 translate">
                En la profunda verda arbaro, vi trovos la ludojn.
              </h4>
              <h1 className="md:text-8xl text-4xl font-bold mt-2 mb-4">
                Arbara Software
              </h1>
              <h3 className="md:text-xl text-sm font-bold mb-8">
                スマートフォン向けゲームを配布しています
              </h3>
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
