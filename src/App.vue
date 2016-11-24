  <template>
  <div id="app">
    <mu-appbar :title=title fullWidth>
      <mu-icon-button  icon="arrow_back" @click="back" slot="left"/>
    </mu-appbar>
    <transition name="slide-fade" mode="out-in">
     <router-view ></router-view>
     </transition>
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
  watch: {
    '$route': 'setTitle'
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
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-active {
  padding-left: 100px;
  opacity: 0;
}
</style>
