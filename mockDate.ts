import runImgIcon from './public/images/icons/icon-runner.png'
import personImgIcon from './public/images/icons/icon-person.png'
import workerImgIcon from './public/images/icons/icon-worker.png'
import sportImgIcon from './public/images/icons/icon-sport.png'
import gymImgIcon from './public/images/icons/icon-gym.png'
import orderIcon from './public/images/icons/icon-order.svg'
import enjoyIcon from './public/images/icons/icon-enjoy.svg'
import cookingIcon from './public/images/icons/icon-cooking.svg'
import deliveryIcon from './public/images/icons/icon-delivery.svg'
import personOne from './public/images/1.png'
import personTwo from './public/images/2.png'
import personThree from './public/images/3.png'
import personFour from './public/images/4.png'
import location from './public/images/icons/icon-location.svg'
import call from './public/images/icons/icon-call.svg'
import logo from './public/images/logo.png'
import plate from './public/images/plate@x1.png'

const optionsBtns = [
	{number: 1, active: true},
	{number: 5, active: false},
	{number: 6, active: false},
	{number: 7, active: false},
	{number: 14, active: false},
	{number: 28, active: false},
]

export const cities = [
	{id: 1, title: 'Ульяновск'},
	{id: 2, title: 'Димитровград'},
	{id: 3, title: 'Казань'},
	{id: 4, title: 'Самара'},
	{id: 5, title: 'Тольятти'},
]

export const state = {
	header: {
		logo: {
			img: logo,
			alt: 'логотип FitBox'
		},
		tel: {
			icon: call,
			number: '8 900 999 99 99',
			link: '+79009999999'
		},
		location: {
			icon: location,
			cities: [cities[0].title],
		},
		navigation: [{ title:'Рационы меню', link: '#section-menu' }, { title:'Доставка и оплата', link: '#' }, { title:'Обеды в офис', link: '#section-cost' }]
	},
	menu: [
		{id:1, title: 'Омлет с куриным филе', img: plate},
		{id:2, title: 'Омлет с говяжим филе', img: plate},
	],
	programList: [
		{id: 1,title: 'Кушай на работе больше', img: workerImgIcon, text: 'Пятиразовое питание на 2 000 ккал/день для поддержания оптимальной формы при тренировках и просто активном образе жизни ', active: false},
		{id: 2,title: 'Похудей активно', img: sportImgIcon, text: 'Похудей активно на 2 000 ккал/день для поддержания оптимальной формы при тренировках и просто активном образе жизни ', active: true},
		{id: 3,title: 'Не готовь весь день', img: personImgIcon, text: 'Не готовь весь день на 2 000 ккал/день для поддержания оптимальной формы при тренировках и просто активном образе жизни', active: true},
		{id: 4,title: 'Будь в форме', img: runImgIcon, text: 'Будь в форме на 2 000 ккал/день для поддержания оптимальной формы при тренировках и просто активном образе жизни', active: true},
		{id: 5,title: 'Набери форму', img: gymImgIcon, text: 'Набери форму на 2 000 ккал/день для поддержания оптимальной формы при тренировках и просто активном образе жизни', active: true},
	],
	programOptions: {

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
	]
}
