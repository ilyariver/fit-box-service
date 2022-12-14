import { FC, useEffect, useState } from 'react'
import style from './delivery-page.module.scss'
import { state } from '../../../mockDate'

const DeliveryPage: FC = () => {
	return (
		<main className={style.main}>
			<div className="container">
				<div className={style.main__wrap}>
					<h1 className={style.main__title}>Доставка</h1>
					<ul className={style.delivery_list}>
						{
							state.delivery.map(item => {
								return (
									<li key={item.id} className={style.delivery_list__item}>
										{item.title && <h2 className={style.delivery_list__title}>{item.title}</h2>}
										<p className={style.delivery_list__text} dangerouslySetInnerHTML={{ __html: item.text }} />
									</li>
								)
							})
						}
					</ul>
				</div>
			</div>
		</main>
	)
}

export default DeliveryPage
