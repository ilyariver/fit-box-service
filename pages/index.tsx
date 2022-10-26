import Header from '../components/layout/header/Header'
import Main from '../components/layout/main/main'
import Footer from '../components/layout/footer/Footer'
import ModalWindow from '../components/shared/modal-window/modal-window'
import CartComponent from '../components/cart-component/cart-component'
import { useTypedSelector } from '../hooks/useTypedSelector'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useActions } from '../hooks/useAction'


const Home = () => {
    const { activeSelectCityModal } = useTypedSelector(modal => modal.dialogModals)
    const router = useRouter()
    const { dialogModalsActive } = useActions()

    useEffect(() => {
        dialogModalsActive(true)
    },[])

    return (
        <>
            <Header />
            {/*<Main />*/}
            {/*<Footer />*/}
            {/*<ModalWindow active={activeModal}>*/}
            {/*    <CartComponent />*/}
            {/*</ModalWindow>*/}
        </>
    )
}

export default Home
