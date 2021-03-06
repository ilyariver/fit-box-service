import React, { FC, useEffect, useState } from 'react'
import Image from 'next/image'
import style from './cart-component.module.scss'
import arrowIcon from '../../public/images/icons/icon-arrow-right.svg'
import CartDishComponent from '../cart-dish-component/cart-dish-component'
import WeekDaysIndicatorCart from '../shared/week-days-indicator-cart/week-days-indicator'
import { MainButton } from '../shared/mainButton/mainButton'
import OptionsDayBtn from '../shared/options-day-btn/options-day-btn'
import { useActions } from '../../hooks/useAction'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import Link from 'next/link'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { ProgramMenuList } from '../../types/programTypes'


const CartComponent = () => {
	const largeScreen = 1200
	const { optionsBtns, cart, choiceWeek } = useTypedSelector(btns => btns.program)
	const { modalActive } = useActions()
	const [widthCart, setWidthCart] = useState(false)
	const [activeSwiper, setActiveSwiper] = useState(false)
	let currentWeekDay: ProgramMenuList[] = []

	choiceWeek
		.forEach(item => {
			item.days.forEach(weekday => {
				if (weekday.active && weekday.menu)
					return currentWeekDay = weekday.menu
			})
		})

	console.log('cart', cart)

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
						choiceWeek.map(day => {
							return day.days.map(weekday => {
								return <WeekDaysIndicatorCart
									key={weekday.title.min}
									title={weekday.title.min}
									active={weekday.active}
									classList={style.weekday} />
							})
						})
					}
				</div>
				{
					choiceWeek.map(day => {
						return day.days.map(weekday => {
							if (weekday.active) {
								return <div key={weekday.title.full} className={style['cart-component__title']}>
									Рацион питания на {weekday.title.full}
								</div>
							}
						})
					})
				}

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
							currentWeekDay.map((dish,idx) => {
								return (
									5 >= idx && <SwiperSlide key={dish.id}>
										<div className={style['cart-component__dish-wrap']}>
											<CartDishComponent
												img={dish.minImg}
												title={dish.title}
												text={dish.productComposition}/>
										</div>
									</SwiperSlide>
								)
							})
						}
						{
							currentWeekDay.map((dish,idx) => {
								return (
									dish.id === currentWeekDay.length && <SwiperSlide key={dish.id}>
										<div className={style['cart-component__dish-wrap']}>
											<button className={style['next-btn']}>
												<div className={style['next-btn__day']}>Следующая программа</div>
												<div className={style['next-btn__arrow']}>
													<Image src={arrowIcon} />
												</div>
											</button>
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
						<MainButton onClick={() => modalActive()} width="312px" fontSize="18px">
						  Оформить заказ
						</MainButton>
					</a>
				</Link> }
			</div>
		</div>
	)
}

export default CartComponent
