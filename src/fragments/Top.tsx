import { Inter } from '@next/font/google'
import Applications from './Applications'

const inter = Inter({ subsets: ['latin'] })

export default function Top() {
  return (
    <main className="">
      <Applications />
    </main>
  )
}
