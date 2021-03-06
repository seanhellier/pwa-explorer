import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";

const API_KEY = "5a06a895e3eaf75b5ab8100f55b8cd46";

export const fetchWeather = async (query) => {
	const { data } = await axios.get(URL, {
		params: {
			q: query,
			units: "metric",
			appid: API_KEY,
		},
	});

	return data;
};
