import React, { FC } from 'react'
import style from './invite-page.module.scss'

const InvitePage: FC = () => {
	return (
		<div className={style.invite}>
			<p>Вас никто не приглашал</p>
		</div>
	)
}

export default InvitePage
