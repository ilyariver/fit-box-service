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

const optionsBtns = [
	{title: 'Пробный день', active: true},
	{title: '5 дней', active: false},
	{title: '6 дней', active: false},
	{title: '7 дней', active: false},
	{title: '14 дней', active: false},
	{title: '28 дней', active: false},
]

export const state = {
	programList: [
		{title: 'Кушай на работе больше', img: workerImgIcon.src, black: false},
		{title: 'Похудей активно', img: sportImgIcon.src, black: true},
		{title: 'Не готовь весь день', img: personImgIcon.src, black: true},
		{title: 'Будь в форме', img: runImgIcon.src, black: true},
		{title: 'Набери форму', img: gymImgIcon.src, black: true},
	],
	cCalBtns: [
		{title: 'Офис', cCal: 250, active: true},
		{title: 'Офис+', cCal: 250, active: false},
		{title: 'Фитнес', cCal: 250, active: false},
		{title: 'Классик мини', cCal: 250, active: false},
		{title: 'Классик', cCal: 250, active: false},
		{title: 'Классик+', cCal: 250, active: false},
	],
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
			img: orderIcon.src,
		},
		{
			title: 'Мы все приготовим',
			text: 'ВМы бережно заботимся о качестве закупаемых нами продуктов и процессе приготовления ваших блюд.',
			img: cookingIcon.src,
		},
		{
			title: 'И привезем',
			text: 'Свежая продукция приедет к вам удобно, стильно и герметично упакованной в любом часовом интервале с 18:00 до 22:00. Доставка готовой еды по Ульяновску.',
			img: deliveryIcon.src,
		},
		{
			title: 'Наслаждайтесь',
			text: 'Больше никаких некачественных продуктов в вашем рационе, а ещё усталости и угрызений совести. Теперь только полезные и яркие блюда!',
			img: enjoyIcon.src,
		},
	],
	feedbackPeople: [
		{img: personOne.src, name: 'Александр', comment: 'Выберите одну из нескольких программ питания, количество блюд на день, желаемую дату начала программы и её продолжительность.'},
		{img: personTwo.src, name: 'Виктория', comment: 'Мы бережно заботимся о качестве закупаемых нами продуктов и процессе приготовления ваших блюд.'},
		{img: personThree.src, name: 'Кирилл', comment: 'Свежая продукция приедет к вам удобно, стильно и герметично упакованной в любом часовом интервале с 18:00 до 22:00. Доставка готовой еды по Ульяновску.'},
		{img: personFour.src, name: 'Ольга', comment: 'Больше никаких некачественных продуктов в вашем рационе, а ещё усталости и угрызений совести. Теперь только полезные и яркие блюда!'},
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
		{title: 'Можно ли есть блюда в том порядке, в котором я хочу?', description:'Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров. Один из проверенных способов это сделать — помочь приюту для животных Домашний. У этих ребят живёт более 1500 четвероногих, и благодаря их труду ежегодно сотни питомцев находят свой новый дом.'},
		{title: 'Как часто меняются блюда?', description:'Учитывая ключевые сценарии поведения, постоянный количественный рост и сфера нашей активности говорит о возможностях экспериментов, поражающих по своей масштабности и грандиозности. Кстати, активно развивающиеся страны третьего мира объективно рассмотрены соответствующими инстанциями.'},
		{title: 'Можно ли есть блюда в том порядке, в котором я хочу?', description:'Однозначно, тщательные исследования конкурентов набирают популярность среди определенных слоев населения, а значит, должны быть подвергнуты целой серии независимых исследований. Следует отметить, что перспективное планирование говорит о возможностях анализа существующих паттернов поведения.'},
		{title: 'Можно ли есть другие продукты вместе с вашими блюдами?', description:'Кстати, ключевые особенности структуры проекта являются только методом политического участия и разоблачены. Задача организации, в особенности же консультация с широким активом обеспечивает актуальность модели развития.'},
	]
}
