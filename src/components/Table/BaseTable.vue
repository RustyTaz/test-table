<template>
    <div class="table-wrapper">
        <div class="table">
            <div class="table-head" :style="{ 'grid-template-columns': columnTemplates }">
                <div class="table-head__name" v-for="(item, index) of head" :key="index" v-show="head[index].visible">
                    <div v-show="head[index].visible">
                        {{ item.name }}
                    </div>
                </div>
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import MySelect from "@/components/MySelect.vue";
import MyInput from "@/components/MyInput.vue";
const props = defineProps({
    head: {
        type: Object,
        required: true,
    },
    columnTemplates: {
        type: String,
        required: false,
    },
});
</script>

<style lang="scss" scoped>
.table {
    background-color: #fff;
    width: 100%;
    margin-bottom: 40px;
    margin-top: 15px;

    &-wrapper {
        display: flex;
        justify-content: center;
    }

    &-head {
        padding: 5px 16px;
        display: grid;
        column-gap: 10px;
        align-items: center;
        border-bottom: 1px solid black;
        background: #fff;

        &__name {
            font-size: 24px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            color: #000;
            cursor: pointer;
        }

        @media screen and (max-width: 767px) {
            display: none;
        }
    }
}
</style>
