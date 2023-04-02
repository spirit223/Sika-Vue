<script setup>
  import SidebarMenu from '@/components/SidebarMenu.vue';
  import Head from '@/components/Head.vue';
  import MainApp from '@/components/MainApp.vue';
</script>

<template>
  <header>
    <Head></Head>
  </header>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <SidebarMenu></SidebarMenu>
      </el-aside>
      <el-main>
        <MainApp class="sika-main"></MainApp>
      </el-main>
    </el-container>
  </div>
</template>

<style lang="css">
</style>