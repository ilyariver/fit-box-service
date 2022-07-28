import React from 'react'
import style from './next-program-button.module.scss'
import Image from 'next/image'
import arrowIcon from '../../../public/images/icons/icon-arrow-right.svg'

const NextProgramButton = () => {
	return (
		<button className={style['next-btn']}>
			<div className={style['next-btn__day']}>Следующая программа</div>
			<div className={style['next-btn__arrow']}>
				<Image src={arrowIcon} />
			</div>
		</button>
	)
}

export default NextProgramButton
