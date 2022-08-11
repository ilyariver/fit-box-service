import dish from '../../public/images/dish.png'
import dishMin from '../../public/images/dish-min2.png'
import { ProgramAction, ProgramActionTypes, ProgramState } from '../../types/programTypes'

const weekdays = [
	{
		lookupId: 1,
		days: [
			{
				title: { min: 'ПН', full: 'понедельник' },
				active: true,
				menu: [
					{id:1,title:'Булгур с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:2,title:'Макароны с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:3,title:'Гречка с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:4,title:'Тестовый тест с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:5,title:'Омлет с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
				]
			},
			{
				title: { min: 'ВТ', full: 'вторник' },
				active: false,
				menu: [
					{id:1,title:'Вермишель с говяжим филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:2,title:'Трава с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:3,title:'Рожки с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:4,title:'Вермишель с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
				]
			},
			{
				title: { min: 'СР', full: 'среду' },
				active: false,
				menu: [
					{id:1,title:'Бургер с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:2,title:'Чизбургер с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:3,title:'Длинный текст с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
				]
			},
			{
				title: { min: 'ЧТ', full: 'четверг' },
				active: false,
				menu: [
					{id:1,title:'ЧТо-то с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:2,title:'Геркулес с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:3,title:'ОВСянка с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:4,title:'Еда с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:5,title:'Винигрет с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
				]
			},
			{
				title: { min: 'ПТ', full: 'пятницу' },
				active: false,
				menu: [
					{id:1,title:'Бигус с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:2,title:'Йогурт с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:3,title:'Вишневок пюре с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:4,title:'Омлет с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:5,title:'Омлет с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
				]
			},
			{
				title: { min: 'СБ', full: 'субботу' },
				active: false,
				menu: [
					{id:1,title:'Курица с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:2,title:'Петух с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:3,title:'Утка с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:4,title:'Пицца с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:5,title:'Чиабатта с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
				]
			},
			{
				title: { min: 'ВС', full: 'воскресенье' },
				active: false,
				menu: [
					{id:1,title:'Свекла с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:2,title:'Яблоко с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:3,title:'Творог с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:4,title:'Мюсли с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:5,title:'Сельдь с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
				]
			},
		]
	},
	{
		lookupId: 2,
		days: [
			{
				title: { min: 'ПН', full: 'понедельник' }, active: true, menu: [
					{id:1,title:'2Омлет с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:2,title:'Пельмени с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:3,title:'Гречка с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:4,title:'Перлова с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:5,title:'Геркулес с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
				]
			},
			{
				title: { min: 'ВТ', full: 'вторник' }, active: false, menu: [
					{id:1,title:'Булгур с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:2,title:'Трава с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:3,title:'Рожки с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:4,title:'Вермишель с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:5,title:'Воппер с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
				]
			},
			{
				title: { min: 'СР', full: 'среду' }, active: false, menu: [
					{id:1,title:'Бургер с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:2,title:'Чизбургер с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:3,title:'Длинный текст с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:4,title:'Тестовый тест с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:5,title:'Омлет с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
				]
			},
			{
				title: { min: 'ЧТ', full: 'четверг' }, active: false, menu: [
					{id:1,title:'ЧТо-то с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:2,title:'Геркулес с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:3,title:'ОВСянка с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:4,title:'Еда с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:5,title:'Винигрет с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
				]
			},
			{
				title: { min: 'ПТ', full: 'пятницу' }, active: false, menu: [
					{id:1,title:'Бигус с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:2,title:'Йогурт с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:3,title:'Вишневок пюре с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:4,title:'Омлет с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:5,title:'Омлет с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
				]
			},
			{
				title: { min: 'СБ', full: 'субботу' }, active: false, menu: [
					{id:1,title:'Курица с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:2,title:'Петух с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:3,title:'Утка с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:4,title:'Пицца с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:5,title:'Чиабатта с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
				]
			},
			{
				title: { min: 'ВС', full: 'воскресенье' }, active: false, menu: [
					{id:1,title:'Свекла с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:2,title:'Яблоко с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:3,title:'Творог с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:4,title:'Мюсли с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:5,title:'Сельдь с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
				]
			},
		]
	},
	{
		lookupId: 3,
		days: [
			{
				title: { min: 'ПН', full: 'понедельник' },
				active: true,
				menu: [
					{id:1,title:'3Омлет с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:2,title:'Яблоки с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:3,title:'Груши с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
				]
			},
			{
				title: { min: 'ВТ', full: 'вторник' },
				active: false,
				menu: [
					{id:1,title:'Булгур с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:2,title:'Трава с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:3,title:'Гранат с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
				]
			},
			{
				title: { min: 'СР', full: 'среду' },
				active: false,
				menu: [
					{id:1,title:'Бургер с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:2,title:'Чизбургер с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:3,title:'Семена тыквы с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
				]
			},
			{
				title: { min: 'ЧТ', full: 'четверг' },
				active: false,
				menu: [
					{id:1,title:'ЧТо-то с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:2,title:'Геркулес с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:3,title:'Дыня с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
				]
			},
			{
				title: { min: 'ПТ', full: 'пятницу' },
				active: false,
				menu: [
					{id:1,title:'Бигус с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:2,title:'Йогурт с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:3,title:'Творожная масса с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
				]
			},
			{
				title: { min: 'СБ', full: 'субботу' },
				active: false,
				menu: [
					{id:1,title:'Курица с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:2,title:'Петух с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:3,title:'Бычок с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
				]
			},
			{
				title: { min: 'ВС', full: 'воскресенье' },
				active: false,
				menu: [
					{id:1,title:'Свекла с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:2,title:'Яблоко с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:3,title:'Карамель с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
				]
			},
		]
	},
	{
		lookupId: 4,
		days: [
			{
				title: { min: 'ПН', full: 'понедельник' },
				active: true,
				menu: [
					{id:1,title:'4Омлет с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:2,title:'Гренки с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:3,title:'Гречка с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:4,title:'Перлова с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:5,title:'ПТитими с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
				]
			},
			{
				title: { min: 'ВТ', full: 'вторник' },
				active: false,
				menu: [
					{id:1,title:'Булгур с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:2,title:'Трава с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:3,title:'Рожки с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:4,title:'Вермишель с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:5,title:'Воппер с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
				]
			},
			{
				title: { min: 'СР', full: 'среду' },
				active: false,
				menu: [
					{id:1,title:'Бургер с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:2,title:'Чизбургер с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:3,title:'Длинный текст с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:4,title:'Тестовый тест с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:5,title:'Омлет с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
				]
			},
			{
				title: { min: 'ЧТ', full: 'четверг' },
				active: false,
				menu: [
					{id:1,title:'ЧТо-то с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:2,title:'Геркулес с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:3,title:'ОВСянка с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:4,title:'Еда с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:5,title:'Винигрет с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
				]
			},
			{
				title: { min: 'ПТ', full: 'пятницу' },
				active: false,
				menu: [
					{id:1,title:'Бигус с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:2,title:'Йогурт с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:3,title:'Вишневок пюре с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:4,title:'Омлет с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:5,title:'Омлет с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
				]
			},
			{
				title: { min: 'СБ', full: 'субботу' },
				active: false,
				menu: [
					{id:1,title:'Курица с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:2,title:'Петух с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:3,title:'Утка с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:4,title:'Пицца с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:5,title:'Чиабатта с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
				]
			},
			{
				title: { min: 'ВС', full: 'воскресенье' },
				active: false,
				menu: [
					{id:1,title:'Свекла с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:2,title:'Яблоко с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:3,title:'Творог с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:4,title:'Мюсли с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:5,title:'Сельдь с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
				]
			},
		]
	},
	{
		lookupId: 5,
		days: [
			{
				title: { min: 'ПН', full: 'понедельник' },
				active: true,
				menu: [
					{id:1,title:'5Омлет с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:2,title:'Супы с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:3,title:'Гречка с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:4,title:'Перлова с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:5,title:'ПТитими с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
				]
			},
			{
				title: { min: 'ВТ', full: 'вторник' },
				active: false,
				menu: [
					{id:1,title:'Булгур с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:2,title:'Трава с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:3,title:'Рожки с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:4,title:'Вермишель с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:5,title:'Воппер с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
				]
			},
			{
				title: { min: 'СР', full: 'среду' },
				active: false,
				menu: [
					{id:1,title:'Бургер с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:2,title:'Чизбургер с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:3,title:'Длинный текст с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:4,title:'Тестовый тест с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:5,title:'Омлет с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
				]
			},
			{
				title: { min: 'ЧТ', full: 'четверг' },
				active: false,
				menu: [
					{id:1,title:'ЧТо-то с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:2,title:'Геркулес с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:3,title:'ОВСянка с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:4,title:'Еда с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:5,title:'Винигрет с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
				]
			},
			{
				title: { min: 'ПТ', full: 'пятницу' },
				active: false,
				menu: [
					{id:1,title:'Бигус с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:2,title:'Йогурт с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:3,title:'Вишневок пюре с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:4,title:'Омлет с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:5,title:'Омлет с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
				]
			},
			{
				title: { min: 'СБ', full: 'субботу' },
				active: false,
				menu: [
					{id:1,title:'Курица с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:2,title:'Петух с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:3,title:'Утка с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:4,title:'Пицца с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:5,title:'Чиабатта с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
				]
			},
			{
				title: { min: 'ВС', full: 'воскресенье' },
				active: false,
				menu: [
					{id:1,title:'Свекла с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:2,title:'Яблоко с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:3,title:'Творог с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:4,title:'Мюсли с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:5,title:'Сельдь с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
				]
			},
		]
	},
	{
		lookupId: 6,
		days: [
			{
				title: { min: 'ПН', full: 'понедельник' },
				active: true,
				menu: [
					{id:1,title:'6Омлет с куриным филе', productComposition:'Макароны филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:2,title:'Макароны с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:3,title:'Гречка с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:4,title:'Перлова с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:5,title:'ПТитими с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
				]
			},
			{
				title: { min: 'ВТ', full: 'вторник' },
				active: false,
				menu: [
					{id:1,title:'Азу с куриным филе', productComposition:'Азу филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:2,title:'Картофель с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:3,title:'Гречка с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:4,title:'Перлова с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:5,title:'ПТитими с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
				]
			},
			{
				title: { min: 'СР', full: 'среду' },
				active: false,
				menu: [
					{id:1,title:'Курица с куриным филе', productComposition:'Макароны филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:2,title:'Макароны с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:3,title:'Гречка с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:4,title:'Перлова с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:5,title:'ПТитими с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
				]
			},
			{
				title: { min: 'ЧТ', full: 'четверг' },
				active: false,
				menu: [
					{id:1,title:'Гратен дофинуа', productComposition:'Гратен филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:2,title:'Уха с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:3,title:'Гречка с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:4,title:'Перлова с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:5,title:'ПТитими с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
				]
			},
			{
				title: { min: 'ПТ', full: 'пятницу' },
				active: false,
				menu: [
					{id:1,title:'Треска с куриным филе', productComposition:'Треска филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:2,title:'Макароны с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:3,title:'Гречка с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:4,title:'Перлова с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:5,title:'ПТитими с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
				]
			},
			{
				title: { min: 'СБ', full: 'субботу' },
				active: false,
				menu: [
					{id:1,title:'Капуста с куриным филе', productComposition:'Капуста филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:2,title:'Хек с куриным филе', productComposition:'Хек филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:3,title:'Гречка с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:4,title:'Перлова с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:5,title:'ПТитими с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
				]
			},
			{
				title: { min: 'ВС', full: 'воскресенье' },
				active: false,
				menu: [
					{id:1,title:'Тушеная свинина с куриным филе и в молочной пене', productComposition:'Тушеная свинина филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:2,title:'Говядина с куриным филе', productComposition:'Говядина филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:3,title:'Гречка с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:4,title:'Перлова с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
					{id:5,title:'ПТитими с куриным филе', productComposition:'Куриное филе, молоко, яйца, помидоры, соль, микрозелень', img: dish, minImg: dishMin},
				]
			}
		]
	},
]
const programs = [
	{
		id: 1,
		active: true,
		type: {
			title: 'Офис',
			link: 'office',
			cCal: 250
		},
		offer: {
			description: {
				text: 'Трёxразовое питание на 2000 ккал/день для поддержания оПТимальной формы при тренировках и просто активном образе жизни',
				cost: 2350,
				deliverDescription: 'Доставка ежедневно с 12:00 до 20:00'
			},
		}
	},
	{
		id: 2,
		active: false,
		type: {
			title: 'Офис\u00A0+',
			link: 'office+',
			cCal: 350
		},
		offer: {
			description: {
				text: 'Десятиразвовое питание на 10000 ккал/день для поддержания оПТимальной формы при тренировках и просто активном образе жизни',
				cost: 2150,
				deliverDescription: 'Доставка ежедневно с 12:00 до 20:00'
			},
		}
	},
	{
		id: 3,
		active: false,
		type: {
			title: 'Фитнес',
			link: 'fitness',
			cCal: 150
		},
		offer: {
			description: {
				text: 'Двухразовое питание на 2000 ккал/день для поддержания оПТимальной формы при тренировках и просто активном образе жизни',
				cost: 1050,
				deliverDescription: 'Доставка ежедневно с 12:00 до 20:00'
			},
		}
	},
	{
		id: 4,
		active: false,
		type: {
			title: 'Классик мини',
			link: 'classicMini',
			cCal: 280
		},
		offer: {
			description: {
				text: 'Пятиразовое питание на 2000 ккал/день для поддержания оПТимальной формы при тренировках и просто активном образе жизни',
				cost: 1350,
				deliverDescription: 'Доставка ежедневно с 12:00 до 20:00'
			},
		}
	},
	{
		id: 5,
		active: false,
		type: {
			title: 'Классик',
			link: 'classic',
			cCal: 250
		},
		offer: {
			description: {
				text: 'Пятиразовое питание на 2000 ккал/день для поддержания оПТимальной формы при тренировках и просто активном образе жизни',
				cost: 1500,
				deliverDescription: 'Доставка ежедневно с 12:00 до 20:00'
			},
		}
	},
	{
		id: 6,
		active: false,
		type: {
			title: 'Классик\u00A0+',
			link: 'classic+',
			cCal: 250
		},
		offer: {
			description: {
				text: 'Пятиразовое питание на 2000 ккал/день для поддержания оПТимальной формы при тренировках и просто активном образе жизни',
				cost: 1250,
				deliverDescription: 'Доставка ежедневно с 12:00 до 20:00'
			},
		}
	},
]

const initialState: ProgramState = {
	programs,
	weekdays,
	choiceWeek: [weekdays[0]],
	optionsBtns: [
		{number: 1, active: false},
		{number: 5, active: false},
		{number: 6, active: false},
		{number: 7, active: false},
		{number: 14, active: false},
		{number: 28, active: false},
	],
	order: {
		id: 1,
		active: true,
		numberOfDays: 1,
		number: 1,
		cost: programs
			.filter(cost => cost.active)
			.reduce((num, sum) => {
				return num = sum.offer.description.cost
			},0),
		menu: programs.find(program => program.active) ?? null
	},
	cart: []
}

export const programReducer = (state = initialState, action: ProgramAction): ProgramState => {
	switch (action.type) {
		case ProgramActionTypes.SET_ACTIVE_SET:
			const setActiveCurrentMenu = state.programs.map(program => {
				return (
					{
						...program,
						active: program.id === action.payload
					}
				)
			})

			return {
				...state,
				programs: setActiveCurrentMenu,
				choiceWeek: state.weekdays.filter(week => {
					if (week.lookupId === action.payload) return ({ ...week })
				}),
				order: {
					...state.order,
					id: state.cart.length + 1,
					active: state.cart.length + 1 === 1,
					numberOfDays: 1,
					cost: setActiveCurrentMenu
						.filter(cost => cost.active)
						.reduce((num, sum) => {
							return num = sum.offer.description.cost
						},0),
					menu: setActiveCurrentMenu.find(program => program.active) ?? null
				},
				optionsBtns: state.optionsBtns.map(btn => ({ ...btn, active: false }))
			}
		case ProgramActionTypes.CHOICE_WEEK_DAY:
			return {
				...state,
				choiceWeek: state.choiceWeek.map(week => {
					return {
						...week,
						days: week.days.map(day => {
							if (day.title.min === action.payload) {
								return {
									...day,
									active: day.title.min === action.payload
								}
							}
							return {
								...day,
								active: day.title.min === action.payload
							}
						})
					}
				})
			}
		case ProgramActionTypes.SET_NUMBER_OF_DAYS:
			return {
				...state,
				optionsBtns: state.optionsBtns.map(btn => {
					if (btn.number === action.payload) {
						return {
							...btn,
							active: btn.active = true
						}
					}
					return {
						...btn,
						active: btn.active = false
					}
				}),
				order: {
					...state.order,
					id: state.cart.length + 1,
					active: state.cart.length + 1 === 1,
					numberOfDays: action.payload,
					cost: state.programs
						.filter(cost => cost.active)
						.reduce((num, sum) => {
							return num = sum.offer.description.cost * action.payload
						},0),
					menu: state.programs.find(program => program.active) ?? null
				},

			}
		case ProgramActionTypes.ADD_TO_CART:
			const item: any = {}
			state.cart.push(state.order)

			return {
				...state,
				cart: state.cart.filter(({id}) => (!item[id] && (item[id] = 1)))
			}
		case ProgramActionTypes.NEXT_CARDS:
			return {
				...state,
				cart: state.cart.map(itemCart => {
					if (itemCart.id === action.payload) {
						return {
							...itemCart,
							active: itemCart.active = true
						}
					}
					return {
						...itemCart,
						active: itemCart.active = false
					}
				})
			}
		case ProgramActionTypes.CART_DAYS_DURATION:
			console.log('1', state.optionsBtns.map(btn => {
				if (btn.number === action.payload) {
					return {
						...btn,
						active: btn.active = true
					}
				}
				return {
					...btn,
					active: btn.active = false
				}
			}))
			return {
				...state,
				optionsBtns: state.optionsBtns.map(btn => {
					if (btn.number === action.payload) {
						return {
							...btn,
							active: btn.active = true
						}
					}
					return {
						...btn,
						active: btn.active = false
					}
				})
			}
		case ProgramActionTypes.REMOVE_PROGRAM_FROM_CART:
			const newState = {
				...state,
				cart: state.cart.filter(itemCart => itemCart.id !== action.payload)
			}

			return {
				...newState,
				cart: newState.cart.map((cartItem, idx) => {
					const firstItem = idx + 1

					return {
						...cartItem,
						id: firstItem,
						active: firstItem === 1
					}
				})
			}
		default:
			return state
	}
}
