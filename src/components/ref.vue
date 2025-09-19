<template>
  <div>
    <div ref="titles">北京</div>
    <div ref="titless">上海</div>
    <button @click="change1">修改水温</button>
  </div>
</template>

<script setup lang="ts" name="Person223">
import { ref, defineExpose, reactive, toRefs, toRef, computed, watch, watchEffect } from 'vue'
// let car = reactive([{ id: 1, name: '1112' }])
let titles = ref()
let titless = ref()
console.log('1', titles.value)
console.log('2', titless.value)
// let x = ref(10)
// let y = ref(0)
const change1 = () => {
  console.log(titles.value)
  console.log(titless.value)
}
// const change2 = () => {
//   y.value += 10
// }
defineExpose({ titles,titless })
</script>

<style scoped></style>
