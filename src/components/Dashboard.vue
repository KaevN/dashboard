<script lang="ts" setup>
import { computed, onMounted, watch, h, ref } from "vue";
import { useStore } from "@/store";
import { SlickList, SlickItem } from "vue-slicksort";
import { DashboardItem } from "@/types/general";

import DashboardCard from "@/components/DashboardCard.vue";

const store = useStore();

const isSortable = ref(false);

const dashboardItems = computed<DashboardItem[]>({
  get() {
    return store.state.dashboardItems;
  },
  set(val) {
    store.commit("setDashboardItems", val);
  }
});

const deleteCard = (id: number | string) => {
  store.commit("setDashboardItems", dashboardItems.value.filter(card => card.id !== id));
};

watch(() => dashboardItems.value, newVal => {
  localStorage.setItem("dashboard", JSON.stringify(newVal));
});

onMounted(() => {
  if (localStorage.getItem("dashboard")) {
    store.commit("setDashboardItems", JSON.parse(localStorage.getItem("dashboard") || "[]"));
  }
});

</script>

<template>
  <section :class="$style.dashboard">
    <div
      :class="$style['dashboard__top']"
    >
      <button @click="$router.push({ name: 'NewCard'})">Добавить</button>
      <label>
        Включить сортировку
        <input
          v-model="isSortable"
          type="checkbox"
        >
      </label>
    </div>
    <SlickList
      v-model:list="dashboardItems"
      :class="$style['dashboard__list']"
      axis="xy"
      :lockToContainerEdges="!isSortable"
    >
      <SlickItem
        v-for="(item, index) in dashboardItems"
        :key="item.id"
        :index="index"
      >
        <DashboardCard
          :card="item"
          @delete="deleteCard"
        />
      </SlickItem>
    </SlickList>
  </section>
</template>

<style module>
.dashboard__top {
  margin: 0 auto 20px 0;
  width: max-content;
}
.dashboard__list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}
</style>