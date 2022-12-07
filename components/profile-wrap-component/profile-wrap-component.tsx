import React, { FC, useState } from 'react'
import Image from 'next/image'
import camera from '../../public/images/icons/camera.svg'
import style from './profile-wrap-component.module.scss'
import Link from 'next/link';
import BlockComponent from '../block-component/block-component';
import InputText from '../shared/input-text/input-text';
import Input from 'react-phone-number-input/input'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useAction'
import InputPhone from '../shared/input-phone/input-phone'

interface ProfileTypes {
    children: React.ReactNode
    pageTitle: string
    menuItem: string
}
const ProfileWrapComponent: FC<ProfileTypes> = ({children, pageTitle, menuItem}) => {
    const menu = [
        {title: 'Профиль', link: '/profile/'},
        {title: 'Заказы', link: '/profile/orders'},
        {title: 'Бонусы', link: '/profile/bonuses'},
        {title: 'Пригласить друга', link: '/profile/invite'},
    ]

    const {
        cities
    } = useTypedSelector(modal => modal.selectedCity)

    const selectedCity = cities.reduce((acc, city) => {
        if (city.active) {
            acc = city.link
        }
        return acc
    }, '')

    return (
        <section className={style.section}>
            <div className="container">
                <div className={style.content}>
                    <div className={style.left_panel}>
                        <div className={style.top}>
                            <input type="file" className={style.avatar} />
                            <ul className={style.menu_list}>
                                {
                                    menu.map(item =>
                                        <li key={item.title}
                                            className={`${style.menu_item} ${menuItem === item.title ? style.active : ''}`}>
                                            <Link href={item.link} className={style.menu_link}>{ item.title }</Link>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                        <Link href={'/city/' + selectedCity}>
                            <a className={style.log_out}>Выйти</a>
                        </Link>
                    </div>
                    <div className={style.right_content}>
                        <h1 className={style.title}>{pageTitle}</h1>
                        <div className={style.wrap}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProfileWrapComponent
