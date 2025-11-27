import { componentSelector } from '@/utils/helpers/component-selector'
import React, { ReactNode } from 'react'

interface IContent {
  children: ReactNode,
  id: string
}

const contentVaritions = {
  "default": (props: Omit<IContent, "startScroll">) => {
    return (
      <div id={props.id} className="max-w-128 py-24 w-full flex flex-col gap-20">
        {props.children}
      </div>
    )
  },
  "no-space": (props: Omit<IContent, "startScroll">) => {
    return (
      <div id={props.id} className="max-w-128 w-full flex flex-col gap-20">
        {props.children}
      </div>
    )
  }
}

const Content = componentSelector<keyof typeof contentVaritions, Omit<IContent, "startScroll">>(contentVaritions)

export default Content