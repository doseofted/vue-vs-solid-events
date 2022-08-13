<script setup lang="ts">
import Inner from "./Inner.vue"
const log = (e: string) => console.log("outer", e)
</script>

<template>
  <Inner @mouseenter="log('enter')" @mouseleave="log('leave')" />
</template>
