import React, { ReactNode, useEffect, useRef } from 'react'

type Props = {
  text: string
  onClick: () => void
  className?: string
  icon?: ReactNode
}

export const Button = ({ text, onClick, className, icon }: Props) => {
  return (
    <div className="inline-block pl-0 p-6" data-cursor-stick="#download-resume">
      <button
        className={'py-3 px-5 rounded-full flex gap-1 items-center justify-between ' + className}
        data-magnetic
        data-cursor="-opaque -hidden"
        id="download-resume"
        onClick={onClick}
      >
        {text}
        {icon}
      </button>
    </div>
  )
}
