import style from './first-section.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { MainButton } from '../../../shared/mainButton/mainButton'
import PreviewMenu from '../../../shared/preview-menu/preview-menu'
import girl from '../../../../public/images/girl@x3.png'
import girlEllipse from '../../../../public/images/girl-ellipse.svg'
import { state } from '../../../../mockDate'

const FirstSection = () => {

	return (
		<section className={style.first_section}>
			<div className={`${style.container} container`}>
				<div className={`${style.girl_wrap}`} data-aos="zoom-out">
					<Image src={girl} alt="Девушка" width={637} height={786} />
				</div>
				<div className={style.girl_ellipse} data-aos="zoom-in" data-aos-delay="1000">
					<Image src={girlEllipse} alt="Круг"/>
				</div>
				<h1 className={style.title} data-aos="fade-right" >
					Правильное питание <br />с&nbsp;доставкой <br />в&nbsp;Ульяновске
				</h1>
				<Link href="#section-menu">
					<a>
						<MainButton width="214px" bottom="35px">Выбрать меню</MainButton>
					</a>
				</Link>
				<div className={style.previews}>
					{
						state.menu.map((item,idx) => {
							return (
								<div className={style.wrap_preview} key={item.id} data-aos="zoom-out" data-aos-delay={idx * 500}>
									<PreviewMenu text={item.title} img={item.img} />
								</div>
							)
						})
					}
				</div>
				<div className={style.socials}>
					<div className={style.telegram}>
						<a href="#" aria-label="Телеграм">
							<svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M25.9813 0.893477C25.5579 0.325539 24.9013 0 24.1792 0C23.7129 0 23.2299 0.13322 22.7431 0.395655L2.01508 11.5531C0.541823 12.3474 0.439378 13.5434 0.46377 14.0202C0.487186 14.4999 0.712565 15.677 2.25802 16.3069L4.90695 17.3827C5.40941 17.5871 5.9714 17.6923 6.57631 17.6923C6.67193 17.6923 6.76364 17.6793 6.85828 17.6742C6.82218 17.7223 6.77827 17.7593 6.74511 17.8094C6.25141 18.5678 6.22703 19.5955 6.67388 20.7022C6.68071 20.7213 6.68754 20.7373 6.69436 20.7533C7.47783 22.5352 8.34909 24.5466 8.45446 24.8261C8.71399 25.5212 9.3755 26 10.1014 26C11.2195 26 11.5512 25.4471 13.3806 22.39C13.523 22.1657 13.8401 21.6449 13.8938 20.9817C14.1075 21.0708 14.3085 21.153 14.4802 21.2241L17.415 22.4522C18.0033 22.6986 18.5184 22.916 18.7897 23.0311C18.8736 23.0842 18.9624 23.1293 19.055 23.1683C19.2619 23.2525 19.4824 23.2956 19.7039 23.2956C21.0385 23.2956 21.3586 22.1085 21.5304 21.4725C21.6152 21.1579 21.7323 20.7223 21.8581 20.2414L26.3344 3.35555C26.672 2.08045 26.2575 1.26609 25.9813 0.893477ZM11.9025 21.4285C11.9025 21.4285 10.2419 24.204 10.1004 24.204C10.0965 24.204 10.0946 24.202 10.0926 24.1981C9.92968 23.7483 8.2886 20.0151 8.2886 20.0151C7.98615 19.2669 8.04079 18.6258 8.56082 18.6258C8.67497 18.6258 8.81156 18.6569 8.97156 18.7249L10.2458 19.4051C10.4585 19.5543 10.6907 19.6836 10.9463 19.7867L11.0107 19.8117L11.1307 19.8738C12.1152 20.4087 12.4284 20.6021 11.9025 21.4285ZM24.6466 2.88276L20.1722 19.7687C19.9195 20.7203 19.7088 21.4985 19.7049 21.4985C19.701 21.4965 19.6961 21.4785 19.6961 21.4756C19.6961 21.4695 18.9663 21.163 18.0745 20.7884L15.1378 19.5604C14.246 19.1897 12.7835 18.5897 11.8869 18.2351L11.7386 18.174L11.1902 17.8815C10.6468 17.4538 10.599 16.7488 11.1454 16.1508L20.2308 6.1632C20.5957 5.76354 20.7332 5.5572 20.6542 5.5572C20.5918 5.5572 20.3898 5.69042 20.0523 5.96186L8.55692 15.2712C8.05542 15.6729 7.29343 15.8973 6.57729 15.8973C6.21044 15.8973 5.85431 15.8372 5.55089 15.714L2.9039 14.6392C2.00923 14.2756 1.97508 13.6045 2.82683 13.1437L23.5568 1.98428C23.7958 1.85607 24.0056 1.79596 24.1792 1.79596C24.6251 1.79596 24.828 2.19664 24.6466 2.88276Z" fill="white"/>
							</svg>
						</a>
					</div>
					<div className={style.instagram}>
						<Link href="#">
							<a aria-label="Инстаграм">
								<svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g clipPath="url(#clip0_790_1152)">
										<mask id="mask0_790_1152" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="26">
											<path fillRule="evenodd" clipRule="evenodd" d="M0.463867 0H27.4639V26H0.463867V0Z" fill="#0D9B54"/>
										</mask>
										<g mask="url(#mask0_790_1152)">
											<path fillRule="evenodd" clipRule="evenodd" d="M20.0088 0H7.90549C3.79486 0 0.451172 3.21862 0.451172 7.17523V18.825C0.451172 22.7816 3.79486 26 7.90549 26H20.0088C24.1195 26 27.4631 22.7808 27.4631 18.825V7.17523C27.4631 3.21862 24.1195 0 20.0088 0ZM25.0679 18.825C25.0679 21.5095 22.7993 23.6933 20.0102 23.6933H7.90688C5.11781 23.6933 2.8492 21.5095 2.8492 18.825V7.17526C2.8492 4.49068 5.11781 2.30687 7.90688 2.30687H20.0102C22.7993 2.30687 25.0679 4.49068 25.0679 7.17526V18.825Z" fill="white"/>
											<path fillRule="evenodd" clipRule="evenodd" d="M13.9545 6.46387C10.2099 6.46387 7.16406 9.39585 7.16406 12.9994C7.16406 16.6039 10.2099 19.5359 13.9545 19.5359C17.6983 19.5359 20.745 16.6039 20.745 12.9994C20.745 9.39585 17.6983 6.46387 13.9545 6.46387ZM13.9548 17.2844C11.5003 17.2844 9.50242 15.3629 9.50242 12.9993C9.50242 10.6367 11.4995 8.71361 13.9548 8.71361C16.4102 8.71361 18.4072 10.6367 18.4072 12.9993C18.4072 15.3629 16.4094 17.2844 13.9548 17.2844Z" fill="white"/>
											<path fillRule="evenodd" clipRule="evenodd" d="M20.822 4.88379C20.4102 4.88379 20.0059 5.04389 19.7153 5.32502C19.4224 5.60495 19.2549 5.99458 19.2549 6.39245C19.2549 6.78877 19.4231 7.17789 19.7153 7.45902C20.0055 7.73894 20.4102 7.90042 20.822 7.90042C21.2351 7.90042 21.6378 7.73894 21.9299 7.45902C22.222 7.17789 22.389 6.78808 22.389 6.39245C22.389 5.99458 22.222 5.60495 21.9299 5.32502C21.6391 5.04389 21.2351 4.88379 20.822 4.88379Z" fill="white"/>
										</g>
									</g>
									<defs>
										<clipPath id="clip0_790_1152">
											<rect width="27" height="26" fill="white" transform="translate(0.460938)"/>
										</clipPath>
									</defs>
								</svg>
							</a>
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}

export default FirstSection
