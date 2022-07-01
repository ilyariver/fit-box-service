import {FC} from 'react'
import style from './program.module.scss'

interface ProgramContent {
	text: string
	img: string
	black?: boolean
}

const Program: FC<ProgramContent> = ({text = 'Кушай на работе больше', img, black }) => {

	return (
		<div className={`${style.program} ${black && style.program_black}`}>
			<div>
				<img src={img} alt={text} className={style.program_img}/>
			</div>
			<div className={style.program_text}>{text}</div>
		</div>
	)
}

export default Program
