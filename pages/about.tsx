import React, { FC } from 'react'
import Footer from '../components/layout/footer/Footer'
import Header from '../components/layout/header/Header'
import CartComponent from '../components/cart-component/cart-component'
import ModalWindow from '../components/shared/modal-window/modal-window'
import { useTypedSelector } from '../hooks/useTypedSelector'
import AboutPage from '../components/layout/about-page/about-page'

const About: FC = () => {
	const { activeCartModal } = useTypedSelector(modal => modal.cartModal)

	return (
		<>
			<Header />
			<AboutPage />
			<Footer />
			<ModalWindow active={activeCartModal}>
				<CartComponent />
			</ModalWindow>
		</>
	)
}

export default About
