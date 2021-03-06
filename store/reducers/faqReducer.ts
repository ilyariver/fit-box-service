import { FaqAction, FaqActionTypes, FaqState } from '../../types/faqTypes'

const initialState: FaqState[] = [
	{
		id: 1,
		type: 'Рационы',
		active: true,
		questions: [
			{title: '1Можно ли есть блюда в том порядке, в котором я хочу?', description:'Мы любим животных и стараемся поддерживать тех из них.'},
			{title: '1Как часто меняются блюда?', description:'Учитывая ключевые сценарии поведения, постоянный количественный рост и сфера нашей активности говорит о возможностях экспериментов, поражающих по своей масштабности и грандиозности. Кстати, активно развивающиеся страны третьего мира объективно рассмотрены соответствующими инстанциями.'},
			{title: '1Можно ли есть блюда в том порядке, в котором я хочу?', description:'Однозначно, тщательные исследования конкурентов набирают популярность среди определенных слоев населения, а значит, должны быть подвергнуты целой серии независимых исследований. Следует отметить, что перспективное планирование говорит о возможностях анализа существующих паттернов поведения.'},
			{title: '1Можно ли есть другие продукты вместе с вашими блюдами?', description:'Кстати, ключевые особенности структуры проекта являются только методом политического участия и разоблачены. Задача организации, в особенности же консультация с широким активом обеспечивает актуальность модели развития.'},
		]
	},
	{
		id: 2,
		type: 'Похудение',
		active: false,
		questions: [
			{title: '234Можно ли есть блюда в том порядке, в котором я хочу?', description:'Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров. Один из проверенных способов это сделать — помочь приюту для животных Домашний. У этих ребят живёт более 1500 четвероногих, и благодаря их труду ежегодно сотни питомцев находят свой новый дом.'},
			{title: '234Как часто меняются блюда?', description:'Учитывая ключевые сценарии поведения, постоянный количественный рост и сфера нашей активности говорит о возможностях экспериментов, поражающих по своей масштабности и грандиозности. Кстати, активно развивающиеся страны третьего мира объективно рассмотрены соответствующими инстанциями.'},
			{title: '234Можно ли есть блюда в том порядке, в котором я хочу?', description:'Однозначно, тщательные исследования конкурентов набирают популярность среди определенных слоев населения, а значит, должны быть подвергнуты целой серии независимых исследований. Следует отметить, что перспективное планирование говорит о возможностях анализа существующих паттернов поведения.'},
		]
	},
	{
		id: 3,
		type: 'Доставка и оплата',
		active: false,
		questions: [
			{title: '34Можно ли есть блюда в том порядке, в котором я хочу?', description:'Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров. Один из проверенных способов это сделать — помочь приюту для животных Домашний. У этих ребят живёт более 1500 четвероногих, и благодаря их труду ежегодно сотни питомцев находят свой новый дом.'},
			{title: '34Как часто меняются блюда?', description:'Учитывая ключевые сценарии поведения, постоянный количественный рост и сфера нашей активности говорит о возможностях экспериментов, поражающих по своей масштабности и грандиозности. Кстати, активно развивающиеся страны третьего мира объективно рассмотрены соответствующими инстанциями.'},
			{title: '34Как часто меняются блюда?', description:'Учитывая ключевые сценарии поведения, постоянный количественный рост и сфера нашей активности говорит о возможностях экспериментов, поражающих по своей масштабности и грандиозности. Кстати, активно развивающиеся страны третьего мира объективно рассмотрены соответствующими инстанциями.'},
			{title: '34Можно ли есть блюда в том порядке, в котором я хочу?', description:'Однозначно, тщательные исследования конкурентов набирают популярность среди определенных слоев населения, а значит, должны быть подвергнуты целой серии независимых исследований. Следует отметить, что перспективное планирование говорит о возможностях анализа существующих паттернов поведения.'},
			{title: '34Можно ли есть другие продукты вместе с вашими блюдами?', description:'Кстати, ключевые особенности структуры проекта являются только методом политического участия и разоблачены. Задача организации, в особенности же консультация с широким активом обеспечивает актуальность модели развития.'},
		]
	},
	{
		id: 4,
		type: 'Хранение',
		active: false,
		questions: [
			{title: '4Можно ли есть блюда в том порядке, в котором я хочу?', description:'Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров. Один из проверенных способов это сделать — помочь приюту для животных Домашний. У этих ребят живёт более 1500 четвероногих, и благодаря их труду ежегодно сотни питомцев находят свой новый дом.'},
			{title: '4Как часто меняются блюда?', description:'Учитывая ключевые сценарии поведения, постоянный количественный рост и сфера нашей активности говорит о возможностях экспериментов, поражающих по своей масштабности и грандиозности. Кстати, активно развивающиеся страны третьего мира объективно рассмотрены соответствующими инстанциями.'},
		]
	}
]

export const faqReducer = (state = initialState, action: FaqAction): FaqState[] => {

	switch (action.type) {
		case FaqActionTypes.SET_ACTIVE_QUESTIONS_TYPE:
			return state.map(item => {
				if (item.id === action.payload) {
					return {
						...item,
						active: true
					}
				}
				return {
					...item,
					active: false
				}
			})
		default:
			return state
	}
}
