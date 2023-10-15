/**
 * A helper function to force a delay
 * @param ms Delay in milliseconds
 * @returns Resolves a promise
 */
function delay(ms: number) {
	return new Promise(resolve => setTimeout(resolve, ms))
}

export default delay
