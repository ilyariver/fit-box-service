import {FC} from 'react'
import Image from 'next/image'
import style from './cart-dish-component.module.scss'
import { CartDishesTypes } from '../../types/cartDishesTypes'

const CartDishComponent: FC<CartDishesTypes> = ({img, title, text}) => {
	return (
		<div className={style['cart-dish-component']}>
			<div className={style['cart-dish-component__img-wrap']}>
				<Image src={img} alt={title} width={279} height={170} placeholder="blur"/>
			</div>
			<div className={style['cart-dish-component__title']} title={title}>{title}</div>
			<div className={style['cart-dish-component__text']} title={title}>{text}</div>
		</div>
	)
}

export default CartDishComponent
