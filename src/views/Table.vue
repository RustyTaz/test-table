<template>
	<h1 class="heading-1" @click="addColumn()">Таблица</h1>
	<div class="table-options">
		<h2 class="table-options__header">Инспекция по ресторанам</h2>
		<my-select></my-select>
		<my-input placeholder="Поиск" v-model:value="searchQuery"></my-input>
	</div>
	<base-table :head="tableHeads" :columnTemplates="tableSizeColumns">
		<table-row
			v-for="rest in searchedRests"
			:key="rest._id"
			:columnTemplates="tableSizeColumns"
		>
			<table-column :columnTitle="tableHeads[0]">{{
				rest.business_name
			}}</table-column>
			<table-column :columnTitle="tableHeads[1]">{{ rest.business_location }}</table-column>
			<table-column :columnTitle="tableHeads[2]">{{ rest.business_city }}</table-column>
			<table-column :columnTitle="tableHeads[3]">{{ rest.inspection_date }}</table-column>
			<table-column :columnTitle="tableHeads[4]">{{ rest.inspection_description }}</table-column>
		</table-row>
	</base-table>
</template>

<script setup>
//business_name название ресторана
//business_location адрес ресторана
//business_city город
//inspection_date дата инспекции
//inspection_description статус
//business_phone_number номер
//inspection_type тип инспекции
import BaseTable from "@/components/Table/BaseTable.vue";
import TableRow from "@/components/Table/TableRow.vue";
import TableColumn from "@/components/Table/TableColumn.vue";
import { useRestaurants } from "@/hooks/useRestaurants.js";
import {  useSearchRestaurants } from "@/hooks/useSearchRestaurants.js";
import MySelect from "@/components/MySelect.vue";
import MyInput from "@/components/MyInput.vue";
import { ref, toRaw, onMounted, reactive } from "vue";
import axios from "axios";

const tableHeads = [
	"Название ресторана",
	"Адрес ресторана",
	"Город",
	"Дата инспекции",
	"Статус инспекции",
];
const tableSizeColumns = "2fr 300px 1fr 1fr 1fr ";
const rests = ref([]);
//const searchQuery = ref('');

//const tableHeads = ['Id', 'Author', 'Title', 'Cover', '']
//const tableSizeColumns = '50px 1fr 2fr 150px 140px'

const addColumn = () => {
	rests.value.shift();
	//console.log(tableHeads);
};

const getRest = async () => {
	useRestaurants().then((r) => {
		rests.value = r;
		console.log(rests.value);
	});
};

onMounted(() => {
	getRest();
});
const{searchQuery, searchedRests}= useSearchRestaurants(rests);
</script>

<style lang="scss" scoped>
.table {
	background-color: #fff;
	width: 100%;
	margin-bottom: 40px;
	margin-top: 15px;

	&-options {
		display: flex;
		justify-content: space-around;
		padding: 5px 5px 5px 5px;

		@media screen and (max-width: 767px) {
			display: inline-block;
		}

		&__header {
			font-size: 24px;
		}
	}
}
</style>
