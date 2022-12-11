import React, { FC, useEffect, useState } from 'react'
import style from './address-service-component.module.scss'
import { MainButton } from '../shared/mainButton/mainButton'
import Link from 'next/link'

interface AddressServiceTypes {
	title: string
	description: string
	phoneNumber: string
	addressText: string
	smallText: string
}

const AddressServiceComponent: FC<AddressServiceTypes> = (content) => {
	const [selectCity, setSelectCity] = useState<string>('')
	const cities = {
		kazan: 'kazan',
		samara: 'samara'
	}

	useEffect(() => {
		switch (cities.kazan) {
			case 'kazan':
				return setSelectCity('https://kzn.fitbox.su/delivery')
			case 'samara':
				return setSelectCity('https://smr.fitbox.su/delivery')
			default: setSelectCity('https://fitbox.su/delivery')
		}
	}, [])

	return (
		<div className={style['address-service-component']}>
			<div className={style['address-service-component__title']}>{content.title}</div>
			<div className={style['address-service-component__description']}>{content.description}</div>
			<MainButton className={style['address-service-component__button']}>{content.phoneNumber}</MainButton>
			<div className={style['address-service-component__address-text']}>{content.addressText}</div>
			<div className={style['address-service-component__small-text']}>{content.smallText}</div>
			<Link href={selectCity}>
				<a
					className={style['address-service-component__link']}
					target={'_blank'}>Зона доставки</a>
			</Link>
		</div>
	)
}

export default AddressServiceComponent
