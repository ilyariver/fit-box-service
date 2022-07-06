import React from 'react'
import style from './map-section.module.scss'
import AddressServiceComponent from '../../../address-service-component/address-service-component'
import { state } from '../../../../pages/mockDate'

const MapSection = () => {
	return (
		<section className={style.map_section}>
			<div className={style.map_wrap} style={{position:'relative',overflow:'hidden',fontSize: "0"}}>
				<a href="https://yandex.ru/maps/192/vladimir/?utm_medium=mapframe&utm_source=maps"
				style={{color:'#eee',fontSize:'12px',position:'absolute',top:'0'}}>Владимир</a>
				<a href="https://yandex.ru/maps/192/vladimir/?ll=40.406635%2C56.129057&utm_medium=mapframe&utm_source=maps&z=13"
					style={{color:'#eee',fontSize:'12px',position:'absolute',top:'14px'}}>Яндекс Карты — транспорт, навигация, поиск мест</a>
				<iframe src="https://yandex.ru/map-widget/v1/-/CBR15MxKOD" width="100%" height="490" frameBorder="1"
						allowFullScreen={true} style={{ position: 'relative', border: 'none', filter: 'brightness(0.8)' }}></iframe>
			</div>
			<div className={style.address}>
				<AddressServiceComponent
					title={state.addressService.title}
					description={state.addressService.description}
					phoneNumber={state.addressService.phoneNumber}
					addressText={state.addressService.addressText}
					smallText={state.addressService.smallText}
				/>
			</div>
		</section>
	)
}

export default MapSection
