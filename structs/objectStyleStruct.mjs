export default function createAddWay (struct) {
	return function (trainId, wayName) {
		if (struct[trainId]) {
			const ways = struct[trainId].split('-')
			ways.push(wayName)
			ways.sort()
			struct[trainId] = ways.join('-')
		} else {
			struct[trainId] = wayName
		}
	}
}
