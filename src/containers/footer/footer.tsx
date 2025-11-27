'use client'

import Content from '@/components/content'
import Paragraph from '@/components/paragraph'
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { logoCerberusVerticalHomeImg } from '../../../public/public-modules';
import useLocale from '@/base-components/useLocale';
import en from './dictionaries/en.json';
import pt from './dictionaries/pt.json';

function Footer() {
    const { lang } = useLocale()
    const dict: any = lang === 'pt' ? pt : en
    return (
        <footer className="relative flex justify-center items-center w-full px-12 z-[21] bg-white text-black ">
            <Content id='footer'>
                <div className='flex gap-24 lg:flex-row flex-col items-center'>
                    <Image src={logoCerberusVerticalHomeImg} alt={''} className='w-32 '></Image>
                    <div className=' flex-1 flex flex-col gap-3 justify-center'>
                        <span className='font-semibold'>
                            <Link href="/politicas-de-privacidade" className="hover:text-laranja transition-colors">{dict.privacy}</Link>
                            {' | '}
                            <Link href="/politicas-de-privacidade" className="hover:text-laranja transition-colors">{dict.codeOfConduct}</Link>
                            {' | '}
                            <Link href="/canal-de-denuncias" className="hover:text-laranja transition-colors">{dict.whistleblower}</Link>
                        </span>
                        <span className='text-azul-médio font-semibold'>{dict.copyright}</span>
                    </div>
                </div>
            </Content>
        </footer >
    )
}

export default Footer