<template>
  <refs ref="people" />
  <button @click="handlepur">输出</button>
</template>

<script lang="ts" setup name="App">
import refs from './components/ref.vue'
import { ref, reactive, toRefs, toRef, computed, watch, watchEffect } from 'vue'
let people = ref()

function handlepur() {
  const { titles, titless } = people.value
  console.log('people', titles)
  console.log('people', titless)
}
</script>
<style scoped>
.app {
  color: red;
}
</style>
