import React from 'react'
import SectionTitle from '../../../shared/section-title/section-title'
import FeedbackComponent from '../../../feedback-component/feedback-component'
import { state } from '../../../../mockDate'

const CommentsSection = () => {
	return (
		<div>
			<div className="container">
				<SectionTitle title="Отзывы" color="#fff" bottom="50px" />
				<div style={{display: 'flex', justifyContent: 'space-between'}}>
					{
						state.feedbackPeople.map(person =>
							<FeedbackComponent key={person.name} img={person.img} name={person.name} comment={person.comment} />)
					}
				</div>
			</div>
		</div>
	)
}

export default CommentsSection
