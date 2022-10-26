import React from 'react'
import Header from '../components/layout/header/Header'
import CartComponent from '../components/cart-component/cart-component'
import ModalWindow from '../components/shared/modal-window/modal-window'
import { useTypedSelector } from '../hooks/useTypedSelector'
import OrderPage from '../components/layout/order-page/order-page'

const Order = () => {
	const { activeCartModal } = useTypedSelector(modal => modal.cartModal)

	return (
		<>
			<Header/>
			<OrderPage />
			<ModalWindow active={activeCartModal}>
				<CartComponent />
			</ModalWindow>
		</>
	)
}

export default Order
