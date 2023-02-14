import { IoMdPerson, IoMdMail } from 'react-icons/io'
import { SiPixiv, SiTwitter, SiSoundcloud, SiGithub } from 'react-icons/si'
import IconLink from '@/fragments/IconLink'

export default function Applications() {
  return (

    <div className="flex items-center justify-center text-sm bottom-0  px-2 bg-teal-700 text-white">
      <img src="images/author.png" alt="Author Profile" className="shadow-md w-24 h-24 rounded-3xl" />
      <div className="flex-col justify-center px-3 py-5">
        <div className="flex items-center">
          <IoMdPerson className="mr-1" /> Arbaro
        </div>
        <div className="flex items-center">
          <IoMdMail className="mr-1" /> arbara.software@gmail.com
        </div>
        <div className="flex items-center mr-1 w-fit">
          <IconLink href={"https://twitter.com/arbara_software"} hint={"twitter"} key={"twitter"} enable>
            <div className="flex items-center "><SiTwitter className="mr-1" /> Twitter</div>
          </IconLink>
        </div>
        <div className="text-xs w-60 text-white text-opacity-50 ">
          La verdhara knabina nomo estas Arbo (Arbo chan). <br />
          Arbo fariĝas Arbaro.
        </div>
      </div>
    </div>
  )
}