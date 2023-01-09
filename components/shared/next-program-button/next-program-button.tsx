import {FC} from 'react'
import Link from 'next/link'
import style from './next-program-button.module.scss'
import arrowIcon from '../../../public/images/icons/icon-arrow-right.svg'
import { NextProgramButtonTypes } from '../../../types/nextProgramButtonTypes'

const NextProgramButton: FC<NextProgramButtonTypes> = ({className, onClick, title}) => {
	return (
		<Link href={'#' + title}>
			<a>
				<button className={`${style['next-btn']} ${className}`} onClick={onClick}>
					<div className={style['next-btn__day']}>Следующая программа</div>
					<div className={style['next-btn__arrow']}>
						<img src={arrowIcon} alt="Стрелка"/>
					</div>
				</button>
			</a>
		</Link>
	)
}

export default NextProgramButton
