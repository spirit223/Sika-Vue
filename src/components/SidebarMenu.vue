<script setup>
  
</script>

<template>
  <el-scrollbar class="aside">
      <el-menu
        router
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        unique-opened="true"
        default-active="index/one"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
        id="side-menu"
      >
        <el-sub-menu index="1" id="first-topic">
          <template #title>
            <el-icon><Files /></el-icon>
            <span>资料系统</span>
          </template>
          <el-menu-item-group title="查看">
            <el-menu-item index="/index/preview/video">视频</el-menu-item>
            <el-menu-item index="/index/preview/image">图片</el-menu-item>
            <el-menu-item index="/index/preview/file">文件</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="管理">
            <el-menu-item index="/index/manage/video">视频</el-menu-item>
            <el-menu-item index="/index/manage/image">图片</el-menu-item>
            <el-menu-item index="/index/manage/file">文件</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>

        <el-sub-menu index="2">
          <template #title>
            <el-icon><document /></el-icon>
            <span>题目练习</span>
          </template>
          <el-menu-item index="2-1">视频</el-menu-item>
          <el-menu-item index="2-2">图片</el-menu-item>
          <el-menu-item index="2-3">文件</el-menu-item>
        </el-sub-menu>

        <!-- <el-menu-item index="2">
          <el-icon><document /></el-icon>
          <span>题目练习</span>
        </el-menu-item> -->
        <el-menu-item index="3" disabled>
          <el-icon><AlarmClock /></el-icon>
          <span>考试中心</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <span>我的设置</span>
        </el-menu-item>
      </el-menu>
  </el-scrollbar>
  
</template>

<style lang="css">
.aside {
  height: 1000px;
  background-color: rgb(84, 92, 100);
}

</style>