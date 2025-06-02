"use client"

import { Avatar } from '@/components/ui/Avatar';
import { NavigationMenuGrid, NavigationMenuItem } from '@/components/ui/NavigationMenuGrid';
import { APP_ROUTE } from '@/constants/routes';
import { STORAGES } from '@/constants/storages';
import { clearCookie, getCookie } from '@/utils/cookie';
import * as Dialog from '@radix-ui/react-dialog';
// import { useTranslations } from 'next-intl';
import Modal from '@/components/ui/Modal';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { drawerWidth, menuItems } from '../constants';
import FormLogin from './FormLogin';

const Header = () => {
    const router = useRouter();
    const [isOpenSidebar, setIsOpenSidebar] = useState(false);
    const token = getCookie(STORAGES.ACCESS_TOKEN);
    const [isOpenModalLogin, setIsOpenModalLogin] = useState(false);
    // const t = useTranslations("Header");
    // const isSupportLanguage = process.env.NEXT_PUBLIC_IS_SUPPORT_LANGUAGE === "TRUE";

    const navigationMenuItems: NavigationMenuItem[] = [
        { label: 'Journal', href: APP_ROUTE.journal },
        { label: 'Handbooks', href: APP_ROUTE.handbook },
        { label: 'Profiles', href: APP_ROUTE.profile },
        { label: 'Shop', href: APP_ROUTE.shop },
        { label: 'Repository', href: APP_ROUTE.repository },
        { label: 'Glossary', href: APP_ROUTE.glossary },
        { label: 'About Us', href: APP_ROUTE.aboutUs },
        { label: '', href: '' },
    ];

    const handleLogout = () => {
        clearCookie(STORAGES.ACCESS_TOKEN);
        router.push(APP_ROUTE.login);
    }

    const handleOpenModalLogin = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setIsOpenModalLogin(true);
    }

    return (

        <>
            <header className="bg-backgroundGrey px-[106px] py-1.5">
                <div className="flex items-center justify-between">

                    <div className="flex items-center gap-[48px]">

                        <div className='flex items-center cursor-pointer' onClick={() => router.push(APP_ROUTE.home)}>
                            <Image
                                src={"/logo.png"}
                                alt='logo'
                                width={64}
                                height={64}
                                className='cursor-pointer'
                            />
                            <Image
                                src={"/logo-text.svg"}
                                alt='logo text'
                                width={165}
                                height={51}
                                className='cursor-pointer'
                            />
                        </div>

                        <NavigationMenuGrid items={navigationMenuItems} />

                        <div className='flex items-center gap-3'>

                            <Image
                                src={"/logo-header-2.png"}
                                alt='logo header'
                                width={50}
                                height={50}
                            />

                            <div className='flex flex-col items-start gap-1'>

                                <div className='flex items-center gap-[7px]'>
                                    <span className='text-black text-base leading-1.5'>
                                        21:21:21
                                    </span>
                                    <button>
                                        <Image
                                            src={"/icons/arrow-down-circle-fill.svg"}
                                            alt='arrow down'
                                            width={16}
                                            height={16}
                                            className='cursor-pointer'
                                        />
                                    </button>
                                </div>
                                
                                <p className='text-black leading-[1.8] text-[10px] font-inter'>
                                    <span className='text-[12px] font-inter'>
                                        APRIL 25, 2025
                                    </span>
                                    <br />
                                    <span className='text-[#f00] font-bold'>
                                        Sunday
                                    </span>
                                    <span>
                                        {" " + "of" + " "}
                                    </span>
                                    <span className='font-bold'>
                                        Week 17
                                    </span>
                                </p>

                            </div>
                        </div>

                    </div>

                    <div className='flex items-center gap-3'>
                        <div className='flex flex-col items-end gap-1'>

                            <div className='flex items-center gap-3'>
                                <button>
                                    <Image
                                        src={"/icons/search-icon-1.svg"}
                                        alt='search icon'
                                        width={15}
                                        height={20}
                                        className='cursor-pointer'
                                    />
                                </button>
                                <button>
                                    <Image
                                        src={"/icons/shop.svg"}
                                        alt='shop icon'
                                        width={23}
                                        height={20}
                                        className='cursor-pointer'
                                    />
                                </button>
                                <button>
                                    <Image
                                        src={"/icons/global.svg"}
                                        alt='global icon'
                                        width={20}
                                        height={20}
                                        className='cursor-pointer'
                                    />
                                </button>
                                <button onClick={handleLogout}>
                                    <Image
                                        src={"/icons/login-circle.svg"}
                                        alt='login circle icon'
                                        width={20}
                                        height={20}
                                        className='cursor-pointer'
                                    />
                                </button>
                            </div>

                            <p className='text-[10px] font-inter leading-[1.6] text-black'>
                                <a 
                                    className='font-bold'
                                    onClick={e => handleOpenModalLogin(e)}
                                    href='#'
                                >
                                    Sign in
                                </a>
                                {" " + "or" + " "}
                                <a href={APP_ROUTE.signup} className='font-bold'>
                                    Become a Member
                                </a>
                            </p>

                        </div>

                        {token && (
                            <div className='ml-3'>
                                <Avatar 
                                    src="/next.svg"
                                />
                            </div>
                        )}
                    </div>

                </div>

                <Dialog.Root open={isOpenSidebar} onOpenChange={setIsOpenSidebar}>
                    <Dialog.Portal>
                        <Dialog.Content 
                            className="bg-white fixed top-[64px] left-0 h-full shadow-md" 
                            style={{ width: drawerWidth, padding: 0 }}
                        >
                            <nav className="w-full">
                                <ul className="w-full">
                                    {menuItems.map((item) => (
                                        <li 
                                            key={item.path} 
                                            className="w-full hover:bg-gray-100"
                                        >
                                            <button 
                                                className="w-full text-left px-4 py-3 border-b border-gray-200"
                                                onClick={() => {
                                                    router.push(item.path);
                                                    setIsOpenSidebar(false);
                                                }}
                                            >
                                                {item.label}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </Dialog.Content>
                    </Dialog.Portal>
                </Dialog.Root>
            </header>

            <Modal
                open={isOpenModalLogin}
                title='sign in'
                onOpenChange={() => setIsOpenModalLogin(false)}
                content={<FormLogin />}
            />
        </>
    )
}

export default Header