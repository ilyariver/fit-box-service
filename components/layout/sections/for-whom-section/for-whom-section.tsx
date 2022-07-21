import React from 'react'
import Image from 'next/image'
import SectionTitle from '../../../shared/section-title/section-title'
import asianGirl from '../../../../public/images/girl-2@x1.png'
import style from './for-whom-section.module.scss'
import HintComponent from '../../../hint-component/hint-component'

const ForWhomSection = () => {
	return (
		<div className={style.whom}>
			<div className={style.whom_title}>
				<SectionTitle className={style.title} title="Кому подойдет питание" color="#2C2B2B" />
			</div>
			<div className={style.img_wrap}>
				<Image src={asianGirl} alt="Девушка" className={style.img} placeholder="blur"/>
			</div>
			<div className={style.ellipse}>
				<svg viewBox="0 0 710 722" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M658.5 360.874C658.5 532.537 521.825 670.249 355 670.249C188.175 670.249 51.5 532.537 51.5 360.874C51.5 189.212 188.175 51.5 355 51.5C521.825 51.5 658.5 189.212 658.5 360.874Z" stroke="url(#paint0_radial_790_956)" strokeWidth="103"/>
					<defs>
						<radialGradient id="paint0_radial_790_956" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(355 343.525) rotate(90) scale(361.137 355.259)">
							<stop offset="0.728039" stopColor="#D74253"/>
							<stop offset="0.867651" stopColor="#FF576A"/>
							<stop offset="1" stopColor="#D74253"/>
						</radialGradient>
					</defs>
				</svg>
			</div>
			<div className={`${style.hint} ${style.hint_1}`}>
				<HintComponent text="Тому, кто хочет похудеть" />
			</div>
			<div className={`${style.hint} ${style.hint_2}`}>
				<HintComponent text="Тому, кто хочет правильно питаться" />
			</div>
			<div className={`${style.hint} ${style.hint_3}`}>
				<HintComponent text="Тому, кому нужно увеличить массу тела" />
			</div>
			<div className={`${style.hint} ${style.hint_4}`}>
				<HintComponent text="Тому, кто занимается спортом" />
			</div>
			<div className={`${style.hint} ${style.hint_5}`}>
				<HintComponent text="Тому, у кого нет времени готовить" />
			</div>
		</div>
	)
}

export default ForWhomSection
