import style from './choice-program-component.module.scss'
import dynamic from 'next/dynamic'
import CaloriesChoiceBtn from '../shared/calories-choiсe-btn/calories-choiсe-btn'
import CalculatorComponent from '../calculator-component/calculator-component'
import WeekDaysIndicator from '../shared/week-days-indicator/week-days-indicator'
import MenuItem from './menu-item'
import { ProgramMenuList } from '../../types/programTypes'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { MainButton } from '../shared/mainButton/mainButton'
import { useActions } from '../../hooks/useAction'
import { FC } from 'react'

interface ChioceType {
	sliderTo: any
}

const ChoiceProgramComponent: FC<ChioceType> = ({sliderTo}) => {
	const { choiceWeek, programs } = useTypedSelector(buttons => buttons.program)
	const { placeAnOrderActive, weekdayActive } = useActions()
	let currentWeekDay: ProgramMenuList[] = []

	choiceWeek
		.forEach(item => {
			item.days.forEach(weekday => {
				if (weekday.active && weekday.menu)
					return currentWeekDay = weekday.menu
			})
		})

	return (
		<div className={style['choice-program']}>
			<div className={style['choice-program__buttons']}>
				{
					programs?.map((program, idx) =>
						(<div className={style['choice-program__button']} key={program.type.title} data-aos="fade-up" data-aos-delay={`${idx * 200}`}>
							<CaloriesChoiceBtn id={program.id} type={program.type} active={program.active} sliderTo={sliderTo} />
						</div>))
				}
			</div>
			<div className={style['choice-program__content']}>
				<div className={style['choice-program__calc-wrap']}>
					{
						programs?.map(program => {
							if (program.active) {
								return <CalculatorComponent key={program.id} program={program} numberDishes={currentWeekDay.length}/>
							}
						})
					}
				</div>
				<div className={style['choice-program__slider']}>
					<div className={style['choice-program__slider-wrap']}>
						<Swiper
							style={{color: 'white'}}
							className={style['choice-program__list']}
							modules={[Navigation]}
							slidesPerView={1}
							navigation
							loopAdditionalSlides={5}
							breakpoints={{
								1200: {
									slidesPerView: 1.65,
								},
							}}
						>
							{
								currentWeekDay.map((day,idx) => {
									return (
										<SwiperSlide key={day.id + idx}>
											{ <MenuItem context={day} /> }
										</SwiperSlide>
									)
								})
							}
						</Swiper>
					</div>
					<div className={style['choice-program__weekdays']}>
						{
							choiceWeek.map(day => {
								return day.days.map((day,idx) => {
									return <WeekDaysIndicator
										onClick={() => weekdayActive(day.title.min)}
										idx={idx}
										key={day.title.min}
										title={day.title.min}
										active={day.active}
									/>
								})
							})
						}
					</div>
					<MainButton
						className={style['choice-program__btn_mobile']}
						onClick={() => placeAnOrderActive()}
						width="100%"
						fontSize="18px">Добавить в корзину</MainButton>
				</div>
			</div>
		</div>
	)
}

export default ChoiceProgramComponent
