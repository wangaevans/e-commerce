import { useContext, useState } from 'react';
import Link from 'next/link';
import config from '../../config';
import { useRouter } from 'next/router';
import ThemeSwitch from './ThemeSwitch';
import styles from '../../styles/Header.module.css'
import { AiOutlineMenu, AiOutlineClose, AiOutlineShoppingCart, AiOutlineUser, AiOutlineSearch } from 'react-icons/ai'
import ThemeContext from '../../context/ThemeContext';

const Header = () => {
    const [open, setOpen] = useState(false)
    const { currentTheme } = useContext(ThemeContext)
    const handleMenu = () => {
        if (!open) setOpen(true)
        else setOpen(!true)
    }
    const { asPath, pathname } = useRouter()
    return (
        <header className="sticky top-0  z-10 text-gray-800 shadow-sm bg-slate-200 dark:text-white dark:bg-gray-900 p-3 px-5 md:px-[10vmin] flex  items-center justify-between min-h-[80px]">
            <div className="flex items-center">
                <button className='mr-4'  onClick={handleMenu}>
                    {open ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
                </button>
                <h1 className=" font-allroundgothic text-2xl">Base</h1>
            </div>
            <nav className='flex'>
                <ul className={`${open ? styles.active : ''} ${styles.ul} ${currentTheme === 'light' ? styles.light : styles.dark} my-6 text-[1rem]`}>
                    {config.navigationLinks.map(({ link, name }, index) => {
                        const isActive = pathname === link || asPath === link
                        return (
                            <li key={index} className="mr-3">
                                <Link onClick={() => setOpen(false)} href={link} className={`${isActive ? 'text-primary' : ''}  hover:text-primary `}>
                                    {name}
                                </Link>
                            </li>
                        )
                    })}

                </ul>
                <div className="flex items-center space-x-4">
                    <AiOutlineSearch size={22} />
                    <Link href={'/login'}>
                        <AiOutlineUser size={22} />
                    </Link>
                    <Link href={'/cart'}>
                        <AiOutlineShoppingCart size={22} />
                    </Link>
                    <ThemeSwitch size={20} />
                </div>
            </nav>
        </header>
    );
}

export default Header;
