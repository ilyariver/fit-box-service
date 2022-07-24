import { useEffect, useState } from 'react'
import style from './main.module.scss'
import FirstSection from '../sections/first-section/first-section'
import PurposeSection from '../sections/purpose-section/purpose-section'
import ProgramSection from '../sections/program-section/program-section'
import AnswersSection from '../sections/answers-section/answers-section'
import ForWhomSection from '../sections/for-whom-section/for-whom-section'
import FaqSection from '../sections/faq-section/faq-section'
import CommentsSection from '../sections/comments-section/comments-section'
import ServiceSection from '../sections/service-section/service-section'
import MapSection from '../sections/map-section/map-section'
import PurposeSectionSwiper from '../sections/purpose-section-swiper/purpose-section-swiper'

const Main = () => {
	const largeScreen = 768
	const [width, setWidth] = useState(false)
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
		setWidth(window.innerWidth < largeScreen)
		if (typeof typeof window !== 'undefined') {
			window.addEventListener('resize', updateDimensions)
			return () => window.removeEventListener('resize', updateDimensions)
		}
	},[])

	return (
		<main>
			<FirstSection />
			<section className={style.black_back} >
				{ (!width && !activeSwiper) && <PurposeSection /> }
				{ (width || activeSwiper) && <PurposeSectionSwiper /> }
				<ProgramSection />
			</section>
			<section className={style.yellow_back}>
				<AnswersSection />
				<ForWhomSection />
			</section>
			<section className={`${style.black_back} ${style.faq}`}>
				<FaqSection />
				<CommentsSection />
			</section>
			<section className={`${style.yellow_back} ${style.service_section}`}>
				<ServiceSection />
			</section>
			<MapSection />
		</main>
	)
}

export default Main
