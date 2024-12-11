import { useContext } from 'react'
import CountContext from '../contexts/numContext'

const Number = () => {
	const { count, increment, decrement, reset } = useContext(CountContext)

	return (
		<div>
			<p>Number is {count}</p>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
			<br />
			<button onClick={reset}>Reset</button>
		</div>
	)
}

export default Number
