import React, { useEffect, useState } from 'react'
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
										<div className={style.title}>{menu.title}</div>
										<div className={style.text}>{menu.text}</div>
										<MainButton  width="230px">Выбрать программу</MainButton>
									</div>
								)
							}
						})
					}
					{<div className={style.buttons}>
						{
							buttonsActive.map(item => {
								return (<div className={style.button_wrap} key={item.title}>
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
