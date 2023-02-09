import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import CustomHeader from '@/fragments/CustomHead'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <CustomHeader />
      <h1 className="bg-auto text-white w-screen h-screen">
        Arbara Software1
      </h1>
    </>
  )
}
