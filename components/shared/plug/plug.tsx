import { FC } from 'react'
import style from './plug.module.scss'
import lemon from '../../../public/images/lemon.svg'

const Plug: FC = () => {
	return (
		<div className={style.plug}>
			<img src={lemon.src} className={style.img} alt="лемон"/>
			<div className={style.plug_text}>Загрузка...</div>
		</div>
	)
}

export default Plug
