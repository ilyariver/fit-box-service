import React, { FC } from 'react'
import Footer from '../components/layout/footer/Footer'
import Header from '../components/layout/header/Header'
import CartComponent from '../components/cart-component/cart-component'
import ModalWindow from '../components/shared/modal-window/modal-window'
import { useTypedSelector } from '../hooks/useTypedSelector'
import DeliveryPage from '../components/layout/delivery-page/delivery-page'

const Delivery: FC = () => {
	const { activeCartModal } = useTypedSelector(modal => modal.cartModal)

	return (
		<>
			<Header />
			<DeliveryPage />
			<Footer />
			<ModalWindow active={activeCartModal}>
				<CartComponent />
			</ModalWindow>
		</>
	)
}

export default Delivery
