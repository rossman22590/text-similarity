import { Inter } from 'next/font/google'
import LargeHeading from '@/components/ui/LargeHeading'
import Paragraph from '@/components/ui/Paragraph'

import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Similarity API | Home',
  description: "Similarity API is a free API that allows you to compare two pieces of text and get a similarity score.",
}

export default function Home() {
  return (
    <div className='relative h-screen flex items-center justify-center overflow-x-hidden'>
      <div className='container pt-32 max-w-7xl mx-auto w-full h-full'>
        <div className='h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start'>
          <LargeHeading size='lg' className='three-d text-black dark:text-light-gold'>
            Easily Determine <br/> Text Similarity
          </LargeHeading>

          <Paragraph className='max-w-xl lg:text-left'>
            Similarity API is an API tool that allows you to compare two pieces of text and get a similarity score with a free {''} 
            <Link href='/login' className='underline underline-offset-2 text-black dark:text-light-gold'>
              API Key
            </Link>
            .
          </Paragraph>

          <div className='relative w-full max-w-lg lg:max-w-3xl lg:left-1/2 aspect-square lg:absolute'>
            <Image
            priority
            className='img-shadow'
            quality={100}
            style={{objectFit: 'contain'}}
            fill
            src='/typewriter.png'
            alt='typewriter'/>
          </div>
        </div>
      </div>
    </div>
  )
}
