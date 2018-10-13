<template>
 <div class="login" :style="{backgroundImage: 'url('+img+')'}">
   <el-header>登陆页面</el-header>
   <el-card>
     <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="form.admin_name"></el-input>
      </el-form-item>

      <el-form-item label="密码">
        <el-input type="password" v-model="form.admin_passwd"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button @click="onSubmit">登陆</el-button>
      </el-form-item>
    </el-form>
   </el-card>
 </div>
</template>

<script type="text/ecmascript-6">
import img from '../assets/bg.jpg';

export default {
  data() {
    return {
      img: img,
      form: {
        admin_name: "admin",
        admin_passwd: "123456",
      }
    };
  },
  components: {},
  methods: {
    onSubmit: function () {
      var self = this;
      if (this.form.admin_name != "" && this.form.admin_passwd != "") {
        self.$store.dispatch("Login", self.form).then(() => {
          self.$router.push({path: '/'});
        }).catch(err => {
          self.$message.error(err);
        })
      }
      else {
        self.$message({
          message: '请输入用户名和密码',
          type: 'warning'
        });
      }
    }
  }
};
</script>

<style lang="scss">
.login {
  
  width: 100%;
  height: 100%;
  // background: -webkit-linear-gradient(#409EFF, #F56C6C);
  .el-header {
    line-height: 60px;
    font-size: 24px;
    font-weight: bold;
    color: #fff;
    border-bottom: 1px solid #fff;
    background: rgba(0,0,0,0.3)
  }
  .el-card {
    position: absolute;
    background: rgba(0,0,0,0.3);
    color: #fff;
    border-radius: 30px;
    width: 300px;
    padding: 18px;
    top: 40%;
    left: 70%;
    transform: translate(-50%, -50%);
    .el-form-item__label {
      color: #fff;
    }
  }
}
</style>
