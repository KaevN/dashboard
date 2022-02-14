<script lang="ts" setup>
import { useStore } from "@/store";
import { ref } from "vue";
import router from "@/router";

const store = useStore();

const title = ref("");
const description = ref("");

const getRandomId = () => `f${(~~(Math.random() * 1e8)).toString(16)}`;

const addNewCard = () => {
  if (!title.value.trim() || !description.value.trim()) return alert("Нужно заполнить заголовок и описание!");

  const card = {
    id: getRandomId(),
    title: title.value,
    description: description.value
  };

  store.commit("pushToDashboardItems", card);

  localStorage.setItem("dashboard", JSON.stringify(store.state.dashboardItems));

  router.push({ name: "Main" });
};

</script>

<template>
  <div :class="$style.container">
    <div :class="$style.buttons">
      <button
        @click="addNewCard"
      >
        Добавить
      </button>
      <button @click="router.push({name: 'Main'})">
        Отменить
      </button>
    </div>
    <div :class="$style.inputs">
      <input
        v-model="title"
        :class="$style.title"
        type="text"
        placeholder="Введите заголовок"
      />
      <textarea
        v-model="description"
        :class="$style.description"
        placeholder="Введите описание"
      />
    </div>
  </div>

</template>

<style module>
.container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 20px;
  max-width: 200px;
}

.buttons {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.inputs {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  max-width: 200px;
}

.title {
  padding: 10px;
}

.description {
  padding: 10px;
  min-height: 100px;
  resize: none;
}
</style>