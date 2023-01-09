import {FC} from 'react'
import style from './cart-dish-component.module.scss'
import { CartDishesTypes } from '../../types/cartDishesTypes'

const CartDishComponent: FC<CartDishesTypes> = ({img, title, text, idx}) => {
	return (
		<div className={style['cart-dish-component']} data-aos-duration="300" data-aos="flip-left" data-aos-delay={idx * 50}>
			<div className={style['cart-dish-component__img-wrap']}>
				<img src={img} alt={title}/>
			</div>
			<div className={style['cart-dish-component__title']} title={title}>{title}</div>
			<div className={style['cart-dish-component__text']} title={title}>{text}</div>
		</div>
	)
}

export default CartDishComponent
