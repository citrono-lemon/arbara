import { Inter } from '@next/font/google'
import Applications from './Applications'
import Profile from './Profile'

const inter = Inter({ subsets: ['latin'] })

export default function Top() {
  return (
    <main className="">
      <Applications />
      <Profile />
    </main>
  )
}
