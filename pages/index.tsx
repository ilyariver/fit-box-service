import Header from '../components/layout/header/Header'
import React, { useEffect } from 'react'
import { useActions } from '../hooks/useAction'


const Home = () => {
    const { dialogModalsActive, citiesContentActive } = useActions()

    useEffect(() => {
        dialogModalsActive(true)
        citiesContentActive(true)
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
