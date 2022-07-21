import React, {FC} from 'react'
import Image from 'next/image'
import style from './cart-component.module.scss'
import dishMin from '../../public/images/dish-min.png'
import arrowIcon from '../../public/images/icons/icon-arrow-right.svg'
import CartDishComponent from '../cart-dish-component/cart-dish-component'
import WeekDaysIndicatorCart from '../shared/week-days-indicator-cart/week-days-indicator'
import { MainButton } from '../shared/mainButton/mainButton'
import OptionsDayBtn from '../shared/options-day-btn/options-day-btn'
import { useActions } from '../../hooks/useAction'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import Link from 'next/link'

const CartComponent = () => {
	const { optionsBtns } = useTypedSelector(btns => btns.program)
	const { modalActive } = useActions()

	return (
		<div className={style['cart-component']}>
			<div className={style['cart-component__left']}>
				<div className={style['cart-component__week']}>
					<WeekDaysIndicatorCart title="ПН" active={true} />
					<WeekDaysIndicatorCart title="ВТ" active={false} />
					<WeekDaysIndicatorCart title="СР" active={false} />
					<WeekDaysIndicatorCart title="ЧТ" active={false} />
					<WeekDaysIndicatorCart title="ПТ" active={false} />
					<WeekDaysIndicatorCart title="СБ" active={false} />
					<WeekDaysIndicatorCart title="ВС" active={false} />
				</div>
				<div className={style['cart-component__title']}>
					Рацион питания на {"понедельник"}
				</div>
				<div className={style['cart-component__dishes']}>
					<div className={style['cart-component__dish-wrap']}>
						<CartDishComponent img={dishMin} title="Омлет с куриным филе" text="куриное филе, молоко, яйца, помидоры, соль, микрозелень" />
					</div>
					<div className={style['cart-component__dish-wrap']}>
						<CartDishComponent img={dishMin} title="Омлет с куриным филе" text="куриное филе, молоко, яйца, помидоры, соль, микрозелень" />
					</div>
					<div className={style['cart-component__dish-wrap']}>
						<CartDishComponent img={dishMin} title="Омлет с куриным филе" text="куриное филе, молоко, яйца, помидоры, соль, микрозелень" />
					</div>
					<div className={style['cart-component__dish-wrap']}>
						<CartDishComponent img={dishMin} title="Омлет с куриным филе" text="куриное филе, молоко, яйца, помидоры, соль, микрозелень" />
					</div>
					<div className={style['cart-component__dish-wrap']}>
						<CartDishComponent img={dishMin} title="Омлет с куриным филе" text="куриное филе, молоко, яйца, помидоры, соль, микрозелень" />
					</div>
					<div className={`${style['cart-component__dish-wrap']} ${style['cart-component__last']}`}>
						<button className={style['next-btn']}>
							<div className={style['next-btn__day']}>Понедельник</div>
							<div className={style['next-btn__arrow']}>
								<Image src={arrowIcon} />
							</div>
						</button>
					</div>
				</div>
			</div>
			<div className={style['cart-component__right']}>
				<button onClick={() => modalActive()} className={style['cart-component__close-btn']} aria-label="Закрыть корзину"></button>
				<div className={style['cart-component__right-title']}>Количество дней</div>
				<div className={style['cart-component__buttons-group']}>
					{
						optionsBtns.map(btn => <OptionsDayBtn
							key={btn.number}
							number={btn.number}
							active={btn.active}/>)
					}
				</div>
				<div className={style['cart-component__cCal']}>1300 Ккал</div>
				<div className={style['cart-component__program']}>Программа питания «Классик»</div>
				<div className={style['cart-component__description']}>
					Пятиразовое питание на 2 000 ккал/день для
					поддержания оптимальной формы при тренировках
					и просто активном образе жизни
				</div>
				<div className={style['cart-component__cost']}>17960 ₽</div>
				<Link href={'/order'}>
					<a>
						<MainButton onClick={() => modalActive()} width="312px" fontSize="18px">Оформить заказ</MainButton>
					</a>
				</Link>
			</div>
		</div>
	)
}

export default CartComponent
