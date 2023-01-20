import { FC, useEffect } from 'react'
import style from './modals.module.scss'
import { ModalTypes } from '../../../types/modalTypes'
import { useActions } from '../../../hooks/useAction'
import { useTypedSelector } from '../../../hooks/useTypedSelector'

const Modals: FC<ModalTypes> = ({ active, children }) => {
	const {
		dialogModalsActive,
		loginContentActive,
		citiesContentActive,
		orderModalActive,
	} = useActions()

	const { activeDialogModal, activeCitiesContent } = useTypedSelector(modal => modal.dialogModals)

	useEffect(() => {
		document.body.style.overflowY = `${active ? 'scroll' : ''}`
		document.body.style.position = `${active ? 'fixed' : ''}`
		document.body.style.width = `${active ? '100%' : ''}`
	}, [active])

	return (
		<div className={`${style['modal']} ${active ? style.active : ''}`}>
			<div className={style['modal__wrap']}>
				<div
					onClick={e => e.stopPropagation()}
					className={`${style['modal__content']} ${active ? style.active : ''}`}>
					<button className={`${style['modal__btn']}`}
						onClick={() => {
							dialogModalsActive(false)
							loginContentActive(false)
							citiesContentActive(false)
							orderModalActive(false)
						}}
					/>
					{ children }
				</div>
			</div>
		</div>
	)
}

export default Modals
