import { FC, useEffect } from 'react'
import style from './modal-window.module.scss'
import { ModalTypes } from '../../../types/modalTypes'
import { useActions } from '../../../hooks/useAction'

const ModalWindow: FC<ModalTypes> = ({ active, children }) => {
	const { modalActive } = useActions()

	useEffect(() => {
		document.body.style.overflowY = `${active ? 'hidden' : ''}`
	}, [active])

	return (
		<div
			onClick={() => modalActive()}
			className={`${style['modal']} ${active ? style.active : ''}`}
		>
			<div className={style['modal__wrap']}>
				<div onClick={e => e.stopPropagation()} className={`${style['modal__content']} ${active ? style.active : ''}`}>
					{ children }
				</div>
			</div>
		</div>
	)
}

export default ModalWindow
