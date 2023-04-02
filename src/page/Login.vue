<template>
  <div class="outer">
    <div class="form-area">
      <div>
        <a href="http://127.0.0.1:5173/">
          <img src="src/assets/image/sika_png_logo/lu1.png" alt="">
        </a>
      </div>
      <p>Sign in to Sika</p>
      <el-form 
        :model="form" 
        label-width="100px" 
        class="form-border"
        label-position="top"
      >
        <el-form-item label="username">
          <el-input 
            v-model="form.name" 
            placeholder="Please input username"
          />
        </el-form-item>

        <el-form-item label="password">
          <el-input
            v-model="form.password"
            type="password"
            placeholder="Please input password"
            show-password
          />
        </el-form-item>

        <router-link to="/forgetPass" id="forget">忘记密码</router-link>

        <el-form-item class="buttonRaw">
          <el-button type="primary" @click="onSubmit">我要登录啦!</el-button>
          <el-button @click="onRegister" id="rightBtn">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
</div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import axios from 'axios';
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()

// do not use same name with ref
const form = reactive({
  name: '',
  password: ''
})

const error = ref(false);

const onSubmit = () => {
  axios.post('http://127.0.0.1:65432/user/login', {
    "username": form.name,
    "password": form.password
  }).then((response)=>{
    if(response.data.success) {
      ElMessage({
        message: '登陆成功, 欢迎 ' + response.data.data.nickName,
        type: 'success',
        offset: 40
      })
      const localToken = localStorage.getItem("token")
      console.log("获取到本地token为" + localToken);
      localStorage.setItem("token", response.data.data.token)
      localStorage.setItem("nickName", response.data.data.nickName)
      console.log("token刷新成功");
      router.push("/index")
    } else {
      ElMessage.error({
        message: "用户名或密码错误",
        offset: 40
      })
    }
    
  })
}
const onRegister = () => {
  router.push('/register')
}
</script>

<style scoped>
#forget {
  width: 64px;
  height: 21px;
  margin-left: 335px;
  margin-top: 5px;
}
p {
  font-size: 33px;
  text-align: center;
  line-height: 33px;
  width: 400px;
  font-weight: 100;
  margin-top: 20px;
}

img {
  display: block;
  margin: 0 auto;
  width: 100px;
}
</style>

<style lang="css">
  #rightBtn {
    margin-left: 235px;
    margin-top: 10px;
  }
  .el-form-item {
    margin-bottom: 3px;
  }
 .outer {
  width: 100%;
  height: 700px;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
 }
 .form-area {
  padding: 15px;
  border-radius: 25px;
  border: 1px solid rgba(30, 30, 30, 0.3);
  background-color: rgb(246, 248, 250);
 }
 .form-border {
  margin-top: 15px;
 }
</style>