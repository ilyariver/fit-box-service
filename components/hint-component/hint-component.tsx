import {FC} from 'react'
import style from './hint-component.module.scss'

interface Hint {
	text: string
}

const HintComponent: FC<Hint> = ({text}) => {
	return (
		<div className={style['hint']}>
			<div className={style['hint__indicator']}></div>
			<div className={style['hint__text']}>{text}</div>
		</div>
	)
}

export default HintComponent
