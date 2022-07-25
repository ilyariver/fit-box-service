import React, {FC} from 'react'
import Image from 'next/image'
import style from './choice-program-component.module.scss'
import { ProgramMenuList } from '../../types/programTypes'

interface WeekMenuTypes {
	context: ProgramMenuList
}

const MenuItem: FC<WeekMenuTypes> = ({context}) => {

	return (
		<div className={style['choice-program__item']} data-aos="fade-top">
			<figure className={style['choice-program__figure']}>
				<div>
					<div className={style['choice-program__img']}>
						<Image src={context.img} alt="Блюдо" placeholder="blur"/>
					</div>
				</div>
				<figcaption className={style['choice-program__dish-figcaption']}>
					<div className={style['choice-program__figcaption-title']} title={context.title}>{context.title}</div>
					<div className={style['choice-program__figcaption-composition-products-text']} title={context.productComposition}>{context.productComposition}</div>
				</figcaption>
			</figure>
		</div>
	)
}

export default MenuItem
