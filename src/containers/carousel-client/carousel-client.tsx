'use client'

import React, { useRef, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import * as LucideIcons from 'lucide-react'

interface ISlide {
    [key: string]: any
}

interface CarouselProps {
    slides: ISlide[]
    delay?: number
    loop?: boolean
    quantity?: number
    component: (slide: ISlide, index: number) => React.ReactNode
}

export default function CarouselClient({ slides, delay = 3000, loop = true, quantity = 3, component }: CarouselProps) {
    console.log("render")

    const prevRef = useRef<HTMLButtonElement>(null)
    const nextRef = useRef<HTMLButtonElement>(null)
    const swiperRef = useRef<any>(null)
    const cardRefs = useRef<(HTMLDivElement | null)[]>([])
    const [maxHeight, setMaxHeight] = useState(0)

    const updateHeights = () => {
        let biggest = 0
        cardRefs.current.forEach((el) => {
            if (el) {
                const h = el.offsetHeight
                if (h > biggest) biggest = h
            }
        })
        setMaxHeight(biggest)
    }

    useEffect(() => {
        if (
            swiperRef.current &&
            swiperRef.current.params.navigation &&
            typeof swiperRef.current.params.navigation !== 'boolean'
        ) {
            swiperRef.current.params.navigation.prevEl = prevRef.current
            swiperRef.current.params.navigation.nextEl = nextRef.current
            swiperRef.current.navigation.destroy()
            swiperRef.current.navigation.init()
            swiperRef.current.navigation.update()
        }
    }, [])

    useEffect(() => {
        updateHeights()
        window.addEventListener('resize', updateHeights)
        return () => window.removeEventListener('resize', updateHeights)
    }, [slides])

    return (
        <div className="relative w-full">
            <Swiper
                modules={[Navigation, Autoplay]}
                slidesPerView={quantity}
                spaceBetween={20}
                loop={loop}
                autoplay={{
                    delay,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: quantity },
                }}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onResize={updateHeights}
                className="w-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div
                            ref={(el) => (cardRefs.current[index] = el)}
                            style={{ height: maxHeight ? `${maxHeight}px` : 'auto' }}
                            className="flex items-stretch justify-center"
                        >
                            {component(slide, index)}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="flex justify-center gap-4 mt-8">
                <button
                    ref={prevRef}
                    className="p-3 rounded-full bg-zinc-700 hover:bg-laranja transition-colors shadow-lg text-white"
                >
                    <LucideIcons.ChevronLeft className="w-6 h-6" />
                </button>

                <button
                    ref={nextRef}
                    className="p-3 rounded-full bg-zinc-700 hover:bg-laranja transition-colors shadow-lg text-white"
                >
                    <LucideIcons.ChevronRight className="w-6 h-6" />
                </button>
            </div>
        </div>
    )
}
