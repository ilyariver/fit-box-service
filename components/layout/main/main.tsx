import style from './main.module.scss'
import FirstSection from '../sections/first-section/first-section'
import PurposeSection from '../sections/purpose-section/purpose-section'
import ProgramSection from '../sections/program-section/program-section'
import AnswersSection from '../sections/answers-section/answers-section'
import ForWhomSection from '../sections/for-whom-section/for-whom-section'
import FaqSection from '../sections/faq-section/faq-section'
import CommentsSection from '../sections/comments-section/comments-section'
import ServiceSection from '../sections/service-section/service-section'

const Main = () => {
	return (
		<main>
			<FirstSection />
			<div className={style.black_back} style={{
				padding: '110px 0'
			}}>
				<PurposeSection />
				<ProgramSection />
			</div>
			<div className={style.yellow_back}>
				<AnswersSection />
				<ForWhomSection />
			</div>
			<div className={style.black_back} style={{
				padding: '80px 0 120px 0'
			}}>
				<FaqSection />
				<CommentsSection />
			</div>
			<div className={style.yellow_back} style={{
				padding: '100px 0 0'
			}}>
				<ServiceSection />
			</div>
		</main>
	)
}

export default Main
