export default class Struct extends Array {
	constructor () {
		super()
	}

	addWay (trainId, wayName) {
		const train = this.find((train) => train.trainId === trainId)

		if (train) {
			const ways = train.ways.split('-')
			ways.push(wayName)
			ways.sort()
			train.ways = ways.join('-')
		} else {
			this.push({
				trainId,
				ways: wayName
			})
		}
	}
}
