<template>
    <div class="table-column">
      <span class="table-column__title" v-if="columnTitle">{{ columnTitle }}:</span>
        <slot></slot>
    </div>
</template>

<script setup>
const props = defineProps({
  columnTitle:{
    type: String,
    required: false
  }
})
</script>


<style lang="scss" scoped>
.table-column {
  padding: 15px 0;
  position: relative;
  &-image {
    max-width: 100%;
    @media screen and (max-width: 767px) {
      max-width: 200px;
    }
  }
  &__title {
    margin-right: 5px;
    display: none;
    @media screen and (max-width: 767px) {
      display: inline-block;
    }
  }
}
</style>