import('./structs/ArrayStyleStruct.mjs').then((module) => {
	const struct = []
	const addWay = module.default(struct)

	addWay(123, 'Д7')
	addWay(123, 'А3')
	addWay(720, '1П')
	addWay(108, 'А9')
	addWay(123, 'А1')
	addWay(108, 'А1')
	addWay(720, '3П')

	console.table(struct)
}).catch((error) => {
	console.error('Error when importing Array Style', error)
}).finally(() => {
	import('./structs/ArrayStyleStruct.mjs').then((module) => {
		const struct = []
		const addWay = module.default(struct)

		addWay(123, 'Д7')
		addWay(123, 'А3')
		addWay(720, '1П')
		addWay(108, 'А9')
		addWay(123, 'А1')
		addWay(108, 'А1')
		addWay(720, '3П')

		console.table(struct)
	}).catch((error) => {
		console.error('Error when importing Array Style', error)
	})
})


/**
 * Array Style
 */
// console.info('ArrayStyle:')
// console.table(['string', 'aboba', 'kek'])
//
