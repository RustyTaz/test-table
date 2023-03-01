import { ref, computed } from "vue";

export function useSearchRestaurants(rests) {
	const searchQuery = ref("");

	const searchedRests = computed(() => {
		return rests.value.filter((rest) => {
			return Object.keys(rest).some((key) => {
				return (
					String(rest[key])
						.toLowerCase()
						.indexOf(searchQuery.value.toLowerCase()) > -1
				);
			});
		});
	});

	return {
		searchQuery,
		searchedRests,
	};
}
