import { FC } from 'react'
import style from './about-page.module.scss'
import FirstScreen from './components/first-screen/first-screen'
import OurFoodSection from './components/our-food-section/our-food-section'
import DescriptionCompany from './components/description-company/description-company'
import OurAdvantagesSection from './components/our-advantages-section/our-advantages-section'
import DeliveryTextSection from './components/delivery-text-section/delivery-text-section'

const AboutPage: FC = () => {
	return (
		<main className={style.main}>
			<FirstScreen />
			<OurFoodSection />
			<DescriptionCompany />
			<OurAdvantagesSection />
			<DeliveryTextSection />
		</main>
	)
}

export default AboutPage
