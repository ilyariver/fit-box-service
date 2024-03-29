import orderIcon from './public/images/icons/icon-order.svg'
import enjoyIcon from './public/images/icons/icon-enjoy.svg'
import cookingIcon from './public/images/icons/icon-cooking.svg'
import deliveryIcon from './public/images/icons/icon-delivery.svg'
import personOne from './public/images/1.png'
import personTwo from './public/images/2.png'
import personThree from './public/images/3.png'
import personFour from './public/images/4.png'
import call from './public/images/icons/icon-call.svg'
import logo from './public/images/logo.svg'
import logoBig from './public/images/logo-big.svg'
import logoWhite from './public/images/logo-white.svg'
import plate from './public/images/plate@x1.png'
import vk from './public/images/icons/icon-vk.svg'
import instagram from './public/images/icons/icon-instagram.svg'
import whatsapp from './public/images/icons/icon-watsapp.svg'
import telegram from './public/images/icons/icon-telegram.svg'
import vkBlack from './public/images/icons/icon-vk-black.svg'
import instagramBlack from './public/images/icons/icon-instagram-black.svg'
import whatsappBlack from './public/images/icons/icon-whatsapp-black.svg'
import telegramBlack from './public/images/icons/icon-telegram-black.svg'
import ourFoodIcons from './public/images/icons/icon-food-1.png'
import ourFoodIcons2 from './public/images/icons/icon-food-2.png'
import ourFoodIcons3 from './public/images/icons/icon-food-3.png'
import ourFoodIcons4 from './public/images/icons/icon-food-4.png'
import ourFoodIcons5 from './public/images/icons/icon-food-5.png'
import ourFoodIcons6 from './public/images/icons/icon-food-6.png'

const optionsBtns = [
	{number: 1, active: true},
	{number: 5, active: false},
	{number: 6, active: false},
	{number: 7, active: false},
	{number: 14, active: false},
	{number: 28, active: false},
]

// export const cities = [
// 	{id: 1, title: 'Ульяновск', link: '/ulyanovsk', active: false},
// 	{id: 2, title: 'Димитровград', link: '/dimitrovgrad', active: false},
// 	{id: 3, title: 'Казань', link: '/kazan', active: false},
// 	{id: 4, title: 'Самара', link: '/samara', active: false},
// 	{id: 5, title: 'Тольятти', link: '/togliatti', active: false},
// ]

