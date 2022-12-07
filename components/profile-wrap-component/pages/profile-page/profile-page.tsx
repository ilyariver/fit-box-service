import React, { FC } from 'react'
import style from './profile-page.module.scss'
import BlockComponent from '../../../block-component/block-component'
import InputText from '../../../shared/input-text/input-text'
import InputPhone from '../../../shared/input-phone/input-phone'

const ProfilePage: FC = () => {
	return (
		<>
			<div className={style.block}>
				<BlockComponent>
					<div className={style.title_wrap}>
						<h2 className={style.block_title}>Ваши данные</h2>
					</div>
					<div className={style.input_wrap}>
						<InputText
							validate={true}
							label="Имя"
							className={style.input} />
						<button className={style.correct_btn}>Изменить</button>
					</div>
					<div className={style.input_wrap}>
						<InputText
							validate={true}
							label="E-mail"
							className={style.input} />
						<button className={style.correct_btn}>Изменить</button>
					</div>
					<div className={style.input_wrap}>
						<InputPhone />
						<button className={style.correct_btn}>Изменить</button>
					</div>
				</BlockComponent>
			</div>
			<div className={style.blocks}>
				<BlockComponent className={style.current_block}>
					<div className={style.title_wrap}>
						<h2 className={style.block_title}>Мои адреса</h2>
						<button className={style.correct_btn}>Добавить адрес +</button>
					</div>
					<div className={style.input_wrap}>
						<InputText
							validate={true}
							label="Адрес"
							className={style.input} />
						<button className={style.correct_btn}>Изменить</button>
						<button className={style.correct_btn}>Удалить</button>
					</div>
				</BlockComponent>
				<BlockComponent>
					<div className={style.title_wrap}>
						<h2 className={style.block_title}>Изменить пароль</h2>
					</div>
					<div className={style.input_wrap}>
						<InputText
							validate={true}
							label="Старый пароль"
							className={style.input} />
					</div>
					<div className={style.input_wrap}>
						<InputText
							validate={true}
							label="Новый пароль"
							className={style.input} />
						<button className={style.correct_btn}>Изменить пароль</button>
					</div>
				</BlockComponent>
			</div>
		</>
	)
}

export default ProfilePage
