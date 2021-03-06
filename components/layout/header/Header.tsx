import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useActions } from '../../../hooks/useAction'
import style from './Header.module.scss'
import { state } from '../../../mockDate'
import { useTypedSelector } from '../../../hooks/useTypedSelector'

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const [transition, setTransition] = useState(false)
    const [activeHeader, setActiveHeader] = useState(false)
    const { modalActive } = useActions()
    const { cart } = useTypedSelector(cartList => cartList.program)

    const openRightMenu = () => {
        setOpenMenu(!openMenu)

        setTimeout(() => {
            setTransition(!transition)
        }, 0)
    }

    const handleScroll = () => {
        if ( window.scrollY > 330 ) {
            setActiveHeader(true)
        } else {
            setActiveHeader(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    })

    return (
        <>
            <header className={`${style.header} ${activeHeader ? style.active : ''}`}>
                <div className={`container ${style.container}`}>
                    <div className={style.logo}>
                        <Link href="/">
                            <a>
                                <Image src={state.header.logo.img} alt={state.header.logo.alt} width={70} height={47}/>
                            </a>
                        </Link>
                    </div>
                    <button
                        onClick={openRightMenu}
                        className={style.burger}
                        aria-label="Открыть меню"></button>
                    <div className={`${style.header_content} ${transition ? style.active : ''}`}>
                        <div className={style.header_right}>
                            <div className={style.left_menu}>
                                <div className={style.phone_number}>
                                    <a className={style.phone_link} href={state.header.tel.link}>
                                        <Image className={style.phone_icon} src={state.header.tel.icon} width={17}
                                               height={17}/>
                                        <div className={style.phone_number}>8 900 999 99 99</div>
                                    </a>
                                </div>
                                <button className={style.geo}>
                                    <Image className={style.geo_icon} src={state.header.location.icon} width={17}
                                           height={17}/>
                                    <div className={style.geo_cities}>
                                        {state.header.location.cities.map(city =>
                                            <div key={city} className={style.city}>{city}</div>)}
                                    </div>
                                </button>
                                <button className={style.callback_btn}>Заказать звонок</button>
                            </div>
                        </div>
                        <nav className={style.navigator}>
                            <ul className={style.navigator_list}>
                                {state.header.navigation.map(item => <li onClick={() => openRightMenu()} key={item.title} className={style.navigator_item}>
                                    <Link href={item.link} className={style.navigator_link}>{item.title}</Link>
                                </li>)}
                            </ul>
                        </nav>
                        <button
                            onClick={() => {
                                openRightMenu()
                                modalActive()
                            }}
                            className={style.cart_btn}>
                            <span className={`${style.quantity_of_goods} ${cart.length !== 0 ? style.active : ''}`}>{cart.length}</span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"
                                    stroke="#FF576A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path
                                    d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"
                                    stroke="#FF576A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path
                                    d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"
                                    stroke="#FF576A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </header>
        </>
   )
}

export default Header
