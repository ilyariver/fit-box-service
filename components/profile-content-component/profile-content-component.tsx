import { FC } from 'react'
import Image from 'next/image'
import camera from '../../public/images/icons/camera.svg'
import style from './profile-content-component.module.scss'
import Link from 'next/link';
import BlockComponent from '../block-component/block-component';
import InputText from '../shared/input-text/input-text';

const ProfileContentComponent: FC = () => {
    const menu = [
        {title: 'Профиль', link: '/profile/'},
        {title: 'Заказы', link: '/profile/orders'},
        {title: 'Бонусы', link: '/profile/bonuses'},
        {title: 'Пригласить друга', link: '/profile/invite'},
    ]

    return (
        <section className={style.section}>
            <div className="container">
                <div className={style.content}>
                    <div className={style.left_panel}>
                        <div className={style.top}>
                            <input type="file" className={style.avatar} />
                            <ul className={style.menu_list}>
                                {
                                    menu.map(item =>
                                        <li key={item.title} className={style.menu_item}>
                                            <Link href={item.link} className={style.menu_link}>{ item.title }</Link>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                        <button className={style.log_out}>Выйти</button>
                    </div>
                    <div className={style.right_content}>
                        <h1 className={style.title}>Александр герасимов</h1>
                        <div className={style.wrap}>
                            <div className={style.block}>
                                <BlockComponent>
                                    <div className={style.title_wrap}>
                                        <h2 className={style.block_title}>Ваши данные</h2>
                                    </div>
                                    <div className={style.input_wrap}>
                                        <InputText label="Имя" className={style.input} />
                                        <button className={style.correct_btn}>Изменить</button>
                                    </div>
                                    <div className={style.input_wrap}>
                                        <InputText label="E-mail" className={style.input} />
                                        <button className={style.correct_btn}>Изменить</button>
                                    </div>
                                    <div className={style.input_wrap}>
                                        <InputText label="Телефон" className={style.input} />
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
                                        <InputText label="Адрес" className={style.input} />
                                        <button className={style.correct_btn}>Изменить</button>
                                        <button className={style.correct_btn}>Удалить</button>
                                    </div>
                                </BlockComponent>
                                <BlockComponent>
                                    <div className={style.title_wrap}>
                                        <h2 className={style.block_title}>Изменить пароль</h2>
                                    </div>
                                    <div className={style.input_wrap}>
                                        <InputText label="Старый пароль" className={style.input} />
                                    </div>
                                    <div className={style.input_wrap}>
                                        <InputText label="Новый пароль" className={style.input} />
                                        <button className={style.correct_btn}>Изменить пароль</button>
                                    </div>
                                </BlockComponent>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProfileContentComponent
