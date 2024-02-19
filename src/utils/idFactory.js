export function idFactory() {
	let id = 0;

	return {
		generate: () => id++,
	};
}
