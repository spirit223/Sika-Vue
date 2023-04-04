<template>
  <div class="video-wrap">
    <video-player
      :options="videoOptions"
      controls
      class="sika-video"
    />
  </div>
</template>

<script setup>
  import { defineComponent, ref, onBeforeMount } from 'vue'
  import { VideoPlayer } from '@videojs-player/vue'
  import 'video.js/dist/video-js.css'
  import axios from 'axios'
  const videoSrc = ref()
  // todo 调用后端获取视频连接
  onBeforeMount(()=>{
    videoSrc.value = 'http://43.139.39.172:65534/externalLinksController/chain/22.%E6%B6%88%E6%81%AF%E6%B6%88%E8%B4%B9%E5%9F%BA%E6%9C%AC%E6%B5%81%E7%A8%8B.mp4?ckey=oHotf5UI6o7kB1pXeBBIiksMBgGFCP3YIeCaWOq19uyLf24%2BcwMPmJBlANw28WOn'
  })
  
  const videoOptions = ref({
    playbackRates: [0.7, 1.0, 1.5, 2.0], // 播放速度
    autoplay: false, // 加载完成后是否自动播放
    muted: true, // 是否静音。
    loop: false, // 是否循环播放
    preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
    language: 'zh-CN',
    aspectRatio: '16:9', // 宽高比例
    fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
    src: videoSrc,
    notSupportedMessage: '视频无法播放, 请联系管理人员',
    volume:"0.6"
  })
  defineComponent({
    components: {
      VideoPlayer
    }
  })
</script>

<style lang="css">
.video-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>