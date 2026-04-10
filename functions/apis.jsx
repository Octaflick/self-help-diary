import fallbackQuotes from "./fallbackQuotes.jsx";

export const quotesapi = async (url) => {
	try {
		const response = await fetch(url);
		const data = await response.json();
		if (Array.isArray(data) && data.length > 0) {
			if (
				data[0] &&
				data[0].content &&
				typeof data[0].content.rendered === "string"
			) {
				return data.map((item) => item.content.rendered);
			}
			if (typeof data[0] === "string") {
				return data;
			}
			return data;
		}
		return [];
	} catch (err) {
		return fallbackQuotes;
	}
};

export const time = () => {
	const now = new Date();
	return now.toString();
};
