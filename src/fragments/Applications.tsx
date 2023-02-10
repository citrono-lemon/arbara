import { Inter } from '@next/font/google'
import AppCard from '@/fragments/AppCard'

const inter = Inter({ subsets: ['latin'] })

export default function Applications() {
  return (
    <div className='h-screen' id="content-applications">
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-none container mx-auto justify-center'>
        <AppCard title="Cute Girls Slide Puzzle" description='Some slide puzzles including 3x3, 4x4, 4x5, 5x4, 5x5' />
        <AppCard title="No distribution" description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
        <AppCard title="No distribution" description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
        <AppCard title="No distribution" description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
      </div>
    </div>
  )
}
