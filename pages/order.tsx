import React from 'react'
import Header from '../components/layout/header/Header'
import CartComponent from '../components/cart-component/cart-component'
import ModalWindow from '../components/shared/modal-window/modal-window'
import { useTypedSelector } from '../hooks/useTypedSelector'
import OrderPage from '../components/layout/order-page/order-page'

const Order = () => {
	const { activeModal } = useTypedSelector(modal => modal.modal)

	return (
		<>
			<Header/>
			<OrderPage />
			<ModalWindow active={activeModal}>
				<CartComponent />
			</ModalWindow>
		</>
	)
}

export default Order
