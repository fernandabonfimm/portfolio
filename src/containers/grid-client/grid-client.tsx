'use client'

import React, { useRef, useEffect, useState } from 'react'

interface ISlide {
    [key: string]: any
}

interface GridClientProps {
    slides: ISlide[]
    quantity?: number
    component: (slide: ISlide, index: number) => React.ReactNode
    className?: string
}

export default function GridClient({ slides, quantity = 3, component, className = '' }: GridClientProps) {
    const cardRefs = useRef<(HTMLDivElement | null)[]>([])
    const [maxHeight, setMaxHeight] = useState(0)

    const updateHeights = () => {
        let biggest = 0
        cardRefs.current.forEach((el) => {
            if (el) {
                el.style.height = 'auto'
                const h = el.offsetHeight
                if (h > biggest) biggest = h
            }
        })
        cardRefs.current.forEach((el) => {
            if (el) el.style.height = `${biggest}px`
        })
        setMaxHeight(biggest)
    }

    useEffect(() => {
        const timeoutId = setTimeout(updateHeights, 100)
        return () => clearTimeout(timeoutId)
    }, [slides])

    useEffect(() => {
        updateHeights()
        window.addEventListener('resize', updateHeights)
        return () => window.removeEventListener('resize', updateHeights)
    }, [slides])

    return (
        <div
            className={`
        grid 
        grid-cols-1 
        md:grid-cols-2 
        lg:grid-cols-${quantity} 
        gap-6
        w-full 
        ${className}
      `}
        >
            {slides.map((slide, index) => (
                <div
                    key={index}
                    ref={(el) => (cardRefs.current[index] = el)}
                    className="flex items-stretch justify-center"
                >
                    {component(slide, index)}
                </div>
            ))}
        </div>
    )
}
