import React, { FC } from 'react'
import Header from '../../components/layout/header/Header';
import Footer from '../../components/layout/footer/Footer';
import ProfileContentComponent from '../../components/profile-content-component/profile-content-component';

const Profile: FC = () => {
    return (
        <>
            <Header />
            <div style={{paddingTop: '80px'}}>
                <ProfileContentComponent />
            </div>
            <Footer />
        </>
    )
}

export default Profile
