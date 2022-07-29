import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useActions } from '../../../hooks/useAction'
import style from './Header.module.scss'
import { state } from '../../../mockDate'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import CartButton from '../../shared/cart-button/cart-button'

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
            <div className={style.fixed_cart}>
                <CartButton quantity={cart.length} className={style.cart_number} onClick={() => modalActive()}/>
            </div>

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
                        aria-label="Открыть меню"> </button>
                    <div className={`${style.header_content} ${transition ? style.active : ''}`}>
                        <div className={style.header_right}>
                            <div className={style.left_menu}>
                                <div className={style.phone_number}>
                                    <a className={style.phone_link} href={state.header.tel.link}>
                                        <Image alt="Телефон" className={style.phone_icon} src={state.header.tel.icon} width={17}
                                               height={17}/>
                                        <div className={style.phone_text}>8 900 999 99 99</div>
                                    </a>
                                </div>
                                <button className={style.geo}>
                                    <Image alt="Локация" className={style.geo_icon} src={state.header.location.icon} width={17}
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
                        <CartButton
                            onClick={() => {
                                openRightMenu()
                                modalActive()
                            }}
                            quantity={cart.length}/>
                    </div>
                </div>
            </header>
        </>
   )
}

export default Header
