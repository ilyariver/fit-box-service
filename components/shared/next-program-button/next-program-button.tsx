import {FC} from 'react'
import style from './next-program-button.module.scss'
import Image from 'next/image'
import arrowIcon from '../../../public/images/icons/icon-arrow-right.svg'
import { NextProgramButtonTypes } from '../../../types/nextProgramButtonTypes'

const NextProgramButton: FC<NextProgramButtonTypes> = ({className}) => {
	return (
		<button className={`${style['next-btn']} ${className}`}>
			<div className={style['next-btn__day']}>Следующая программа</div>
			<div className={style['next-btn__arrow']}>
				<Image src={arrowIcon} alt="Стрелка"/>
			</div>
		</button>
	)
}

export default NextProgramButton
