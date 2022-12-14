import { FC } from 'react'
import style from './socials-links.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { state } from '../../../mockDate'

const SocialsLinks = () => {
	return (
		<div className={style.links}>
			{
				state.socials.map(social => {
					return (
						<div className={style.links__item} title={social.title}>
							<Link href={social.link}>
								<a>
									<Image src={social.img} alt={social.title} />
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
