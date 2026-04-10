export function getTwoRandomQuotes(arr) {
	if (!Array.isArray(arr) || arr.length === 0) return ["", ""];
	if (arr.length === 1) return [arr[0], ""];
	const n = arr.length;
	const i1 = Math.floor(Math.random() * n);
	let i2 = Math.floor(Math.random() * (n - 1));
	if (i2 >= i1) i2 += 1;
	return [arr[i1], arr[i2]];
}
