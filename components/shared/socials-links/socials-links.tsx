import { FC } from 'react'
import style from './socials-links.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { state } from '../../../mockDate'

interface SocialsType {
	color?: string
}
const SocialsLinks: FC<SocialsType> = ({color}) => {
	return (
		<div className={style.links}>
			{
				state.socials.map(social => {
					return (
						<div
							key={social.id}
							className={style.links__item}
							title={social.title}>
							<Link href={social.link}>
								<a target="_blank">
									<Image src={color === 'black' ? social.color : social.img} alt={social.title} />
								</a>
							</Link>
						</div>
					)
				})
			}
		</div>
	)
}

export default SocialsLinks
