import { FC, useEffect } from 'react'
import style from './modal-window.module.scss'
import { ModalTypes } from '../../../types/modalTypes'
import { useActions } from '../../../hooks/useAction'

const ModalWindow: FC<ModalTypes> = ({ active, children }) => {
	const { cartModalActive } = useActions()

	useEffect(() => {
		document.body.style.overflowY = `${active ? 'scroll' : ''}`
		document.body.style.position = `${active ? 'fixed' : ''}`
		document.body.style.width = `${active ? '100%' : ''}`
	}, [active])

	return (
		<div
			onClick={() => cartModalActive()}
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
