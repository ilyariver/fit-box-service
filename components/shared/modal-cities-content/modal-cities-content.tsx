import React, { FC } from 'react'
import style from './modal-cities-content.module.scss'
import Link from 'next/link'
import { useActions } from '../../../hooks/useAction'
import { useTypedSelector } from '../../../hooks/useTypedSelector'

const ModalCitiesContent: FC = () => {
	const {
		dialogModalsActive,
		setCurrentCityActive,
		citiesContentActive
	} = useActions()

	const { cart } = useTypedSelector(cartList => cartList.program)
	const { cities } = useTypedSelector(modal => modal.selectedCity)
	const {
		activeDialogModal,
		activeCitiesContent,
	} = useTypedSelector(modal => modal.dialogModals)

	return (
		<>
			<h2 className={style.modal_title}>выберите ваш город из списка</h2>
			<div className={style.modal_cities}>
				<div className={style.modal_cities_list}>
					{
						cities.map(city =>
							<div key={city.title} className={style.modal_cities_item}>
								<Link href={`/city/${city.link}`}>
									<a onClick={() => {
											dialogModalsActive(!activeDialogModal)
											citiesContentActive(!activeCitiesContent)
											if (city.id != null) {
												setCurrentCityActive(city.id)
											}
										}
									} className={style.city_title}>{ city.title }</a>
								</Link>
							</div>)
					}
					<div className={style.modal_cities_item} />
				</div>
			</div>
		</>
	)
}

export default ModalCitiesContent
