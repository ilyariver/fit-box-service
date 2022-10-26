import { FC, useEffect } from 'react'
import style from './modals.module.scss'
import { ModalTypes } from '../../../types/modalTypes'

const Modals: FC<ModalTypes> = ({ active, children }) => {

	useEffect(() => {
		document.body.style.overflowY = `${active ? 'scroll' : ''}`
		document.body.style.position = `${active ? 'fixed' : ''}`
		document.body.style.width = `${active ? '100%' : ''}`
	}, [active])

	return (
		<div className={`${style['modal']} ${active ? style.active : ''}`}>
			<div className={style['modal__wrap']}>
				<div onClick={e => e.stopPropagation()} className={`${style['modal__content']} ${active ? style.active : ''}`}>
					{ children }
				</div>
			</div>
		</div>
	)
}

export default Modals
