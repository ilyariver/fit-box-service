import { FC } from 'react'
import asianGirl from '../../../../../public/images/girl-2@x1.png'
import style from './first-screen.module.scss'
import girlEllipse from '../../../../../public/images/girl-ellipse.svg'

const FirstScreen: FC = () => {
	return (
		<section className={style.first_screen}>
			<div className="container">
				<div className={style.first_screen__info}>
					<h1 className={style.first_screen__title} data-aos="fade-right" >
						Сегодня здоровый образ жизни – это не просто тренд, а&nbsp;насущная потребность.
					</h1>
					<p className={style.first_screen__text} data-aos="fade-right" data-aos-delay="1000">
						ЗОЖ – это не только регулярные занятия спортом,
						но и правильное питание, которое составляет 70 %
						успеха! Чтобы поддержать вас на пути к успеху, и была создана наша компания FITBOX.
					</p>
				</div>
				<div className={style.first_screen__girl}>
					<img src={asianGirl.src} alt="Picture of the author" data-aos="zoom-out"/>
				</div>
				<div className={style.girl_ellipse} data-aos-duration="1500" data-aos="zoom-in" data-aos-delay="1000">
					<img src={girlEllipse} alt="Круг"/>
				</div>
			</div>
		</section>
	)
}

export default FirstScreen
