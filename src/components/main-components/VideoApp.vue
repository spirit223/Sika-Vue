<script setup>
  import { ref } from 'vue'
  import VideoPlayer from '../VideoPlayer.vue';
  const source = 'http://43.139.39.172:65534/externalLinksController/chain/gc%E9%A3%8E%E9%AA%9A%E5%AB%82%E5%AD%90%E7%A9%BF%E4%B8%9D%E8%A2%9C%E5%8B%BE%E5%BC%95%E5%BC%9F%E5%BC%9F%E4%B9%B1%E4%BC%A6%20%E9%AB%98%E6%BD%AE%E7%88%BD%E7%9A%84%E5%90%90%E8%88%8C%E5%A4%B4%20.mp4?ckey=Ubd%2FWvL2B2%2BZZmSn3NoFmNasxLAv2dh1vrb2FRFG9gGDDc%2Bs%2FjF0kLZ2n32FoM7y'
  const videoOptions = ref({
    autoplay: true,
    controls: true,
    sources: [
      {
        src:
          source,
          type: 'video/mp4'
      }
    ]
  })
</script>

<template>
  <div>
    <video-player :options="videoOptions" />
  </div>
</template>

<style lang="css">

</style>