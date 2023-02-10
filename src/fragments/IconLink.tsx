import React from 'react'

type Props = {
  href: string
  hint: string
  children: React.ReactNode
}

const IconLink: React.FC<Props> = ({ href, hint, children }) => {
  return (
    <div title={hint}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-50 hover:scale-110 transition duration-300 ease-in-out"
      >
        {children}
      </a>
    </div>
  )
}

export default IconLink