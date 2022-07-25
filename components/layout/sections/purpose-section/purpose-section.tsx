import React from 'react'
import Link from 'next/link'
import style from './purpose-section.module.scss'
import SeparatorLineComponent from '../../../separator-line-component/separator-line-component'
import Program from '../../../shared/program/program'
import { MainButton } from '../../../shared/mainButton/mainButton'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'


const PurposeSection = () => {
	const buttonsActive = useTypedSelector(state => state.purpose)

	return (
		<div className={style.purpose_wrap}>
			<div className="container">
				<SeparatorLineComponent className={style.separate} title="выберите цель" />
				<div className={style.purpose}>
					{
						buttonsActive.map(menu => {
							if (menu.active) {
								return (
									<div key={menu.id} className={style.left}>
										<div className={style.title}
										 data-aos="fade-top">{menu.title}</div>
										<div className={style.text}
										 data-aos="fade-bottom"
											 data-aos-delay="150">{menu.text}</div>
										<Link href="#section-lunch">
											<MainButton width="230px">Выбрать программу</MainButton>
										</Link>
									</div>
								)
							}
						})
					}
					{<div className={style.buttons}>
						{
							buttonsActive.map((item,idx) => {
								return (<div className={style.button_wrap} key={item.title} data-aos="fade-up" data-aos-delay={`${idx * 100}`}>
									<Program id={item.id} title={item.title} img={item.img} active={item.active}/>
								</div>)
							})
						}
					</div>}
				</div>
			</div>
		</div>
	)
}

export default PurposeSection
