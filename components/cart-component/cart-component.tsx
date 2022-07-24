import React, { FC, useEffect, useState } from 'react'
import Image from 'next/image'
import style from './cart-component.module.scss'
import dishMin from '../../public/images/dish-min.png'
import dishMin2 from '../../public/images/dish-min2.png'
import arrowIcon from '../../public/images/icons/icon-arrow-right.svg'
import CartDishComponent from '../cart-dish-component/cart-dish-component'
import WeekDaysIndicatorCart from '../shared/week-days-indicator-cart/week-days-indicator'
import { MainButton } from '../shared/mainButton/mainButton'
import OptionsDayBtn from '../shared/options-day-btn/options-day-btn'
import { useActions } from '../../hooks/useAction'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import Link from 'next/link'
import { state } from '../../mockDate'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'


const CartComponent = () => {
	const largeScreen = 1200
	const { optionsBtns } = useTypedSelector(btns => btns.program)
	const { modalActive } = useActions()
	const [widthCart, setWidthCart] = useState(false)
	const [activeSwiper, setActiveSwiper] = useState(false)

	const updateDimensions = () => {
		if (typeof typeof window !== 'undefined') {
			if (window.innerWidth > largeScreen) {
				setActiveSwiper(false)
			} else {
				setActiveSwiper(true)
			}
		}
	}

	useEffect(() => {
		setWidthCart(window.innerWidth < largeScreen)
		if (typeof typeof window !== 'undefined') {
			window.addEventListener('resize', updateDimensions)
			return () => window.removeEventListener('resize', updateDimensions)
		}
	},[])

	return (
		<div className={style['cart-component']}>
			{ (widthCart || activeSwiper) && <Link href={'/order'}>
			  		<a>
					  <MainButton className={style.main_button}>Оформить заказ</MainButton>
				  	</a>
				</Link> }
			<div className={style['cart-component__left']}>
				<div className={style['cart-component__week']}>
					{
						state.weekDays.map(weekday =>
							<WeekDaysIndicatorCart
								key={weekday.title}
								title={weekday.title}
								active={weekday.active}
								classList={style.weekday} />)
					}
				</div>
				<div className={style['cart-component__title']}>
					Рацион питания на {"понедельник"}
				</div>
				<div className={style['cart-component__dishes']}>
					<Swiper
						enabled={true}
						modules={[Navigation]}
						slidesPerView={1}
						spaceBetween={0}
						navigation
						className="mySwiper"
						breakpoints={{
							1200: {
								enabled: false,
								slidesPerView: 5,
								spaceBetween:35,
							}
						}}
					>
						{
							[1,2,3,4,5,6].map(dish => {
								return (
									<SwiperSlide key={dish}>
										<div className={style['cart-component__dish-wrap']}>
											{ dish !== 6 && <CartDishComponent img={dishMin2} title="Омлет с куриным филе"
																text="куриное филе, молоко, яйца, помидоры, соль, микрозелень"/> }
											{ dish === 6 && <button className={style['next-btn']}>
												<div className={style['next-btn__day']}>Понедельник</div>
												<div className={style['next-btn__arrow']}>
													<Image src={arrowIcon} />
												</div>
											</button> }
										</div>
									</SwiperSlide>
								)
							})
						}
					</Swiper>
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
				<div className={style['cart-component__info']}>
					<div className={style['cart-component__about-plan']}>
						<div className={style['cart-component__program']}>Программа питания<br />«Классик»</div>
						<div className={style['cart-component__description']}>
							Пятиразовое питание на 2 000 ккал/день для
							поддержания оптимальной формы при тренировках
							и просто активном образе жизни
						</div>
					</div>
					<div className={style['cart-component__cost']}>17960 ₽</div>
				</div>
				{ (!widthCart && !activeSwiper) && <Link href={'/order'}>
					<a>
						<MainButton onClick={() => modalActive()} width="312px" fontSize="18px">Оформить
							заказ</MainButton>
					</a>
				</Link> }
			</div>
		</div>
	)
}

export default CartComponent
