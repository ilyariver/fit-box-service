import React, {useEffect, useState } from 'react'
import Link from 'next/link'
import style from './cart-component.module.scss'
import CartDishComponent from '../cart-dish-component/cart-dish-component'
import WeekDaysIndicatorCart from '../shared/week-days-indicator-cart/week-days-indicator'
import NextProgramButton from '../shared/next-program-button/next-program-button'
import { MainButton } from '../shared/mainButton/mainButton'
import OptionsDayBtn from '../shared/options-day-btn/options-day-btn'
import { useActions } from '../../hooks/useAction'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { OptionsBtns, ProgramMenuList } from '../../types/programTypes'
import { setDaysDurationAction } from '../../store/actions-creators/program'

let count: number = 1

const CartComponent = () => {
	const largeScreen = 1199.98
	const { optionsBtns, cart, choiceWeek, weekdays } = useTypedSelector(btns => btns.program)
	const { nextMenuCardsActive, modalActive, setDaysDurationAction, removeProgramFromCartAction } = useActions()
	const [widthCart, setWidthCart] = useState(false)
	const [activeSwiper, setActiveSwiper] = useState(false)
	const [countCart, setCountCart] = useState(2)
	const btns: OptionsBtns[] = []
	let currentWeekDay: ProgramMenuList[] = []

	const styleEmptyText = {
		flexGrow: 1,
		justifyContent: 'center'
	}

	const setNextProgramCards = () => {
		count++
		if (count <= cart.length) {
			nextMenuCardsActive(count)
		}
		if (count === cart.length) {
			count = 0
		}
	}

	const selectedMenu = cart.map(item => {
		return weekdays.filter(day => {
			if (item.active && day.lookupId === item.menu.id) {
				return day
			}
		})
	}).reduce((acc, val) => acc.concat(val), [])

	let daysButtons: {[key: string]: OptionsBtns[]} = {}

	optionsBtns.forEach(btn => {
		cart.forEach(item => {
			debugger
			if (typeof daysButtons[item.menu.type.title] === 'undefined') {
				daysButtons[item.menu.type.title] = []
			}
			if (item.active && item.numberOfDays === btn.number) {
				daysButtons[item.menu.type.title].push({ ...btn, active: true })
			}
			if (item.active && item.numberOfDays !== btn.number) {
				daysButtons[item.menu.type.title].push({ ...btn, active: false })
			}

		})
	})

	console.log('daysButtons', daysButtons)

	const sum = cart.reduce((acc, goods) => acc + goods.cost, 0)

	const updateDimensions = () => {
		if (typeof window !== 'undefined') {
			if (window.innerWidth > largeScreen) {
				setActiveSwiper(false)
			} else {
				setActiveSwiper(true)
			}
		}
	}

	selectedMenu
		.forEach(item => {
			item.days.forEach(weekday => {
				if (weekday.active && weekday.menu)
					return currentWeekDay = weekday.menu
			})
		})

	useEffect(() => {
		setWidthCart(window.innerWidth < largeScreen)
		if (typeof typeof window !== 'undefined') {
			window.addEventListener('resize', updateDimensions)
			return () => window.removeEventListener('resize', updateDimensions)
		}
	},[])

	return (
		<div className={style['cart-component']}>
			<button onClick={() => modalActive()} className={style['cart-component__close-btn']} aria-label="Закрыть корзину"> </button>
			{ cart.length !== 0 && (widthCart || activeSwiper) && <Link href={'/order'}>
			  		<a>
					  <MainButton className={style.main_button}>Оформить заказ</MainButton>
				  	</a>
				</Link> }
			<div style={cart.length === 0 ? styleEmptyText : {}} className={style['cart-component__left']}>
				{cart.length !== 0 ? <div className={style['cart-component__left-content']}>
					<div className={style['cart-component__week']}>
						{
							choiceWeek.map(day => {
								return day.days.map((weekday, idx) => {
									return <WeekDaysIndicatorCart
										key={day.lookupId + idx}
										title={weekday.title.min}
										active={weekday.active}
										classList={style.weekday} />
								})
							})
						}
					</div>
					{
						choiceWeek.map(day => {
							return day.days.map((weekday, idx) => {
								if (weekday.active) {
									return <div key={day.lookupId} className={style['cart-component__title']}>
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
							slidesPerView={'auto'}
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
										5 >= idx && <SwiperSlide key={dish.id + idx}>
											<div className={style['cart-component__dish-wrap']}>
												<CartDishComponent
													img={dish.minImg}
													title={dish.title}
													text={dish.productComposition}
													idx={idx}/>
											</div>
										</SwiperSlide>
									)
								})
							}
							{
								cart.map((itemCart,idx) => {

									return (
										itemCart.id === countCart && <SwiperSlide key={itemCart.id + idx}>
											<div className={`${style['cart-component__dish-wrap']} ${style['cart-component__next-btn']}`}>
												{cart.length > 1 && <NextProgramButton title={String(itemCart.id)} onClick={() => {
													setNextProgramCards()
													if (cart.length > countCart) {
														setCountCart(prevState => ++prevState)
													} else {
														setCountCart(1)
													}
												}}/>}
											</div>
										</SwiperSlide>
									)
								})
							}
						</Swiper>
					</div>
				</div> : <div className={style['cart-component__empty-message']}>Корзина пуста...</div>}
			</div>
			<div style={{display: `${cart.length !== 0 ? 'block' : 'none'}`}} className={style['cart-component__right']}>
				{cart.length !== 0 && <div>
					<div className={style['cart-component__right-title']}>Количество дней</div>
					<div className={style['cart-component__buttons-group']}>
					  {btns.map((btn, idx) => <OptionsDayBtn
						  key={btn.number + idx}
						  types={btn}
						  onClick={() => {
							  setDaysDurationAction(btn.number)
						  }}
						  className={style['cart-component__options-btn']}/>)}
					</div>
					<div className={style['cart-component__programs-description']}>
						<div className={style['cart-component__programs-list-wrap']}>
							{(!widthCart && !activeSwiper) && <ul className={style['cart-component__programs-list']}>
								{cart.map((item, idx) => {
									return (
										<li key={item.id + idx} className={style['cart-component__programs-item']}>
											<button
												onClick={() => removeProgramFromCartAction(item.id)}
												className={style['cart-component__remove-item']}
												aria-label={`Удалить программу питания ${item.menu?.type.title}`}> </button>
											<div
												id={String(item.id)}
												className={style['cart-component__cCal']}>{item.menu?.type.cCal} Ккал
											</div>
											<div className={style['cart-component__about-plan']}>
												<div
													className={`${style['cart-component__program']} ${item.active && cart.length > 1 ? style['active'] : ''}`}
												>
													Программа питания <br />«{item.menu?.type.title}»
												</div>
											</div>
										</li>
									)
								})}
							</ul>}
							<div className={style['cart-component__programs-list-mobile']}>{cart.map((item, idx) => {
								if (item.active) {
									return (
										<>
											<div key={item.id + idx} className={style['cart-component__programs-item']}>
												<div className={style['cart-component__cCal']}>{item.menu?.type.cCal} Ккал</div>
												<div className={style['cart-component__about-plan']}>
													<div className={`${style['cart-component__program']} ${item.active ? style['active'] : ''}`}>
														Программа питания <br />«{item.menu?.type.title}»
													</div>
												</div>
											</div>
											<div className={style['cart-component__description']}>
												{item.menu?.offer.description.text}
											</div>
										</>
									)
								}
							})}
							</div>
						</div>
						<div className={style['cart-component__cost']}>
							<div className={style['cart-component__sum']}>{sum} ₽</div>
							{cart.length > 1 && <NextProgramButton className={style.next_btn} onClick={setNextProgramCards}/>}
						</div>
					</div>
					{(!widthCart && !activeSwiper) && <Link href={'/order'}>
						<a>
							<MainButton onClick={() => modalActive()} width="312px" fontSize="18px">
								Оформить заказ!
							</MainButton>
						</a>
					</Link>}
				</div>}
			</div>
		</div>
	)
}

export default CartComponent
