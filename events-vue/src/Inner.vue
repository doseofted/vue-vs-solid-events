<script setup lang="ts">
import Div from "./Div.vue"
const useDivAsComponent = true
const log = (e: string) => console.log("inner", e)
</script>

<template>
  <Div v-if="useDivAsComponent" class="test" @mouseenter="log('enter')" @mouseleave="log('leave')" />
  <div v-else class="test" @mouseenter="log('enter')" @mouseleave="log('leave')"></div>
</template>

<style>
.test {
  background: lightgray;
  width: 100%;
  height: 100vh;
}
</style>
