import React from 'react'

type Props = {
  href: string
  hint: string
  enable: boolean
  children: React.ReactNode
}

const IconLink: React.FC<Props> = ({ href, hint, enable, children }) => {
  return (
    <div title={hint}>
      {enable ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-100 hover:scale-110 transition duration-300 ease-in-out"
        >
          {children}
        </a>

      ) : (
        <div className="opacity-30"
        >
          {children}
        </div>

      )}
    </div>
  )
}

export default IconLink