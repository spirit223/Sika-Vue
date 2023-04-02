<template>
  <div>
    <video ref="videoPlayer" class="video-js"></video>
  </div>
</template>

<script setup>
  import videojs from 'video.js';
  import {ref, beforeDestroy} from 'vue'

  const props = defineProps({
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  })
  const videoPlayer = ref()
  const player = videojs(videoPlayer, options, () => {
      this.player.log('onPlayerReady', this);
    })
  beforeDestroy(() => {})
</script>

<script>
import videojs from 'video.js';

export default {
  name: 'VideoPlayer',
  mounted() {
    this.player = videojs(this.$refs.videoPlayer, this.options, () => {
      this.player.log('onPlayerReady', this);
    });
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  }
}
</script>