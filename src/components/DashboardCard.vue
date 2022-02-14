<script lang="ts" setup>
import { defineProps } from "vue";
import { DashboardItem } from "@/types/general";

interface Props {
  card: { type: DashboardItem, required: true };
}

const props = defineProps<Props>();

</script>

<template>
  <div :class="$style.card">
    <div :class="$style['card__title']">
      {{ card.title }}
    </div>

    <div :class="$style['card__description']">
      {{ card.description }}
    </div>

    <button
      :class="$style.delete"
      @click="$emit('delete', card.id)"
    >
      x
    </button>
  </div>
</template>

<style module>
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  height: 200px;
  max-height: 200px;
  font-size: 20px;
  font-family: Arial;
  text-align: left;
  border-radius: 10px;
  border: 1px solid grey;
}

.card__title {
  font-weight: 900;
}

.card__description {
  padding: 10px 0;
  overflow-y: auto;
}

.delete {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
}
</style>