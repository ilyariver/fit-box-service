import React from 'react'
import style from './faq-section.module.scss'
import SectionTitle from '../../../shared/section-title/section-title'
import OftenQuestionsBtn from '../../../shared/often-questions-btn/often-questions-btn'
import AccordionComponent from '../../../accordion-component/accordion-component'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'

const FaqSection = () => {
	const typeFaq = useTypedSelector(active => active.faq)

	return (
		<div className={style.faq}>
			<div className={style.faq_title}>
				<SectionTitle className={style.title} title="Частые вопросы" color="#fff"/>
			</div>
			<div className="container">
				<div className={style.buttons}>
					{
						typeFaq.map(item => {
							return (
								<div className={style.button_wrap} key={item.id}>
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
								return item.questions?.map((question, i) => {
									return <AccordionComponent key={question.title + i} title={question.title} description={question.description} />
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
