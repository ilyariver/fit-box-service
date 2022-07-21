import React from 'react'
import style from './order-page.module.scss'
import OrderFormComponent from '../../order-form-component/order-form-component'

const OrderPage = () => {
	return (
		<div className={style['order-page']}>
			<div className={style['order-page__wrap']}>
				<h1 className={style['order-page__title']}>оформление заказа</h1>
				<OrderFormComponent/>
			</div>
		</div>
	)
}

export default OrderPage
