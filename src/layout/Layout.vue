<template>
  <el-container>
    <el-aside class="aside" width="220px">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="pink"
        :router="true"
      >
        <!-- <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
           <el-menu-item index="1-3">选项3</el-menu-item>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>-->
        <el-menu-item index="0" :route="{ path: '/' }">
          <i class="el-icon-menu"></i>
          <span slot="title">MainApp</span>
        </el-menu-item>
        <el-menu-item index="1" :route="{ path: '/mircoVue3' }">
          <i class="el-icon-menu"></i>
          <span slot="title">Vue3App</span>
        </el-menu-item>
        <el-menu-item index="2" :route="{ path: '/mircoVue3Ts' }">
          <i class="el-icon-menu"></i>
          <span slot="title">Vue3TSApp</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header class="header" height="60px">顶栏</el-header>
      <el-main class="main">
        <section v-if="$route.name">
          <div>main</div>
          <router-link to="/">Home</router-link>|
          <router-link to="/about">About</router-link>

          <router-view></router-view>
        </section>
        <section v-else id="container"></section>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.aside {
  background-color: pink;
}
.header {
  background-color: skyblue;
}
.main {
  height: calc(100vh - 60px);
}
</style>