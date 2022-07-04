import React from 'react'
import style from './faq-section.module.scss'
import SectionTitle from '../../../shared/section-title/section-title'
import OftenQuestionsBtn from '../../../shared/often-questions-btn/often-questions-btn'
import AccordionComponent from '../../../accordion-component/accordion-component'
import { state } from '../../../../pages/mockDate'

const FaqSection = () => {
	return (
		<div className={style.faq}>
			<SectionTitle title="Частые вопросы" color="#fff" bottom="50px" />
			<div className="container">
				<div className={style.buttons}>
					<OftenQuestionsBtn title="Рационы" active={true} right="24px"/>
					<OftenQuestionsBtn title="Похудение" active={false} right="24px"/>
					<OftenQuestionsBtn title="Доставка и оплата" active={false} right="24px"/>
					<OftenQuestionsBtn title="Хранение" active={false}/>
				</div>
				<div className={style.accordion}>
					{
						state.accordionContent.map(item =>
							<AccordionComponent key={item.title} title={item.title} description={item.description} />)
					}
				</div>
			</div>
		</div>
	)
}

export default FaqSection
