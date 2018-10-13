<template>
  <div class="home">
    <el-container>
      <el-header>
        <p>公告管理模板站</p>
        <el-button class="outLoginBtn" type="info" @click="outLogin">退出登陆</el-button>
      </el-header>
      <el-container>
        <el-aside width="150px" class="home_aside">
          <router-link to="/home/noticelist">公告管理</router-link>
          <router-link to="/home/iplist">网站管理</router-link>
          <router-link to="/home/todolist">待办事项管理</router-link>
        </el-aside>
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
          <el-footer>
            <p>Power by Element-UI</p>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "home",
  methods: {
    outLogin: function () {
      this.$store.dispatch('OutLogin', this.$router)
      .then(()=>{this.$router.push({name: 'login'})});
    }
  }
};
</script>

<style lang="scss" scoped>
  $titleColor: #75adff;
  $bgColor: #d9e9ff;
  $deepBgColor: #7fa8e1;

  $textTiltleColor: #333;
  $textLabelColor: #666;
  $textFootColor: #e4e4e4;
  .home {
    width: 100%;
    height: 100%;
    .el-header {
      background: $titleColor;
      color: #fff;
      .outLoginBtn {
        position: absolute;
        top: 10px;
        right: 10px;
      }
    }
    .el-container {
      height: 100%;
      .el-aside {
        background: $bgColor;
        height: 100%;
        box-sizing: border-box;
        a {
          display: block;
          padding: 12px;
          color: $textTiltleColor;
        }
        a.router-link-active {
          color: white;
          background: $deepBgColor;
        }
      }
      .el-footer {
        background: $deepBgColor;
        color: $textFootColor;
        font-size: 18px;
      }
    }
  }
</style>
