<template>
    
    <div class="table-wrapper">
        <div class="table">
            <div class="table-head" :style="{ 'grid-template-columns': columnTemplates }">
                <div class="table-head__name" v-for="(item, index) of head" :key="index">
                    {{ item }}
                </div>
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import MySelect from "@/components/MySelect.vue"
import MyInput from "@/components/MyInput.vue"
const props = defineProps({
    head: {
        type: Array,
        required: false
    },
    columnTemplates: {
        type: String,
        required: false
    }
})
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
        &__header{
            font-size: 24px;
        }
    }

    &-wrapper {
        display: flex;
        justify-content: center;
    }

    &-head {
        padding: 5px 16px;
        display: grid;
        column-gap: 10px;
        align-items: center;
        border-bottom: 2px solid #EEEFF4;
        background: #fff;

        &__name {
            font-size: 24px;
            display: flex;
            justify-content: flex-start;
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