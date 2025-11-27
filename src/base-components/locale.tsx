"use client"

import React from 'react'
import { usePathname } from 'next/navigation'

interface ILocale extends React.HTMLAttributes<HTMLDivElement> {
  href: string
}

function Locale(props: ILocale) {
  const path = usePathname()
  let newPath = path.split("/")

  newPath[1] = props.href

  function handleOnClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    window.location.pathname = newPath.join("/")

    try {
      // save selected language to localStorage so it persists on reload
      if (typeof window !== 'undefined' && props.href) {
        localStorage.setItem('lang', props.href)
      }
    } catch (e) {
      // ignore storage errors
    }

    if (props.onClick) {
      props.onClick(event)
    }
  }

  return (
    <span {...props} onClick={handleOnClick} />
  )
}

export default Locale