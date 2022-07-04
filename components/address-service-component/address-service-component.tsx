import React, {FC} from 'react'
import style from './address-service-component.module.scss'
import { MainButton } from '../shared/mainButton/mainButton'

interface AddressServiceTypes {
	title: string
	description: string
	phoneNumber: string
	addressText: string
	smallText: string
}

const AddressServiceComponent: FC<AddressServiceTypes> = (content) => {
	return (
		<div className={style['address-service-component']}>
			<div className={style['address-service-component__title']}>{content.title}</div>
			<div className={style['address-service-component__description']}>{content.description}</div>
			<div className={style['address-service-component__button']}>
				<MainButton title={content.phoneNumber} width="316px" fontSize="18px" />
			</div>
			<div className={style['address-service-component__address-text']}>{content.addressText}</div>
			<div className={style['address-service-component__small-text']}>{content.smallText}</div>
		</div>
	)
}

export default AddressServiceComponent
