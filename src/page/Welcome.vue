<script setup lang="ts">
import { ref, provide, type Ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import PageHeaderVue from '../components/IndexHeader.vue';
import NavigationBar from '../components/NavigationBar.vue';
import type { InjectionKey } from 'vue'

interface RefPro {
  object: Ref,
  update: Function
}

const proKey = Symbol() as InjectionKey<RefPro>

const showBanner = ref(true)
function updateShowBanner(flag?: boolean):void {
  if(flag === undefined) {
    showBanner.value = !showBanner.value
  } else {
    showBanner.value = flag
  }
}
provide('proKey',
  {
    showBanner,
    updateShowBanner
  }
)
</script>

<template>
  <div class="common-layout">
    <el-container>

      <!-- 头部区域 -->
      <el-header id="head">
        <PageHeaderVue></PageHeaderVue>
      </el-header>
      
      <el-container id="principal">

        <!-- 导航区域 -->
        <!-- <div class="floor-warp">
          <el-aside id="aside">
            <NavigationBar/>
          </el-aside>
        </div> -->
        
        <!-- 主体区域 -->
        <el-main id="page">
          <router-view id="principal" v-if="!showBanner">
            
          </router-view>
          <div v-else id="banner">
            <span>小吴来哩!</span>
          </div>
        </el-main>
      </el-container>

    </el-container>
  </div>
</template>

<style>

#banner {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
  font-weight: 700;
  color: #FFFFFF;
  background-image: linear-gradient( 270deg, rgba(176, 42, 42, .16) 0%, rgba(176, 42, 42, .56) 18.45%, rgba(176, 42, 42, .8) 49.67%, rgba(176, 42, 42, .56) 82.52%, rgba(176, 42, 42, .196364) 99.7%, rgba(189, 40, 40, 0) 99.71%, rgba(203, 56, 55, 0) 99.72%), url('@/assets/image/background-image.png') ;
  background-repeat: no-repeat ;
  background-size: cover;
  height: calc(100vh - 80px);
}
#banner span {
  display: block;
  width: 32rem;
  text-align: center;
}

#principal {
  background-image: linear-gradient( 270deg, rgba(176, 42, 42, .16) 0%, rgba(176, 42, 42, .56) 18.45%, rgba(176, 42, 42, .8) 49.67%, rgba(176, 42, 42, .56) 82.52%, rgba(176, 42, 42, .196364) 99.7%, rgba(189, 40, 40, 0) 99.71%, rgba(203, 56, 55, 0) 99.72%), url('@/assets/image/background-image.png') ;
  background-repeat: no-repeat ;
  background-size: cover;
  height: 830px;
}
.floor-warp {
  position: relative;
  width: 265px;
}
#aside {
  position: absolute;
  height: 100%;
  /* background-color: var(--bs-darkblue); */
  background-color: #bc3bfe;
  /* width: inherit; */
  /* todo */
  width: 500px;
}
#page {
  /* background-color: var(--bs-yellowgreen); */
  background-color: #FFFFFF;
  height: 877px;
  padding-top: 0;
}
</style>
