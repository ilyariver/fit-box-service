import Header from '../components/layout/header/Header'
import React, { useEffect } from 'react'
import { useActions } from '../hooks/useAction'
import Main from '../components/layout/main/main'
import Footer from '../components/layout/footer/Footer'
import ModalWindow from '../components/shared/modal-window/modal-window'
import CartComponent from '../components/cart-component/cart-component'
import { useTypedSelector } from '../hooks/useTypedSelector'


const Home = () => {
    const { dialogModalsActive, citiesContentActive } = useActions()
    const { activeCartModal } = useTypedSelector(modal => modal.cartModal)
    useEffect(() => {
        dialogModalsActive(false)
        citiesContentActive(false)
    },[])

    return (
        <>
            <Header />
            <Main />
            <Footer />
            <ModalWindow active={activeCartModal}>
                <CartComponent />
            </ModalWindow>
        </>
    )
}

export default Home
