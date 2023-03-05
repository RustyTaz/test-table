<template>
	<h2>Таблица by Рустам Тазяев</h2>
	<div class="table-options">
		<h2 class="table-options__header">Инспекция по ресторанам</h2>
		<my-select :head-list="tableHeads" @set-column="setColums"></my-select>
		<my-input
			placeholder="Поиск по полям таблицы"
			v-model:value="searchQuery"
		></my-input>
	</div>
	<base-table :head="tableHeads" :columnTemplates="tableSizeColumns">
		<table-row
			:rests="searchedRests"
			v-for="rest in searchedRests"
			:key="rest._id"
			:columnTemplates="tableSizeColumns"
		>
			<table-column
				v-show="tableHeads[0].visible"
				:columnTitle="tableHeads[0].name"
				>{{ rest.business_name }}</table-column
			>
			<table-column
				v-show="tableHeads[1].visible"
				:columnTitle="tableHeads[1].name"
				>{{ rest.business_address }}</table-column
			>
			<table-column
				v-show="tableHeads[2].visible"
				:columnTitle="tableHeads[2].name"
				>{{ rest.business_city }}</table-column
			>
			<table-column
				v-show="tableHeads[3].visible"
				:columnTitle="tableHeads[3].name"
				>{{ rest.business_phone_number }}</table-column
			>
			<table-column
				v-show="tableHeads[4].visible"
				:columnTitle="tableHeads[4].name"
				>{{ rest.inspection_date }}</table-column
			>
			<table-column
				v-show="tableHeads[5].visible"
				:columnTitle="tableHeads[5].name"
				>{{ rest.inspection_description }}</table-column
			>
			<table-column
				v-show="tableHeads[6].visible"
				:columnTitle="tableHeads[6].name"
				>{{ rest.inspection_type }}</table-column
			>
		</table-row>
	</base-table>
</template>

<script setup>
import BaseTable from "@/components/Table/BaseTable.vue";
import TableRow from "@/components/Table/TableRow.vue";
import TableColumn from "@/components/Table/TableColumn.vue";
import { useRestaurants } from "@/hooks/useRestaurants.js";
import { useSearchRestaurants } from "@/hooks/useSearchRestaurants.js";
import MySelect from "@/components/MySelect.vue";
import MyInput from "@/components/MyInput.vue";
import { ref, toRaw, onMounted, reactive, computed } from "vue";

const rests = ref([]);
let tableHeads = ref([
	{ name: "Название ресторана", visible: true },
	{ name: "Адрес ресторана", visible: true },
	{ name: "Город", visible: true },
	{ name: "Номер организации", visible: true },
	{ name: "Дата инспекции", visible: true },
	{ name: "Статус инспекции", visible: true },
	{ name: "Тип проведения инспекции", visible: true },
]);
let tableSizeColumns = ref("1fr 1fr 1fr 1fr 1fr 1fr 1fr");

const getRest = async () => {
	useRestaurants().then((r) => {
		rests.value = r;
		console.log(rests.value);
		console.log(rests.value[0].inspection_description);
	});
};

const { searchQuery, searchedRests } = useSearchRestaurants(rests);

function setColums(column) {
	console.log(column);
	tableHeads.value[column].visible = !tableHeads.value[column].visible;

	let arr = tableSizeColumns.value.split(" ");

	if (tableHeads.value[column].visible === true) {
		arr.push("1fr");
		tableSizeColumns.value = arr.join(" ");
		console.log(tableSizeColumns.value);
	} else {
		arr.pop();
		tableSizeColumns.value = arr.join(" ");
		console.log(tableSizeColumns.value);
	}
}

onMounted(() => {
	getRest();
});

</script>

<style lang="scss" scoped>
.table {
	background-color: #fff;
	width: 100%;
	margin-bottom: 40px;
	margin-top: 15px;

	&-options {
		background-color: #fff;
		position: relative;
		display: flex;
		justify-content: space-around;
		padding: 5px 5px 5px 5px;
		border-top: 1px solid black;
		border-bottom: 1px solid black;

		@media screen and (max-width: 767px) {
			display: flex;
			flex-direction: column;
			justify-content: center;
		}

		&__header {
			font-size: 24px;
		}
	}
}
</style>
