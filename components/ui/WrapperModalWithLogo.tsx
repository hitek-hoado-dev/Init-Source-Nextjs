import React from 'react'
import Image from 'next/image'
const WrapperModalWithLogo = ({ children } : { children: React.ReactNode }) => {
  return (
    <div className='bg-modalBackground border border-white rounded-[10px] relative px-5 py-[22px]'>
        <div className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2/3 w-[70px] aspect-square rounded-[10px] bg-modalBackground flex items-center justify-center'>
            <Image
                src="/logo-white.png"
                alt='logo white'
                width={50}
                height={53}
            />
        </div>
        {children}
    </div>
  )
}

export default WrapperModalWithLogo