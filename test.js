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

	console.log('\nArray Style: ')
	console.table(struct)
}).catch((error) => {
	console.error('Error when importing Array Style', error)
}).finally(() => {
	import('./structs/ObjectStyleStruct.mjs').then((module) => {
		const struct = {}
		const addWay = module.default(struct)

		addWay(123, 'Д7')
		addWay(123, 'А3')
		addWay(720, '1П')
		addWay(108, 'А9')
		addWay(123, 'А1')
		addWay(108, 'А1')
		addWay(720, '3П')
g
		console.log('\nObject Style:      Скорее всего не подходит т.к не сохраняется порядок')
		console.table(struct)
	}).catch((error) => {
		console.error('Error when importing Object Style', error)
	}).finally(() => {
		import('./structs/ClassStyleStruct.mjs').then((module) => {
			const Struct = module.default
			const struct = new Struct()

			struct.addWay(123, 'Д7')
			struct.addWay(123, 'А3')
			struct.addWay(720, '1П')
			struct.addWay(108, 'А9')
			struct.addWay(123, 'А1')
			struct.addWay(108, 'А1')
			struct.addWay(720, '3П')

			console.log('\nClass Style: ')
			console.table(struct)
		}).catch((error) => {
			console.error('Error when importing Class Style', error)
		}).finally(() => {

		})
	})
})


/**
 * Array Style
 */
// console.info('ArrayStyle:')
// console.table(['string', 'aboba', 'kek'])
//
