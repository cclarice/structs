export default function createAddWay (struct) {
	return function (trainId, wayName) {
		const train = struct.find((train) => train.trainId === trainId)

		if (train) {
			const ways = train.ways.split('-')
			ways.push(wayName)
			ways.sort()
			train.ways = ways.join('-')
		} else {
			struct.push({
				trainId,
				ways: wayName
			})
		}
	}
}
