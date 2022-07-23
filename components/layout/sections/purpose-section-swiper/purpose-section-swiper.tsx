import React, { useEffect, useState } from 'react'
import style from './purpose-section-swiper.module.scss'
import SeparatorLineComponent from '../../../separator-line-component/separator-line-component'
import Program from '../../../shared/program/program'
import { MainButton } from '../../../shared/mainButton/mainButton'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';


const PurposeSectionSwiper = () => {
	const buttonsActive = useTypedSelector(state => state.purpose)

	return (
		<div className={style.purpose}>
			<div className="container">
				<SeparatorLineComponent className={style.separate} title="выберите цель" />
				<div className={style.purpose_wrap}>
					<Swiper
						modules={[Navigation]}
						loop={true}
						slidesPerView={1}
						navigation
					>
						{
							buttonsActive.map(btn => {
								return (
									<SwiperSlide key={btn.id}>
										<div className={style.purpose_item}>
											<div className={style.program}>
												<Program id={btn.id} title={btn.title} img={btn.img} active={true} />
											</div>
											<div  className={style.description}>
												<div className={style.title}>{btn.title}</div>
												<div className={style.text}>{btn.text}</div>
											</div>
										</div>
									</SwiperSlide>
								)
							})
						}
					</Swiper>
					<div className={style.main_button}>
						<MainButton width="178px" fontSize="14px" className={style.tablets}>Выбрать программу</MainButton>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PurposeSectionSwiper
