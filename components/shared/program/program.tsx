import React, {FC} from 'react'
import style from './program.module.scss'

interface ProgramContent {
	text: string
	img: string
	black?: boolean
	right?: string
}

const Program: FC<ProgramContent> = ({text , img, black, right }) => {

	return (
		<div style={{marginRight: right}} className={`${style.program} ${black && style.program_black}`}>
			<div>
				<picture>
					<source srcSet={img} type="image/webp" />
					<img src={img} alt={text} className={style.program_img}/>
				</picture>
			</div>
			<div className={style.program_text}>{text}</div>
		</div>
	)
}

export default Program
