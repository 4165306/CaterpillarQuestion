<template>
<div>
  <particle :color="0xFFFFFF" />
  <div class="h-margin-top-100 h-pos-rel reload-form" style="color: #FFF">
    <div class="h-pos-rel" style="color:#FFF; font-size: 40px;text-align: center">
      鸿蒙问卷系统
    </div>
    <a-form-model ref="form" :model="form" :label-col="{span: 4, offset: 4}" :wrapper-col="{span: 8}">
      <a-form-model-item label="账号" prop="username" :rules="[{required: true, message: '请输入您的账号'}]">
        <a-input v-model="form.username" size="large" />
      </a-form-model-item>
      <a-form-model-item label="密码" prop="password" :rules="[{required: true, message: '请输入您的密码'}]">
        <a-input-password size="large" v-model="form.password" visibilityToggle />
      </a-form-model-item>
      <a-form-model-item label="验证码" prop="code" :rules="[{required: true, message: '请输入右侧验证码'}]" :label-col="{span: 4, offset: 4}" :wrapper-col="{span: 8}">
        <div class="h-flex full-width">
          <a-input class="h-flex-5" size="large" v-model="form.code" />
          <img @click="getVerifyCode" class="h-flex-2" style="width: 0px; height: 40px;" :src="verifyCode.code" alt="轻点更换验证码" />
        </div>
      </a-form-model-item>
      <a-form-model-item :colon="false" label=" " :label-col="{span: 4, offset: 4}" :wrapper-col="{span: 8}">
        <a-button type="primary" size="large" block @click="handleSubmit">登陆</a-button>
      </a-form-model-item>
      <a-form-model-item :colon="false" label=" " :label-col="{span: 4, offset: 4}" :wrapper-col="{span: 8}">
        <div class="h-flex h-jus-flex-end" style="color:#FFF; cursor: pointer; font-size:16px;">
          去注册
        </div>
      </a-form-model-item>
    </a-form-model>
  </div>
</div>
</template>

<script>
import Particle from '@/components/specialEffects/particle'
import store from '@/store/index'
import { getVerifyCode } from '@/apis/verifycode/verifycode'
export default {
  name: 'login',
  components: { Particle },
  data () {
    return {
      form: {
        username: '',
        password: '',
        code: '',
        hash: ''
      },
      verifyCode: {
        code: ''
      }
    }
  },
  created () {
    this.init()
  },
  methods: {
    async init () {
      this.getVerifyCode()
    },
    getVerifyCode () {
      const _this = this
      getVerifyCode().then(resp => {
        _this.verifyCode.code = resp.data.data.image
        _this.form.hash = resp.data.data.hash
      }).catch(() => {
        _this.$message.warning('验证码获取失败')
      })
    },
    handleSubmit () {
      const _this = this
      this.$refs.form.validate(valid => {
        console.log('valid', valid)
        if (!valid) {
          return false
        }
        // todo sendLogin
        store.dispatch('Token/login', _this.form).then(resp => {
          _this.$router.push({ path: '/' })
        }).catch(err => {
          _this.$message.error(err.message)
        })
      })
    }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg:#283443;
$light_gray:#fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg:#15255B;
$dark_gray:#889aa4;
$light_gray:#eee;

.reload-form{
  .ant-form-item-label > label{
    color: #FFF
  }
}

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 140px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}

#indexLizi {
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
  overflow: hidden;
}
</style>
