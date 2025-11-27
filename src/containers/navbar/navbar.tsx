"use client"

import { useEffect, useState } from 'react'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { cerberusLogoHomeImg, brazilFlagHomeImg, unitedStatesOfAmericaHomeImg } from "../../../public/public-modules"
import useLocale from '@/base-components/useLocale'
import en from './dictionaries/en.json'
import pt from './dictionaries/pt.json'
import Content from '@/components/content'

function Navbar() {
  const [navStyle, setNavStyle] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { setLanguage, lang } = useLocale()

  useEffect(() => {
    const handleScroll = () => {
      setNavStyle(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (href: string) => pathname === href

  function handleLocaleChange(lang: string) {
    setLanguage(lang as "en" | "pt")
    window.location.reload()
  }

  const handleLinkClick = (newLang?: string) => {
    setMobileMenuOpen(false)
    if (newLang) {
      handleLocaleChange(newLang)
    }
  }

  const dict: any = lang === 'pt' ? pt : en

  return (
    <nav className={"fixed w-screen transition flex justify-center items-center z-40 px-12 " + (navStyle ? 'bg-white shadow-lg text-black' : 'bg-white')}>
      <Content variation='no-space' id={''} >
        <div className='flex justify-between h-24 items-center'>
          <div className='flex items-center gap-6 flex-1'>
            <Image src={cerberusLogoHomeImg} className="w-44 transition-all" alt="" />
          </div>
          <div className="flex items-center w-fit justify-between lg:justify-end gap-x-12 font-semibold">
            {/* Links e botões para telas grandes (lg:flex) */}
            <Link href="/home" className={`hidden lg:flex h-10 flex-col justify-center ${isActive('/home') ? 'text-laranja' : ''}`}>
              <span className="text-md">{dict.home}</span>
            </Link>
            <Link href="/plataforma" className={`hidden lg:flex h-10 flex-col justify-center ${isActive('/plataforma') ? 'text-laranja' : ''}`}>
              <span className="text-md">{dict.platform}</span>
            </Link>
            <Link href="/quem-somos" className={`hidden lg:flex h-10 flex-col justify-center ${isActive('/quem-somos') ? 'text-laranja' : ''}`}>
              <span className="text-md">{dict.about}</span>
            </Link>
            <Link href="/contato" className={`hidden lg:flex h-10 flex-col justify-center ${isActive('/contato') ? 'text-laranja' : ''}`}>
              <span className="text-md">{dict.contact}</span>
            </Link>
            <button onClick={() => handleLocaleChange("en")} className="hidden lg:flex h-10 justify-center gap-3 items-center">
              <Image src={unitedStatesOfAmericaHomeImg} className="w-9 h-9 transition-all" alt="Bandeira dos Estados Unidos" />
              <span className="text-md">{dict.langEn}</span>
            </button>
            <button onClick={() => handleLocaleChange("pt")} className="hidden lg:flex h-10 justify-center gap-3 items-center">
              <Image src={brazilFlagHomeImg} className="w-9 h-9 transition-all" alt="Bandeira do Brasil" />
              <span className="text-md">{dict.langPt}</span>
            </button>

            {/* Botão de abrir menu mobile (lg:hidden) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className={`lg:hidden -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 transition-all text-gray-700`}
            >
              <span className="sr-only">Abrir menu principal</span>
              {/* O stroke precisa ser ajustado com base em navStyle, como no componente de referência */}
              <svg className={`h-7 w-9 ${navStyle ? 'stroke-black' : 'stroke-black'}`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </Content>

      {/* --- Menu Mobile --- */}
      <div className={`fixed justify-end w-full flex top-0 h-screen transition-all ${mobileMenuOpen ? "left-0" : "left-full"}`}>
        <div className="lg:hidden w-full h-full flex" role="dialog" aria-modal="true">
          <div onClick={() => setMobileMenuOpen(false)} className='flex-1'></div>
          <div className="inset-y-0 right-0 h-full w-full overflow-y-auto bg-white text-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between ">
              <Link href="/home" onClick={() => setMobileMenuOpen(false)} className="-m-1.5 p-1.5">
                {/* Logo no mobile */}
                <Image src={cerberusLogoHomeImg} className="w-40 transition-all" alt="" />
              </Link>
              <button onClick={() => setMobileMenuOpen(false)} type="button" className="-m-2.5 rounded-md p-2.5 ">
                <span className="sr-only">Fechar menu</span>
                <svg className="h-6 w-6 " fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <hr className='my-6' />
            <div className="flex flex-col gap-6 ">
              <Link href="/home" onClick={() => handleLinkClick()} className={`flex h-10 flex-col justify-center ${isActive('/home') ? 'text-laranja' : ''}`}>
                <span className="text-md">{dict.home}</span>
              </Link>
              <Link href="/plataforma" onClick={() => handleLinkClick()} className={`flex h-10 flex-col justify-center ${isActive('/plataforma') ? 'text-laranja' : ''}`}>
                <span className="text-md">{dict.platform}</span>
              </Link>
              <Link href="/quem-somos" onClick={() => handleLinkClick()} className={`flex h-10 flex-col justify-center ${isActive('/quem-somos') ? 'text-laranja' : ''}`}>
                <span className="text-md">{dict.about}</span>
              </Link>
              <Link href="/contato" onClick={() => handleLinkClick()} className={`flex h-10 flex-col justify-center ${isActive('/contato') ? 'text-laranja' : ''}`}>
                <span className="text-md">{dict.contact}</span>
              </Link>
            </div>
            <hr className='my-6' />
            <div className="flex flex-col gap-6 ">
              <button onClick={() => handleLinkClick("en")} className="flex h-10 justify-start gap-3 items-center">
                <Image src={unitedStatesOfAmericaHomeImg} className="w-9 h-9 transition-all" alt="Bandeira dos Estados Unidos" />
                <span className="text-md">{dict.langEn}</span>
              </button>
              <button onClick={() => handleLinkClick("pt")} className="flex h-10 justify-start gap-3 items-center">
                <Image src={brazilFlagHomeImg} className="w-9 h-9 transition-all" alt="Bandeira do Brasil" />
                <span className="text-md">{dict.langPt}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav >
  )
}

export default Navbar