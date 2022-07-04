import React, {FC} from 'react'
import style from './choice-program-component.module.scss'
import CaloriesChoiceBtn from '../shared/calories-choiсe-btn/calories-choiсe-btn'
import { state } from '../../pages/mockDate'
import OrderComponent from '../order-component/order-component'
import dish from '../../public/images/dish.png'
import WeekDaysIndicator from '../shared/week-days-indicator/week-days-indicator'
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import MenuItem from './menu-item'


const ChoiceProgramComponent = () => {
	return (
		<div className={style['choice-program']}>
			<div className={style['choice-program__buttons']}>
				{
					state.cCalBtns.map(days =>
						(<div className={style['choice-program__button']} key={days.title}>
							<CaloriesChoiceBtn title={days.title} cCal={days.cCal} active={days.active} right="30px" />
						</div>))
				}
			</div>
			<div className={style['choice-program__content']}>
				<div style={{marginRight: '32px'}}>
					<OrderComponent {...state.orderInfo} />
				</div>
				<div>
					<div className={style['choice-program__slider-wrap']}>
						<Swiper
							style={{color: 'white'}}
							className={style['choice-program__list']}
							modules={[Navigation]}
							loop={true}
							slidesPerView={1.59}
							onSlideChange={() => console.log('slide change')}
							navigation
						>
							<SwiperSlide>{MenuItem()}</SwiperSlide>
							<SwiperSlide>{MenuItem()}</SwiperSlide>
							<SwiperSlide>{MenuItem()}</SwiperSlide>
							<SwiperSlide>{MenuItem()}</SwiperSlide>
						</Swiper>
						{/*<button*/}
						{/*	className={style['choice-program__next-slide']}*/}
						{/*	aria-label="Следующий слайдер">*/}
						{/*	<svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
						{/*		<path d="M1 1L9 9L1 17" stroke="#FF576A" stroke-width="2"/>*/}
						{/*	</svg>*/}
						{/*</button>*/}
					</div>
					<div style={{display: 'flex', paddingLeft: '20px'}}>
						{
							state.weekDays.map(day =>
								<WeekDaysIndicator key={day.title} title={day.title} active={day.active}/>)
						}
					</div>
				</div>
			</div>
		</div>
	)
}

export default ChoiceProgramComponent
