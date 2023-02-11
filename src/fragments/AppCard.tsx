import { SiAndroid, SiApple } from 'react-icons/si'
import IconLink from './IconLink'
import Image from 'next/image'

type Props = {
  title: string,
  src?: string,
  description?: string,
  imagePosY?: string,
  children: React.ReactNode
}

const AppCard: React.FC<Props> = ({ title, src, children, imagePosY }) => {
  return (
    <div className="shadow hover:shadow-md w-full bg-white rounded-lg overflow-hidden  cursor-pointer">
      <div className="relative object-cover w-full h-80">
        {
          src ? (<Image src={src} alt={"title"} fill className="object-cover w-full h-full" style={{ objectPosition: "50% " + (imagePosY ?? "50%") }} />) : (<img
            className="object-cover w-full h-full"
            src="https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=420&q=80"
            alt="Flower and sky"
          />)
        }
      </div>
      {/*
      <img
        className="object-cover w-full h-48"
        src="https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=420&q=80"
        alt="Flower and sky"
      />
       */}

      <div className="relative p-4">
        <h3 className="text-base md:text-xl font-medium text-gray-800">
          {title}
        </h3>

        <p className="mt-4 text-base md:text-lg text-gray-600">
          {children}
        </p>

        <div className="flex items-center mb-1 mt-3 bottom-0 justify-start">
          <IconLink href={"#"} hint={"unchi"} key={"unchi"}>
            <SiAndroid className="text-3xl mx-2" />
          </IconLink>
          <IconLink href={"#"} hint={"unchi"} key={"unchi2"}>
            <SiApple className="text-3xl mx-2" />
          </IconLink>
        </div>
      </div>

    </div>

  )
}

{/* 
    <div className="max-w-sm px-5 py-3 mx-5 my-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="px-3 mb-3 font-normal text-gray-700 dark:text-gray-400">
        {children}
      </p>
      <div className="flex items-center mb-1 justify-start">
        <IconLink href={"#"} hint={"unchi"} key={"unchi"}>
          <SiAndroid className="text-3xl mx-2" />
        </IconLink>
        <IconLink href={"#"} hint={"unchi"} key={"unchi2"}>
          <SiApple className="text-3xl mx-2" />
        </IconLink>
      </div>
    </div>
    */}
export default AppCard