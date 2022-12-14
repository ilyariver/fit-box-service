import { FC } from 'react'
import style from './our-food-section.module.scss'
import Image from 'next/image'
import { state } from '../../../../../mockDate'


const OurFoodSection: FC = () => {
	return (
		<section className={style.our_food_section}>
			<div className="container">
				<h2 className={style.our_food_section__title} data-aos="fade-right" data-aos-delay="1500">Наше питание</h2>
				<ul className={style.our_food_section__list}>
					{
						state.aboutPage.ourFood.map(item => {
							return (
								<li className={style.our_food_section__item} data-aos="fade-up" data-aos-delay={item.id * 100}>
									<div className={style.our_food_section__img}>
										<Image src={item.img} />
									</div>
									<h3 className={style.our_food_section__subtitle}>{item.title}</h3>
									<p className={style.our_food_section__text}>{item.text}</p>
								</li>
							)
						})
					}
				</ul>
			</div>
		</section>
	)
}

export default OurFoodSection
