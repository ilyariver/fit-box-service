import React, { useEffect } from 'react'
import style from './order-page.module.scss'
import OrderFormComponent from '../../order-form-component/order-form-component'
import { useActions } from '../../../hooks/useAction'

const OrderPage = () => {
	useEffect(() => {
		document.body.style.overflowY = ``
	},[])

	return (
		<div className={style['order-page']}>
			<div className="container">
				<div className={style['order-page__wrap']}>
					<h1 className={style['order-page__title']}>оформление заказа</h1>
					<OrderFormComponent/>
				</div>
			</div>
		</div>
	)
}

export default OrderPage
