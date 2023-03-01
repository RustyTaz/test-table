import axios from "axios";

export function useRestaurants() {
	return axios
		.get("./mock/mock.json")
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			console.log(error);
		});
}
// const restaurants = ref([]);

// const fetching = async () => {
// 	try {
// 		const response = await axios.get("./mock/mock.json");
// 		console.log(response.data);
// 		restaurants.value = response.data;
// 		console.log(restaurants.value);
// 	} catch (e) {
// 		alert("Ошибка");
// 	} finally {
// 		console.log("Tried to reach data");
// 	}
// };

// onMounted(fetching);

// return restaurants.value;
