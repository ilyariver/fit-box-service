import React, { FC, useEffect } from 'react'
import style from './faq-section.module.scss'
import SectionTitle from '../../../shared/section-title/section-title'
import OftenQuestionsBtn from '../../../shared/often-questions-btn/often-questions-btn'
import AccordionComponent from '../../../accordion-component/accordion-component'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'
import Aos from 'aos'

interface FaqTypes {
	title: string
}
const FaqSection: FC<FaqTypes> = ({title}) => {
	const typeFaq = useTypedSelector(active => active.faq)

	useEffect(() => {
		Aos.init({
			disable: false,
			once: true,
			duration: 800,
		})
	}, [])

	return (
		<div className={style.faq} id="faq">
			<div className={style.faq_title}>
				<SectionTitle className={style.title} title={title} color="#fff"/>
			</div>
			<div className="container">
				<div className={style.buttons}>
					{
						typeFaq.map((item, idx) => {
							return (
								<div className={style.button_wrap} key={item.id} data-aos="fade-up" data-aos-delay={idx * 100}>
									<OftenQuestionsBtn context={item} />
								</div>
							)
						})
					}
				</div>
				<div className={style.accordion}>
					{
						typeFaq.map(item => {
							if (item.active) {
								return item.questions?.map((question, idx) => {
									return <div key={question.title + idx} data-aos="fade-up" data-aos-delay={idx * 100}>
										<AccordionComponent
										title={question.title}
										description={question.description} /></div>
								})
							}
						})
					}
				</div>
			</div>
		</div>
	)
}

export default FaqSection
