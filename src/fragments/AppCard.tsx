import { SiAndroid, SiApple } from 'react-icons/si'
import IconLink from './IconLink'
import Image from 'next/image'
import { url } from '@/utility'

type Props = {
  title: string,
  src?: string,
  description?: string,
  imagePosY?: string,
  children: React.ReactNode
}

const AppCard: React.FC<Props> = ({ title, src, children, imagePosY }) => {
  return (
    <a href="#" className="group relative block bg-black">
      {
        src ? (<Image src={url(src)} alt={"title"} fill className="object-cover w-full h-full" style={{ objectPosition: "50% " + (imagePosY ?? "50%") }} />) : (<img
          className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
          src="https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=420&q=80"
          alt="Flower and sky"
        />)
      }

      <div className="relative p-8">
        <p className="text-2xl font-bold text-white bg-opacity-20 px-5 bg-black w-fit rounded-xl">{title}</p>

        <div className="mt-48">
          <div
            className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
          >
            <p className="text-sm text-white">
              {children}
            </p>
          </div>
        </div>
        <div className="flex items-center mb-1 mt-3 text-white bottom-0 justify-start">
          <IconLink href={"#"} hint={"unchi"} key={"unchi"}>
            <SiAndroid className="text-3xl mx-2" />
          </IconLink>
          <IconLink href={"#"} hint={"unchi"} key={"unchi2"}>
            <SiApple className="text-3xl mx-2" />
          </IconLink>
        </div>
      </div>
    </a>


  )
}

/*
    <div className="shadow hover:shadow-md w-full bg-white rounded-lg overflow-hidden cursor-pointer">
      <div className="relative object-cover w-full h-80">
 
      </div>


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
*/


export default AppCard