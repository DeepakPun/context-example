import { createContext, useState } from 'react'

const CountContext = createContext()

function Provider({ children }) {
	const [count, setCount] = useState(0)
	const increment = () => count < 20 && setCount(count + 1)
	const decrement = () => count > 0 && setCount(count - 1)
	const reset = () => setCount(0)

	const valueToShare = {
		count,
		increment,
		decrement,
		reset
	}

	return (
		<CountContext.Provider value={valueToShare}>
			{children}
		</CountContext.Provider>
	)
}

export { Provider }
export default CountContext
