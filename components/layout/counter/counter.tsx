import React, { FC } from 'react'
import CountUp from 'react-countup'

interface CounterTypes {
	end: number
}

const Counter: FC<CounterTypes> = ({end}) => {
	return (
		<CountUp
			separator=" "
			duration={0.5}
			end={end}
		/>
	)
}

export default Counter
