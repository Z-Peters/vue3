<template>
  <div>
    <!-- {{ car.name }} -->
    <input type="text" v-model="x" />
    <input type="text" v-model="y" />
    <span>全名：{{ x }}--{{ y }}--</span>
    <span>{{ obj.name }}</span>-------
    <span>{{ obj2.name }}</span>
    <button @click="change1">修改价格1</button>
    <button @click="change2">修改价格2</button>
  </div>
</template>

<script setup lang="ts" name="Person223">
import { ref, reactive, toRefs, toRef, computed, watch,watchEffect } from 'vue'
// let car = reactive([{ id: 1, name: '1112' }])
let x = ref(10)
let y = ref(1)

// warch 监听ref基本数据类型
let obj = reactive({
  name: 1,
  age: 2,
})
let obj2 = reactive({
  name: 10,
  age: {
    name:100,
    age:1000
  },
})
// const stopwatch=stopwatch()
watch(
  [()=>obj.name,()=>obj2.age],
  ([newX, oldX]) => {
    console.log(`变化了`, newX, oldX)
  },
  // {deep:true}
)
const change1 = () => {
  obj.name+=1
  console.log(obj)
}
const change2 = () => {
    obj2.name+=10
  console.log(obj)
}
</script>

<style scoped></style>
