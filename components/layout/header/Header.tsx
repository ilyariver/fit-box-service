import React, { FC, MouseEvent, useEffect, useState } from 'react'
import Link from 'next/link'
import { useActions } from '../../../hooks/useAction'
import style from './Header.module.scss'
import { state } from '../../../mockDate'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import CartButton from '../../shared/cart-button/cart-button'
import Modals from '../../shared/modals/modals'
import { useRouter } from 'next/router'
import { Cities } from '../../../types/selectCityTypes'
import ModalCitiesContent from '../../shared/modal-cities-content/modal-cities-content'
import ModalLoginContent from '../../shared/modal-login-content/modal-login-content'
import ModalEnterPasswordContent from '../../shared/modal-enter-password-content/modal-enter-password-content'
import ModalOrderCallContent from '../../shared/modal-order-call-content/modal-order-call-content'
import { orderModalActive } from '../../../store/actions-creators/modal'

interface HeaderTypes {
    getHomeLink?: string
}

const Header: FC<HeaderTypes> = ({ getHomeLink }) => {
    const [openMenu, setOpenMenu] = useState<boolean>(false)
    const [transition, setTransition] = useState<boolean>(false)
    const [activeHeader, setActiveHeader] = useState<boolean>(false)
    const [setCity, setSetCity] = useState<Cities[]>([])
    const router = useRouter()
    const {
        cartModalActive,
        dialogModalsActive,
        loginContentActive,
        citiesContentActive,
        orderModalActive,
    } = useActions()

    const { cart } = useTypedSelector(cartList => cartList.program)
    const { cities } = useTypedSelector(modal => modal.selectedCity)
    const {
        activeDialogModal,
        activeCitiesContent,
        activeEnterSMSContent,
        activeLoginContent,
        activeOrderCallContent
    } = useTypedSelector(modal => modal.dialogModals)

    const openRightMenu = () => {
        debugger
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

    useEffect(() => {
        if (router.asPath) {
            dialogModalsActive(false)
        }
    }, [])

    useEffect(() => {
        const hasSelectedCity = cities.filter(city => city.link === router.query.city)
        citiesContentActive(false)
        if (hasSelectedCity.length !== 0) {
            setSetCity(hasSelectedCity)
        }
    }, [router, cities])

    function getPath(link: string) {
        return link.includes('https')  ? link : '/' + link
    }

    return (
        <>
            <div className={style.fixed_cart}>
                <CartButton quantity={cart.length} className={style.cart_number} onClick={() => cartModalActive()}/>
            </div>

            <header className={`${style.header} ${activeHeader ? style.active : ''}`}>
                <div className={`container ${style.container}`}>
                    <div className={style.logo}>
                        <Link href="/">
                            <a>
                                <img src={state.header.logo.img} alt={state.header.logo.alt} width={131} height={33}/>
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
                                    <a className={style.phone_link} href={'tel:' + state.header.tel.link}>
                                        <img alt="Телефон" className={style.phone_icon} src={state.header.tel.icon} width={17}
                                               height={17}/>
                                        <div className={style.phone_text}>8 900 999 99 99</div>
                                    </a>
                                </div>
                                <div className={style.geo}>
                                    <div className={style.geo_cities}>
                                        <button
                                            onClick={() => {
                                                dialogModalsActive(!activeDialogModal)
                                                citiesContentActive(!activeCitiesContent)
                                            }}
                                            className={style.city}>
                                            {setCity.length === 0 && <span>Выберите город</span>}
                                            {setCity.map(city =>
                                                city.title && <span key={city.title}>{city.title}</span>
                                            )}
                                        </button>
                                    </div>
                                </div>
                                <button className={style.callback_btn} onClick={() => {
                                    orderModalActive(!activeOrderCallContent)
                                    dialogModalsActive(!activeDialogModal)
                                }}>Заказать звонок</button>
                            </div>
                        </div>
                        <nav className={style.navigator}>
                            <ul className={style.navigator_list}>
                                {state.header.navigation.map(item => {
                                   return (
                                       <li onClick={() => openRightMenu()} key={item.title} className={style.navigator_item}>
                                           <Link href={getPath(item.link)} className={style.navigator_link}>
                                               <a target={item.target ? '_blank' : ''}>
                                                   {item.title}
                                               </a>
                                           </Link>
                                       </li>
                                        )
                                    })
                                }
                            </ul>
                        </nav>
                        <div className={style.enter_account}>
                            <Link href={'#'}>
                                <a className={style.enter_account_btn} onClick={() => {
                                    dialogModalsActive(!activeDialogModal)
                                    loginContentActive(!activeLoginContent)
                                }}>
                                    Личный кабинет
                                </a>
                            </Link>
                        </div>
                        <CartButton
                            onClick={() => {
                                openRightMenu()
                                cartModalActive()
                            }}
                            quantity={cart.length}/>
                    </div>
                </div>
            </header>
            <Modals
                active={activeDialogModal}
                // active={true}
            >
                { activeCitiesContent && <ModalCitiesContent /> }
                { activeLoginContent && <ModalLoginContent /> }
                { activeEnterSMSContent && <ModalEnterPasswordContent /> }
                { activeOrderCallContent && <ModalOrderCallContent /> }
                {/*{ activeEnterSMSContent && <ModalEnterPasswordContent/> }*/}

            </Modals>
        </>
   )
}

export default Header
