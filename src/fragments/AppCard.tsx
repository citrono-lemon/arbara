import { SiAndroid, SiApple } from 'react-icons/si'
import IconLink from './IconLink'


type Props = {
  title: string,
  description: string,
}

const AppCard: React.FC<Props> = (props: Props) => {
  return (
    <div className="max-w-sm px-5 py-3 mx-5 my-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {props.title}
      </h5>
      <p className="px-3 mb-3 font-normal text-gray-700 dark:text-gray-400">
        {props.description}
      </p>
      <div className="flex items-center mb-1 justify-start">
        <IconLink href={"#"} hint={"unchi"} key={"unchi"}>
          <SiAndroid className="text-3xl mx-2" />
        </IconLink>
        <IconLink href={"#"} hint={"unchi"} key={"unchi"}>
          <SiApple className="text-3xl mx-2" />
        </IconLink>
      </div>
    </div>
  )
}


export default AppCard