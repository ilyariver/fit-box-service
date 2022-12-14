import { FC } from 'react'
import style from './our-advantages-section.module.scss'
import Image from 'next/image'
import plates from '../../../../../public/images/plates.png'
import salad from '../../../../../public/images/salad.png'
import plateQiwi from '../../../../../public/images/plate-qiwi.png'

const OurAdvantagesSection: FC = () => {
	return (
		<section className={style.our_advantages_section}>
			<div className="container">
				<h1 className={style.our_advantages_section__title}>
					Наши преимущества
				</h1>
				<div className={style.our_advantages_section__list}>
					<div className={style.our_advantages_section__top}>
						<article className={style.our_advantages_section__left} data-aos="fade-right" data-aos-delay="500">
							<h2 className={style.our_advantages_section__subtitle}>
								Каждый клиент важен
							</h2>
							<p className={style.our_advantages_section__text}>
								Целых пять разнообразных блюд, включая один из полезных десертов,
								на день зарядят энергией и точно не дадут проголодаться.
								Мы за сбалансированный подход к питанию без строгих запретов
								и ограничений, поэтому наше меню яркое и сытное!
							</p>
							<div className={style.our_advantages_section__img} data-aos="fade-up" data-aos-delay="800">
								<Image src={plates} />
							</div>
						</article>
						<article className={style.our_advantages_section__right} data-aos="fade-left" data-aos-delay="1000">
							<h2 className={style.our_advantages_section__subtitle}>
								Максимум пользы
							</h2>
							<p className={style.our_advantages_section__text}>
								Мы гарантируем стабильно высокое качество наших блюд и сервиса.
								Мы стремимся работать в максимально комфортном для вас режиме,
								предлагая рационы, разработанные и приготовленные только профессионалами.
								Вся продукция надёжно упаковывается и доставляется в свежем виде. А вежливые
								и внимательные курьеры и операторы всегда рады выслушать вас и
								проконсультировать по любым вопросам.
							</p>
							<div className={style.our_advantages_section__img} data-aos="fade-right" data-aos-delay="1300">
								<Image src={salad} />
							</div>
						</article>
					</div>
					<article className={style.our_advantages_section__bottom} data-aos="fade-up">
						<h2 className={style.our_advantages_section__subtitle}>
							Бесподобные продукты
						</h2>
						<p className={style.our_advantages_section__text}>
							В FITBOX мы используем только натуральные и питательные продукты.
							Каждый из них способен и насыщать витаминами и минералами, и
							приносить настоящее удовольствие. В предложенных блюдах использовано
							множество популярных сегодня ингредиентов, таких как авокадо, киноа,
							чиа, батат и цельнозерновые культуры, и все они соответствуют самым
							последним тенденциям здорового питания. А также мы никогда не применяем сахар,
							белую муку, рафинированные продукты и полуфабрикаты.
						</p>
						<div className={style.our_advantages_section__img} data-aos="fade-up" data-aos-delay="500">
							<Image src={plateQiwi} />
						</div>
					</article>
				</div>
			</div>
		</section>
	)
}

export default OurAdvantagesSection
