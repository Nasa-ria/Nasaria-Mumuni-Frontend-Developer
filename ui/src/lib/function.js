var Url = "http://localhost:3000/rocket";

export let abortController;


export const connectApi = async (endpoint, method = "GET", data = null) => {
	abortController = new AbortController();
    
	let options = {
		mode: "cors",
		method: method,
		headers: { "content-Type": "application/json" },
		signal: abortController.signal,
	};
	let optionsData;
	if (data) {
		optionsData = { ...options, body: JSON.stringify(data) };
		options = optionsData;
	}
	const response = await fetch(Url + endpoint, options);
	return response.json();
};