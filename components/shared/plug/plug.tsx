import { FC } from 'react'
import style from './plug.module.scss'
import lemon from '../../../public/images/lemon.svg'

const Plug: FC = () => {
	return (
		<div className={style.plug}>
			<img src={lemon.src} className={style.img}/>
		</div>
	)
}

export default Plug
