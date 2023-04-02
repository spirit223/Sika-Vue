<script setup>
  import axios from 'axios';
  function sendVerify(value) {
    axios
    .get('http://127.0.0.1:65432/register/verify/' + value)
    .then((response) => {
      console.log("请求结果" + response.data.success);
      if(response.data.success === false) {
        console.log('code: ' + response.data.code + 'message' + response.data.message);
      } 
      
    })
    .catch((error)=>{
      if(error.response) {
        console.log('status: ' + error.response.status + 'message' + error.response.data);
        callback(new Error(error.response.data))
      }
    })
  }
</script>

<template>
  <div>
    <button @click="sendVerify('111')"> 发送校验 </button>
  </div>
</template>

<style scoped lang="css">
img {
  width: 200px;
  height: 100px;
}
</style>