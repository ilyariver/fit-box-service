import React, {FC} from 'react'
import style from './choice-program-component.module.scss'
import dish from '../../public/images/dish.png'

const MenuItem = () => {
	return (
		<div className={style['choice-program__item']}>
			<figure>
				<img src={dish.src} alt="" className={style['choice-program__img']}/>
				<figcaption className={style['choice-program__dish-figcaption']}>
					<div className={style['choice-program__figcaption-title']}>Омлет с куриным филе</div>
					<div className={style['choice-program__figcaption-composition-products-text']}>Куриное филе, молоко, яйца, помидоры, соль, микрозелень</div>
				</figcaption>

			</figure>
		</div>
	)
}

export default MenuItem
