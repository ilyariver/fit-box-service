import Header from '../components/layout/header/Header'
import Main from '../components/layout/main/main'
import Footer from '../components/layout/footer/Footer'
import ModalWindow from '../components/shared/modal-window/modal-window'
import CartComponent from '../components/cart-component/cart-component'
import { useTypedSelector } from '../hooks/useTypedSelector'


const Home = () => {
    const { activeModal } = useTypedSelector(modal => modal.modal)

    return (
        <>
            <Header />
            <Main />
            <Footer />
            <ModalWindow active={activeModal}>
                <CartComponent />
            </ModalWindow>
        </>
    )
}

export default Home
