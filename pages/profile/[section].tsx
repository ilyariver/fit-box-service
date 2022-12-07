import React, { FC } from 'react'
import Header from '../../components/layout/header/Header'
import ProfileWrapComponent from '../../components/profile-wrap-component/profile-wrap-component'
import Footer from '../../components/layout/footer/Footer'
import { useRouter } from 'next/router'
import OrdersPage from '../../components/profile-wrap-component/pages/orders-page/orders-page'
import BonusesPage from '../../components/profile-wrap-component/pages/bonuses-page/bonuses-page'
import InvitePage from '../../components/profile-wrap-component/pages/invite-page/invite-page'
import { useTypedSelector } from '../../hooks/useTypedSelector'


const ProfileSection: FC = () => {
    const router = useRouter()
    const {
        cities
    } = useTypedSelector(modal => modal.selectedCity)

    const menu = [
        {title: 'Заказы', link: 'orders'},
        {title: 'Бонусы', link: 'bonuses'},
        {title: 'Пригласить друга', link: 'invite'},
    ]

    const currentNamePage = menu.reduce((acc, url) => {
        if (url.link === router.query.section) {
            acc = url.title
        }
        return acc
    }, '')

    const selectedCity = cities.reduce((acc, city) => {
        if (city.active) {
            acc = city.link
        }
        return acc
    }, '')

    return (
        <>
            <Header getHomeLink={selectedCity ? '/city/' + selectedCity : '/'} />
            <ProfileWrapComponent pageTitle={currentNamePage} menuItem={currentNamePage}>
                {router.query.section === 'orders' && <OrdersPage/>}
                {router.query.section === 'bonuses' && <BonusesPage/>}
                {router.query.section === 'invite' && <InvitePage/>}
            </ProfileWrapComponent>
            <Footer />
        </>
    )
}

export default ProfileSection