export const state = {
	header: {
		logo: {
			img: logo,
			logoBig,
			logoWhite,
			alt: 'логотип FitBox'
		},
		tel: {
			icon: call,
			number: '8 900 999 99 99',
			link: '+79009999999'
		},
		// location: {
		// 	icon: location,
			// cities,
		// },
		navigation: [
			{ title:'Рационы меню', link: '#section-menu', target: false },
			{ title:'Доставка и оплата', link: '#faq', target: false },
			{ title:'Обеды в офис', link: 'https://micromarket.fitbox.su/', target: true }]
	},
	menu: [
		{id:1, title: 'Омлет с куриным филе', img: plate},
		{id:2, title: 'Омлет с говяжим филе', img: plate},
	],
	socials: [
		{id: 1, img: vk, color: vkBlack, title: 'VK', link: 'https://vk.com/fitboxsu'},
		{id: 2, img: instagram, color: instagramBlack, title: 'Instagram', link: 'https://www.instagram.com/fitbox.su/'},
		{id: 3, img: whatsapp, color: whatsappBlack, title: 'Whatsapp', link: 'https://wa.me/79370077712'},
		{id: 4, img: telegram, color: telegramBlack, title: 'Telegram', link: 'https://t.me/fitboxsu'},
	],
	programList: {
		'Офис': 'Трехразовое питание на 900 ккал/день разнообразит ваш привычный рацион и поможет избежать ежедневных вопросов "что бы сегодня поесть?"',
		'Офис+': 'Трехразовое питание на 1500 ккал/день разнообразит ваш привычный рацион увеличенными порциями и поможет избежать ежедневных вопросов "что бы сегодня поесть?"',
		'Фитнес': 'Пятиразовое питание на 1100 ккал / день поможет вам быстро и комфортно снизить вес',
		'Классик мини': 'Пятиразовое питание на 1 400 ккал/день для тех, кто занимается спортом, и для тех, кто не делает этого, но заботится о своем ежедневном рационе',
		'Классик': 'Пятиразовое питание на 2 000 ккал/день для поддержания оптимальной формы при тренировках и просто активном образе жизни ',
		'Классик+': 'Пятиразовое питание на 2 500 ккал/день подходит для активного набора мышечной массы',
	},
	dataFaq: {
		title: 'Частые вопросы',

	},
	weekDays: [
		{title: 'ПН', active: true},
		{title: 'ВТ', active: false},
		{title: 'СР', active: false},
		{title: 'ЧТ', active: false},
		{title: 'ПТ', active: false},
		{title: 'СБ', active: false},
		{title: 'ВС', active: false},
	],
	optionsBtns,
	bannerAdvantagesInfo: [
		{title: 'до 15 часов', text: 'Экономия времени в неделю на походах в магазин и приготовлении еды'},
		{title: '14 дней', text: 'Разнообразное и вкусное меню без повторений '},
		{title: 'Баланс', text: 'Сбалансированный по БЖУ и калориям рацион'},
	],
	orderInfo: {
		title: 'Офис',
		cCal: 250,
		description: 'Пятиразовое питание на 2 000 ккал/день для поддержания оптимальной формы при тренировках и просто активном образе жизни',
		text: '5 блюд в день за 1150 ₽',
		deliveryDescription: 'Доставка ежедневно с 12:00 до 20:00',
		buttonsGroup: optionsBtns,
		totalSum: 1150
	},
	howToWorkInfo: [
		{
			title: 'Сформируйте ваш заказ',
			text: 'Выберите одну из нескольких программ питания, количество блюд на день, желаемую дату начала программы и её продолжительность.',
			img: orderIcon,
		},
		{
			title: 'Мы все приготовим',
			text: 'ВМы бережно заботимся о качестве закупаемых нами продуктов и процессе приготовления ваших блюд.',
			img: cookingIcon,
		},
		{
			title: 'И привезем',
			text: 'Свежая продукция приедет к вам удобно, стильно и герметично упакованной в любом часовом интервале с 18:00 до 22:00. Доставка готовой еды по Ульяновску.',
			img: deliveryIcon,
		},
		{
			title: 'Наслаждайтесь',
			text: 'Больше никаких некачественных продуктов в вашем рационе, а ещё усталости и угрызений совести. Теперь только полезные и яркие блюда!',
			img: enjoyIcon,
		},
	],
	feedbackPeople: [
		{img: personOne, name: 'Александр', comment: 'Выберите одну из нескольких программ питания, количество блюд на день, желаемую дату начала программы и её продолжительность.'},
		{img: personTwo, name: 'Виктория', comment: 'Мы бережно заботимся о качестве закупаемых нами продуктов и процессе приготовления ваших блюд.'},
		{img: personThree, name: 'Кирилл', comment: 'Свежая продукция приедет к вам удобно, стильно и герметично упакованной в любом часовом интервале с 18:00 до 22:00. Доставка готовой еды по Ульяновску.'},
		{img: personFour, name: 'Ольга', comment: 'Больше никаких некачественных продуктов в вашем рационе, а ещё усталости и угрызений совести. Теперь только полезные и яркие блюда!'},
	],
	aboutService: {
		title: 'FITBOX',
		text: 'Это новый, революционный сервис доставки питания. В новом проекте мы объединили знания и уникальный опыт наших специалистов для того, чтобы вы каждый день могли получать полезное, вкусное, сбалансированное и продуманное питание. Оформите заказ на доставку готовой еды в Ульяновске на сайте или по телефону'
	},
	addressService: {
		title: 'Адрес производства',
		description: 'Заказать доставку готового питания',
		phoneNumber: '8 (800) 550-12-95',
		addressText: 'Россия, Ульяновск, улица Артёма 14 (самовывоза нет)',
		smallText: 'Доставка  правильного питания по Ульяновску осуществляется каждый день по вечерам с 17:00 до 23:00. Ежедневно с вами будет предварительно связываться курьер и уточнять удобный часовой интервал.'
	},
	accordionContent: [
		{
			id: 1,
			type: 'Рационы',
			questions: [
				{title: '1Можно ли есть блюда в том порядке, в котором я хочу?', description:'Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров. Один из проверенных способов это сделать — помочь приюту для животных Домашний. У этих ребят живёт более 1500 четвероногих, и благодаря их труду ежегодно сотни питомцев находят свой новый дом.'},
				{title: '1Как часто меняются блюда?', description:'Учитывая ключевые сценарии поведения, постоянный количественный рост и сфера нашей активности говорит о возможностях экспериментов, поражающих по своей масштабности и грандиозности. Кстати, активно развивающиеся страны третьего мира объективно рассмотрены соответствующими инстанциями.'},
				{title: '1Можно ли есть блюда в том порядке, в котором я хочу?', description:'Однозначно, тщательные исследования конкурентов набирают популярность среди определенных слоев населения, а значит, должны быть подвергнуты целой серии независимых исследований. Следует отметить, что перспективное планирование говорит о возможностях анализа существующих паттернов поведения.'},
				{title: '1Можно ли есть другие продукты вместе с вашими блюдами?', description:'Кстати, ключевые особенности структуры проекта являются только методом политического участия и разоблачены. Задача организации, в особенности же консультация с широким активом обеспечивает актуальность модели развития.'},
			]
		},
		{
			id: 2,
			type: 'Похудение',
			questions: [
				{title: '234Можно ли есть блюда в том порядке, в котором я хочу?', description:'Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров. Один из проверенных способов это сделать — помочь приюту для животных Домашний. У этих ребят живёт более 1500 четвероногих, и благодаря их труду ежегодно сотни питомцев находят свой новый дом.'},
				{title: '234Как часто меняются блюда?', description:'Учитывая ключевые сценарии поведения, постоянный количественный рост и сфера нашей активности говорит о возможностях экспериментов, поражающих по своей масштабности и грандиозности. Кстати, активно развивающиеся страны третьего мира объективно рассмотрены соответствующими инстанциями.'},
				{title: '234Можно ли есть блюда в том порядке, в котором я хочу?', description:'Однозначно, тщательные исследования конкурентов набирают популярность среди определенных слоев населения, а значит, должны быть подвергнуты целой серии независимых исследований. Следует отметить, что перспективное планирование говорит о возможностях анализа существующих паттернов поведения.'},
				{title: '234Можно ли есть другие продукты вместе с вашими блюдами?', description:'Кстати, ключевые особенности структуры проекта являются только методом политического участия и разоблачены. Задача организации, в особенности же консультация с широким активом обеспечивает актуальность модели развития.'},
			]
		},
		{
			id: 3,
			type: 'Доставка и оплата',
			questions: [
				{title: '34Можно ли есть блюда в том порядке, в котором я хочу?', description:'Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров. Один из проверенных способов это сделать — помочь приюту для животных Домашний. У этих ребят живёт более 1500 четвероногих, и благодаря их труду ежегодно сотни питомцев находят свой новый дом.'},
				{title: '34Как часто меняются блюда?', description:'Учитывая ключевые сценарии поведения, постоянный количественный рост и сфера нашей активности говорит о возможностях экспериментов, поражающих по своей масштабности и грандиозности. Кстати, активно развивающиеся страны третьего мира объективно рассмотрены соответствующими инстанциями.'},
				{title: '34Можно ли есть блюда в том порядке, в котором я хочу?', description:'Однозначно, тщательные исследования конкурентов набирают популярность среди определенных слоев населения, а значит, должны быть подвергнуты целой серии независимых исследований. Следует отметить, что перспективное планирование говорит о возможностях анализа существующих паттернов поведения.'},
				{title: '34Можно ли есть другие продукты вместе с вашими блюдами?', description:'Кстати, ключевые особенности структуры проекта являются только методом политического участия и разоблачены. Задача организации, в особенности же консультация с широким активом обеспечивает актуальность модели развития.'},
			]
		},
		{
			id: 4,
			type: 'Хранение',
			questions: [
				{title: '4Можно ли есть блюда в том порядке, в котором я хочу?', description:'Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров. Один из проверенных способов это сделать — помочь приюту для животных Домашний. У этих ребят живёт более 1500 четвероногих, и благодаря их труду ежегодно сотни питомцев находят свой новый дом.'},
				{title: '4Как часто меняются блюда?', description:'Учитывая ключевые сценарии поведения, постоянный количественный рост и сфера нашей активности говорит о возможностях экспериментов, поражающих по своей масштабности и грандиозности. Кстати, активно развивающиеся страны третьего мира объективно рассмотрены соответствующими инстанциями.'},
				{title: '4Можно ли есть блюда в том порядке, в котором я хочу?', description:'Однозначно, тщательные исследования конкурентов набирают популярность среди определенных слоев населения, а значит, должны быть подвергнуты целой серии независимых исследований. Следует отметить, что перспективное планирование говорит о возможностях анализа существующих паттернов поведения.'},
				{title: '4Можно ли есть другие продукты вместе с вашими блюдами?', description:'Кстати, ключевые особенности структуры проекта являются только методом политического участия и разоблачены. Задача организации, в особенности же консультация с широким активом обеспечивает актуальность модели развития.'},
			]
		}
	],
	aboutPage: {
		ourFood: [
			{id: 1, img: ourFoodIcons, title: 'Улучшает работу мозга', text: 'Наше питание исключает вредный для организма вредное количество сахар и содержит все необходимые для грамотного функционирования мозга элементы: большое количество минералов, витаминов и полезных жиров.'},
			{id: 2, img: ourFoodIcons2, title: 'Запускает процесс восстановления клеток', text: 'Рационы обогащены белком, который отвечает за рост и развитие клеток.'},
			{id: 3, img: ourFoodIcons3, title: 'Заряжает энергией', text: 'За счёт «цикличности» питания организм активизирует внутренние запасы энергии, а сбалансированный состав блюд дарит вам силы и бодрость.'},
			{id: 4, img: ourFoodIcons4, title: 'Оптимизирует метаболизм', text: 'Сбалансированная, полезная и питательная еда способствует здоровому и активному обмену веществ.'},
			{id: 5, img: ourFoodIcons5, title: 'Способствует снижению веса', text: 'Качество и количество еды – основа здоровья и стройности человека, а увеличение перерывов между приёмами пищи может стать эффективным инструментом для снижения массы тела.'},
			{id: 6, img: ourFoodIcons6, title: 'Нормализует гормональный фон', text: 'Здоровые жиры и цельные продукты поддерживают баланс гормональной системы.'},
		]
	},
	delivery: [
		{id: 1, title: '', text: 'Ежедневно с 17:00 до 22:00, кроме субботы: в пятницу вечером мы доставляем наборы сразу на два дня.'},
		{id: 2, title: '', text: 'Вы согласовываете с водителем любой предложенный им 60-минутный интервал. Водитель связывается с вам и ежедневно по звонку или смс.'},
		{id: 3, title: '', text: 'Если до 17:00 вы не вышли на связь и не согласовали время доставки, мы оставляем за собой право включить платную доставку +150₽.'},
		{id: 4, title: '', text: 'Если вы в указанное время и в указанном месте вы не входите на связь с водителем в течение 15 минут, он уезжает к другому клиенту. В этом случае вам нужно изменить время доставки, а так же оплатить дополнительную стоимость доставки +150₽.'},
		{id: 5, title: 'Как поменять время и место доставки?', text: 'Адрес доставки и/или время доставки можно поменять до отгрузки в 17:00. В случае, если вы меняете адрес и/или время доставки после 17:00 доплата составит +150₽.'},
		{id: 6, title: '', text: 'Чтобы изменить адрес и время доставки, вам нужно позвонить по бесплатному телефону <a rel="noreferrer" href="tel:+78005501295">8 (800) 550-12-95.</a> Или написать в WhatsApp <a target="_blank" rel="noreferrer" href="https://wa.me/79370077712">+7 (937) 007-77-12.</a>'},
		{id: 7, title: '', text: 'Уважаемые клиенты, обращаем ваше внимание на то, что доставка уже включена в стоимость товаров. <a target="_blank" rel="noreferrer" href="https://fitbox.su/delivery">Зона бесплатной и платной доставок.</a>'},
	],
	pay: [
		{id: 1, title: 'Наличные.', text: 'Вы отдаёте деньги при получении товаров / оказании услуг и вместе с заказом получаете все необходимые документы и кассовый чек.'},
		{id: 2, title: 'Банковские карты.', text: 'Оплата заказа также производится через платежную систему банка Сбербанк (ПАО) при получении заказа. Не принимаются банковские карты МИР, Visa и MasterCard без кода CVV2/CVC2.'},
		{id: 3, title: '<span style="color: #FF576A;">Внимание!</span>', text: '<span>Во избежание получения товара третьими лицами, выдача товара производится только контактному лицу, указанному в заказе.</span><span>При доставке платеж будет совершён при помощи мобильного банковского терминала.</span><span>Вы можете произвести оплату как наличными, так и банковской картой.</span>Позвонив нам, вы сможете получить консультацию менеджера, который поможет подобрать программ'},
		{id: 4, title: '', text: 'Контактный телефон: <a rel="noreferrer" href="tel:+78005501295">8 (800) 550-12-95.</a>'},
	]
}
