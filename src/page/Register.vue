<script lang="ts" setup>
import { reactive, ref, onMounted } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import axios from 'axios';
const ruleFormRef = ref<FormInstance>()



// do not use same name with ref
const form = reactive({
  name: '',
  nick:'',
  pass:'',
  checkPass:'',
  phone:'',
  birthday: '',
  email: '',
  sex:'2',
  code: ''
})
const needTips = ref({
  nameTips: false,
  phoneTips: false,
  passTips: false,
  checkTips: false,
  emailTips: false,
  codeTips: false
})
const codeSrc = ref('')

onMounted(()=>{
  axios.get('http://192.168.0.102:65522/api/captcha/create')
  .then((response)=>{
    codeSrc.value = response.data
  })
})
const refuseCode = () => {
  axios.get('http://192.168.0.102:65522/api/captcha/refresh')
  .then((response) => {
    codeSrc.value = response.data
  })
}

const validatePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    needTips.value.passTips = true
    callback(new Error('Please input the password'))
  } else {
    if (form.checkPass !== '') {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField('checkPass', () => {
        needTips.value.passTips = false
        needTips.value.checkTips = false
      })
    }
    callback()
  }
}
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === '') {
    needTips.value.checkTips = true
    callback(new Error('Please input the password again'))
  } else if (value !== form.pass) {
    needTips.value.checkTips = true
    callback(new Error("Two inputs don't match!"))
  } else {
    callback()
  }
}
const validateusername = (rule: any, value: any, callback: any) => {
  if(value === '') {
    callback(new Error('Please input the username'))
  } else {
    axios
      .get('http://127.0.0.1:65432/register/verify/' + value)
      .then((response) => {
        if (response.data.message === '用户名已存在') {
          needTips.value.nameTips = true
          callback(new Error('this user name already exists'))
        } else {
          callback()
        }
      })
  }
  
}
const validatePhone = (rule: any, value: any, callback: any) => {
  if(value === '') {
    needTips.value.phoneTips = true
    callback(new Error('Please input the phone'))
  } else {
    if (!(/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/.test(value))) {
      needTips.value.phoneTips = true
      callback(new Error('Please input the correct mobile number'))
    }
  }
}
const validateEmail = (rule: any, value: any, callback: any) => {
  if(value === '') {
    needTips.value.emailTips = true
    callback(new Error('Please input the email'))
  } else {
    if (!(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(value))) {
      needTips.value.emailTips = true
      callback(new Error('Please input the correct email'))
    }
  }
}
const validateCode = (rule: any, value: any, callback: any) => {
  if(value === '') {
    needTips.value.codeTips = true
    callback(new Error('Please input the email'))
  } else {
    axios.get('http://192.168.0.102:65522/verify/' + value).then(
      (response) => {
        if(!response.data === true) {
          needTips.value.codeTips = true
          callback(new Error('Please input the correct email'))
        }
      }
    )
  }
}

const rules = reactive<FormRules>({
  name: [{ validator: validateusername, trigger: 'blur' }],
  phone: [{ validator: validatePhone, trigger: 'blur' }],
  email: [{ validator: validateEmail, trigger: 'blur' }],
  code: [{ validator: validateCode, trigger: 'blur' }],
  pass: [{ validator: validatePass, trigger: 'blur' }],
  checkPass: [{ validator: validatePass2, trigger: 'blur' }]
})


const onSubmit = () => {
  // todo 提交逻辑
  console.log('submit!')
}
const onReset = () => {
  form.name = ''
  form.nick = ''
  form.pass = ''
  form.checkPass = ''
  form.birthday = ''
  form.email = ''
  form.code = ''
}
</script>

<template>
  <div class="outer">
    <div class="form-area">
      <div>
        <a href="http://127.0.0.1:5173/">
          <img src="src/assets/image/sika_png_logo/lu1.png" alt="logo" id="logo">
        </a>
      </div>
      <p>Sign up to Sika</p>
      <el-form 
        :model="form" 
        label-width="120px"
        label-position="top"
        :rules="rules"
        ref="ruleFormRef"
        status-icon
        class="demo-ruleForm form-border"
      >
        <el-form-item label="Username" prop="name" :class="{'has-tips':needTips.nameTips}">
          <el-input v-model="form.name"/>
        </el-form-item>

        <el-form-item label="Nickname">
          <el-input v-model="form.nick" />
        </el-form-item>

        <el-form-item label="Phone" :class="{'has-tips':needTips.phoneTips}" prop="phone">
          <el-input v-model="form.phone" type="tel"/>
        </el-form-item>

        <el-form-item label="sex">
          <el-radio-group v-model="form.sex">
            <el-radio label="0">♂</el-radio>
            <el-radio label="1">♀</el-radio>
            <el-radio label="2">?</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="Password" prop="pass" :class="{'has-tips':needTips.passTips}">
          <el-input v-model="form.pass" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item label="Confirm" prop="checkPass" :class="{'has-tips':needTips.checkTips}">
          <el-input
            v-model="form.checkPass"
            type="password"
            autocomplete="off"
          />
        </el-form-item>
        
        <el-form-item label="Birthday">
          <el-col>
            <el-date-picker
              v-model="form.birthday"
              type="date"
              placeholder="Pick a date"
              style="width: 100%"
            />
          </el-col>
        </el-form-item>

        <el-form-item label="E-mail" :class="{'has-tips':needTips.emailTips}" prop="email">
          <el-input v-model="form.email" type="email"/>
        </el-form-item>

        <tr>
          <td>
            <el-form-item label="Captcha" class="verification-code" prop="code">
              <el-input v-model="form.code" type="text" class="verification-code-input"/>
            </el-form-item>
          </td>
          <td>
            <img :src=codeSrc alt="验证码" class="verification-code-img" @click="refuseCode()">
          </td>
        </tr>

        <el-form-item class="last-line">
          <el-button type="primary" @click="onSubmit">Create</el-button>
          <el-button id="cancelBtn" @click="onReset">Reset</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style scoped>
p {
  font-size: 33px;
  text-align: center;
  line-height: 33px;
  width: 400px;
  font-weight: 100;
  margin-top: 20px;
  margin-bottom: 10px;
}

#logo {
  display: block;
  margin: 0 auto;
  width: 100px;
}

:deep(.form-area .el-form-item__label) {
  margin-bottom: 1px !important;
}
:deep(.form-area .el-input__wrapper) {
  margin-bottom: 8px !important;
}
.form-area {
  margin-top: 150px;
}
</style>

<style lang="css">
#cancelBtn {
  margin-left: 235px;
}
.has-tips{
  margin-bottom: 20px;
}

.verification-code-input {
  display: inline;
  vertical-align:center;
}
.verification-code-img {
  vertical-align: top;
  width: 200px;
  padding-left: 45px;
}

.last-line {
  margin-top: 20px;
}

.verification-code{ 
  display: inline-block;
  width: 150px;
}

</style>