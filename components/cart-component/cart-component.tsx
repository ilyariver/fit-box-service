import React, {useEffect, useState } from 'react'
import style from './cart-component.module.scss'
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
import NextProgramButton from '../shared/next-program-button/next-program-button'


const CartComponent = () => {
	const largeScreen = 1199.98
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
							currentWeekDay.map(dish => {
								return (
									dish.id === currentWeekDay.length && <SwiperSlide key={dish.id}>
										<div className={style['cart-component__dish-wrap']}>
											<NextProgramButton />
										</div>
									</SwiperSlide>
								)
							})
						}
					</Swiper>
				</div>
			</div>
			<div className={style['cart-component__right']}>
				<button onClick={() => modalActive()} className={style['cart-component__close-btn']} aria-label="Закрыть корзину"> </button>
				<div className={style['cart-component__right-title']}>Количество дней</div>
				<div className={style['cart-component__buttons-group']}>
					{
						optionsBtns.map(btn => <OptionsDayBtn
							key={btn.number}
							number={btn.number}
							active={btn.active}
							className={style['cart-component__options-btn']}/>)
					}
				</div>
				<div className={style['cart-component__programs-description']}>
					<div className={style['cart-component__programs-list-wrap']}>
						<ul className={style['cart-component__programs-list']}>
							<li className={style['cart-component__programs-item']}>
								<div className={style['cart-component__cCal']}>1300 Ккал</div>
								<div className={style['cart-component__about-plan']}>
									<div className={style['cart-component__program']}>Программа питания «Классик»</div>
								</div>
							</li>
							<li className={style['cart-component__programs-item']}>
								<div className={style['cart-component__cCal']}>1300 Ккал</div>
								<div className={style['cart-component__about-plan']}>
									<div className={style['cart-component__program']}>Программа питания «Классик»</div>
								</div>
							</li>
							<li className={style['cart-component__programs-item']}>
								<div className={style['cart-component__cCal']}>1300 Ккал</div>
								<div className={style['cart-component__about-plan']}>
									<div className={style['cart-component__program']}>Программа питания «Классик»</div>
								</div>
							</li>
							<li className={style['cart-component__programs-item']}>
								<div className={style['cart-component__cCal']}>1300 Ккал</div>
								<div className={style['cart-component__about-plan']}>
									<div className={style['cart-component__program']}>Программа питания «Классик»</div>
								</div>
							</li>
							<li className={style['cart-component__programs-item']}>
								<div className={style['cart-component__cCal']}>1300 Ккал</div>
								<div className={style['cart-component__about-plan']}>
									<div className={style['cart-component__program']}>Программа питания «Классик»</div>
								</div>
							</li>
						</ul>
						<div className={style['cart-component__description']}>
							Пятиразовое питание на 2 000 ккал/день для поддержания оптимальной формы при тренировках и просто активном образе жизни
						</div>
					</div>
					<div className={style['cart-component__cost']}>
						<div className={style['cart-component__sum']}>17960 ₽</div>
						<NextProgramButton className={style.next_btn}/>
					</div>

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
