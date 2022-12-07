import React, { FC } from 'react'
import Header from '../../components/layout/header/Header';
import Footer from '../../components/layout/footer/Footer';
import ProfileWrapComponent from '../../components/profile-wrap-component/profile-wrap-component';
import ProfilePage from '../../components/profile-wrap-component/pages/profile-page/profile-page'
import { useTypedSelector } from '../../hooks/useTypedSelector'

const Profile: FC = () => {
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
        <>
            <Header getHomeLink={selectedCity ? '/city/' + selectedCity : '/'} />
            <div style={{paddingTop: '80px'}}>
                <ProfileWrapComponent pageTitle={'Александр Герасимов'} menuItem={'Профиль'}>
                    <ProfilePage />
                </ProfileWrapComponent>
            </div>
            <Footer />
        </>
    )
}

export default Profile
