<template>
  <div>
    {{ a }}
    <button @click="change1">12</button>
    <button @click="change2">2</button>
    <!-- {{ a }} -->
    <!-- {{ a }}
    {{ b }}
    <button @click="change1">1</button>
    <button @click="change2">2</button> -->
  </div>
</template>

<script setup lang="ts" name="Person223">
let a = 6664
let name = ''
const change1 = () => {
  name = '2'
  console.log(3)
}
const change2 = () => {
  console.log(4)
}
</script>

<style scoped></style>
