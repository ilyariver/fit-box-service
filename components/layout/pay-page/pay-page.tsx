import { FC } from 'react'
import style from './pay-page.module.scss'
import { state } from '../../../mockDate'

const PayPage: FC = () => {
	return (
		<main className={style.main}>
			<div className="container">
				<div className={style.main__wrap}>
					<h1 className={style.main__title}>Оплата</h1>
					<h2 className={style.main__subtitle}>Для вас мы подготовили несколько форматов оплаты</h2>
					<ul className={style.pay_list}>
						{
							state.pay.map(item => {
								return (
									<li key={item.id} className={style.pay_list__item}>
										{item.title && <h3 className={style.pay_list__title} dangerouslySetInnerHTML={{ __html: item.title }} />}
										<p className={style.pay_list__text} dangerouslySetInnerHTML={{ __html: item.text }} />
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

export default PayPage
