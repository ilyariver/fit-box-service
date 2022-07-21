import React from 'react'
import SectionTitle from '../../../shared/section-title/section-title'
import FeedbackComponent from '../../../feedback-component/feedback-component'
import { state } from '../../../../mockDate'
import style from './comments-section.module.scss'
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';


const CommentsSection = () => {
	return (
		<div>
			<div className="container">
				<div className={style.comments_title}>
					<SectionTitle className={style.title} title="Отзывы" color="#fff"/>
				</div>
				<div className={style.comments_wrap}>
					<Swiper
						enabled={true}
						modules={[Navigation]}
						slidesPerView={1}
						spaceBetween={35}
						navigation
						className="mySwiper"
						breakpoints={{
							768: {
								enabled: false,
								slidesPerView: 4,
								spaceBetween:35,
							}
						}}

					>
						{
							state.feedbackPeople.map(person =>
								<SwiperSlide key={person.name} className={style.comments_slide}>
									<FeedbackComponent img={person.img} name={person.name} comment={person.comment} />
								</SwiperSlide>)
						}
					</Swiper>
				</div>
			</div>
		</div>
	)
}

export default CommentsSection
