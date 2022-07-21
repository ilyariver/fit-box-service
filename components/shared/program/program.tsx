import React, {FC} from 'react'
import style from './program.module.scss'
import { useActions } from '../../../hooks/useAction'
import { PurposeState } from '../../../types/purposeTypes'

const Program: FC<PurposeState> = ({id,title , img, active }) => {
	const { purposeActive } = useActions()
	const setActivePurpose = () => purposeActive(id)

	return (
		<button
			onClick={setActivePurpose}
			className={`${style.program} ${!active && style.program_black}`}>
			<div className={style.program_img} style={{ backgroundImage: `url(${img})` }}></div>
			<div className={style.program_text}>{title}</div>
		</button>
	)
}

export default Program
