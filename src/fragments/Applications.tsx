import { Inter } from '@next/font/google'
import AppCard from '@/fragments/AppCard'

const inter = Inter({ subsets: ['latin'] })

export default function Applications() {
  return (
    <div className='min-h-screen mx-1' id="content-applications">
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-5 gap-4 container mx-auto justify-center'>
        <AppCard title="Cute Girls Slide Puzzle" src="/images/Screenshot_20230212-020543.png" android>
          Some slide puzzles including 3x3, 4x4, 4x5, 5x4, 5x5
        </AppCard>
        <AppCard title="Arbo ちゃん" src="/images/arbo.png" imagePosY='20%'>
          Arbo chanは、木(arbo)の妖精です。木は我々の生活を豊かにする。Arbo Fariĝas Arbaro.
        </AppCard>
        <AppCard title="Sample Card">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </AppCard>
        <AppCard title="Feles in arca" src="/images/cat.png" imagePosY='50%'>
          Inexcusabile felem necare est! Feles vivit!
        </AppCard>
        <AppCard title="Icelandic">
          Það er of erfitt fyrir hann að læra þetta tungumál.
        </AppCard>

      </div>
    </div>
  )
}
