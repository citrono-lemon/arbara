import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import CustomHead from '@/fragments/CustomHead'
import Top from '@/fragments/Top'
import CustomFoot from '@/fragments/CustomFoot'

import { IoMdPerson, IoMdMail } from 'react-icons/io'
import { SiPixiv, SiTwitter, SiSoundcloud, SiGithub } from 'react-icons/si'
import IconLink from '@/fragments/IconLink'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <CustomHead />
      <Top />
      <CustomFoot />
    </>
  )
}
