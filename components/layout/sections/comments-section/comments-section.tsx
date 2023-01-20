import React from 'react'
import style from './comments-section.module.scss'
import SectionTitle from '../../../shared/section-title/section-title'
import FeedbackComponent from '../../../feedback-component/feedback-component'
import { state } from '../../../../mockDate'
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
								slidesPerView: 2,
							},
							992: {
								slidesPerView: 4,
							},
						}}

					>
						{
							state.feedbackPeople.map((person, idx) =>
								<SwiperSlide key={idx} className={style.comments_slide}>
									{/*<FeedbackComponent img={person.img} name={person.name} comment={person.comment} />*/}
									<FeedbackComponent img={person.img} />
								</SwiperSlide>)
						}
					</Swiper>
				</div>
			</div>
		</div>
	)
}

export default CommentsSection
