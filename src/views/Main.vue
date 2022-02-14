<script lang="ts" setup>
import Dashboard from '@/components/Dashboard.vue'
</script>

<template>
  <div :class="$style.container">
    <Dashboard />
  </div>
</template>


<style module>
.container {
  margin: 0 auto;
  max-width: 1200px;
}
</style>