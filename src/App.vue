<template>
  <router-link to="/">
    <el-button>主页</el-button>
  </router-link>
  <router-link to="/login">
    <el-button>登陆</el-button>
  </router-link>
  <hr>
  <router-view ></router-view>
</template>

<script setup lang="ts">
  
</script>

<script>
import { ElButton } from 'element-plus'
  export default {
    components: { ElButton },
  }
</script>

<style lang="less">
  * {
    margin: 0;
    padding: 0;
  }
  body,
  html,
  #app {
    width: 100%;
    height: 100%;
  }
</style>