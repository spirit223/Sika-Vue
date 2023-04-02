<script lang="ts" setup>
import { inject, ref, type Ref, type InjectionKey } from 'vue';
import { useRoute, useRouter } from 'vue-router';

interface RefPro {
  object: Ref,
  update: Function
}
const key = Symbol() as InjectionKey<RefPro>

const obj = {
  object:ref(false),
  update:function(flag:boolean):void {
    if(flag === undefined) {
      object.value = !object.value
  } else {
    object.value = flag
  }
  }
}

const router = useRouter()
const {object, update} = inject(key, obj)

function handleToHome():void {
  update()
  router.push({
    path: '/index'
  })
}

function handleToLogin():void {
  router.push({
    name: 'login'
  })
}
</script>

<template>
  <div class="principal">

    <!-- 左侧首页图标 -->
    <div class="sika-header-link" @click.stop="handleToHome">
      <el-icon>
        <HomeFilled />
      </el-icon>
      <span>Enter</span>
    </div>

    <!-- 右侧关于图标 -->
    <div class="sika-header-link" @click.stop="handleToLogin">
      <el-icon>
        <Connection />
      </el-icon>
      <span>Login</span>
    </div>
  </div>

  
</template>

<style lang="css">
  /* 隐藏光标 */
  div, span, p {
    caret-color: transparent;
  }
  .principal{
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    height: 60px;
    line-height: 60px;
    font-size: 24px;
    /* background: linear-gradient(to right, #8dc146, var(--sika-darkblue), #8dc146); */
    /* background: #FFFFFF; */
  }

  /* 图标样式: 指针 */
  .sika-header-link {
    cursor: pointer;
  }
  /* 鼠标悬停图标样式: 颜色改变 */
  .sika-header-link:hover {
    color: var(--sika-darkblue);
  }
  .sika-header-link span {
    vertical-align: top;
  }
</style>