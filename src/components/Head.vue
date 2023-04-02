<script setup>
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()

  /**
   * 页头
   */
   const nickName = window.localStorage.getItem("nickName")
</script>

<template>
  <div id="titleFont">
    <div>系统时间: 2022/10/30 21:35</div>
    <h1>霜落熊升树，林空鹿饮溪</h1>
    <div class="info-box">
      <div v-if="!nickName">
        <router-link :to="{path:'/login'}">登录</router-link>
        <b>|</b>
        <router-link :to="{path:'/register'}">注册</router-link>
      </div>
      <div v-else>
        <p>{{ nickName }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>

#titleFont {
  /* position: fixed;
  top: 0px;
  width: 100%;
  height: 44px;
  z-index: 9999; */
  font-family: 'CloudDengXianGB';
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: var(--preset-sika-whitegray);
  color: var(--preset-sika-weakgray);
}

/* 头部两个侧边栏 */
</style>