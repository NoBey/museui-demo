<template>
  <div id="app">
    <mu-appbar :title=title fullWidth>
      <mu-icon-button  icon="arrow_back" @click="back" slot="left"/>
    </mu-appbar>
     <router-view></router-view>
  </div>
</template>

<script>
import router from './router'
export default {
  name: 'app',
  data: function () {
    return {
      title: ''
    }
  },
  mounted: function () {
    this.setTitle()
  },
  methods: {
    back: function () {
      router.back()
    },
    setTitle: function () {
      this.title = this.$route.name
    }
  }
}
</script>

<style>
.mu-appbar-title{
  /* 标题不要居中显示*/
}
</style>
