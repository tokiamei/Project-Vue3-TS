<template>
  <h1>{{ obj }}</h1>
  <button @click="changeName">修改名字</button>

  <!-- <h1>{{msgReactive}}</h1>
  <input type="text" v-model="msgReactive">
  <button @click="changeMsg">修改信息</button> -->
</template>

<script setup lang="ts">
import { isRef, ref, Ref, shallowRef, ShallowRef, reactive, triggerRef } from 'vue'

// 测试 shallowRef 用于基本数据类型的情况【ok】
/* let msg:string = '花花的世界'
// console.log(msg);
let msgReactive:ShallowRef<string> = shallowRef(msg)
function changeMsg() {
  msgReactive.value += '🤡'
  console.log(msg, msgReactive);
  
} */



// 测试 shallowRef 用于对象的情况【响应式失效】
/* const obj:ShallowRef<object> = shallowRef({ name: '哪吒' })
console.log('++++', obj);
function changeName() {
  obj.value.name = '浑元天尊'
  // console.log('aa');
  triggerRef(obj) // 强制触发更新视图
} */

// 如果是普通 ref|reactive
const obj = reactive({ name: '哪吒' })
// const obj:Ref<string> = ref('红色警戒')
console.log('++++', obj, 'name' in obj);
function changeName() {
  obj.name = '哈哈哈'
  // console.log('aa');
}

</script>

<style>

</style>