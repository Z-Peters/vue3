<template>
  <div>
    <div>当前水温：{{ x }}</div>
    <div>当前水位：{{ y }}</div>
    <button @click="change1">修改水温</button>
    <button @click="change2">修改水位</button>
  </div>
</template>

<script setup lang="ts" name="Person223">
import { ref, reactive, toRefs, toRef, computed, watch, watchEffect } from 'vue'
// let car = reactive([{ id: 1, name: '1112' }])
let x = ref(10)
let y = ref(0)
const change1 = () => {
  x.value += 10
}
const change2 = () => {
  y.value += 10
}
// watch(
//   [x, y],
//   ([newX, oldX]) => {
//     console.log(newX, oldX);
//     if (newX > 30 || oldX > 50) {
//       console.log(`变化了`, newX, oldX)
//     }
//   },
// )
watchEffect(()=>{
  console.log(12);
  if(x.value>30||y.value>50){
     console.log(`变化了`,x.value,y.value)
  }
})
</script>

<style scoped></style>
