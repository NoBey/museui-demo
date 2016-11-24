<template>
<div transition="fadeOutLeft">
<div>
<h3>基本使用说明</h3>
  <mu-auto-complete hintText="请随便输入点啥" @input="handleInput(1)" :dataSource='dataSource'/>
  <mu-auto-complete hintText="请随便输入点啥" labelFloat label="full width" fullWidth @input="handleInput" :dataSource="dataSource"/>
</div>
<br>
<div>
<h3>dataSource 可以通过配置 leftIcon 或者 rightIcon 来显示 Icon， 通过设置 openOnFocus 输入框 focus 时的时候显示补全信息。</h3>
<mu-auto-complete filter="noFilter" label="配置 datasource 显示 icon" labelFloat :dataSource="dataSource"/> <br/>
  <mu-auto-complete filter="noFilter" label="在 focus 的时候显示补全信息" openOnFocus labelFloat :dataSource="focusData"/>
</div>
<br>
<div>
<h3>通过配置不同的 filter 来过滤 dataSource 中的数据，只提示和输入相关的数据，也可以自定义 filter 函数，完成不同的 dataSource 过滤， maxSearchResults 用来控制显示结果的数量。
不过滤 dataSource
</h3>
  <mu-auto-complete label="不过滤 dataSource" :maxSearchResults="5" labelFloat :dataSource="colors" filter="noFilter"/><br/>
  <mu-auto-complete label="区分大小写的文字匹配过滤" :maxSearchResults="5" labelFloat :dataSource="dataSource" filter="caseSensitiveFilter"/><br/>
  <mu-auto-complete label="不区分大小写的文字匹配过滤" :maxSearchResults="5" labelFloat :dataSource="dataSource" filter="caseInsensitiveFilter"/><br/>
  <mu-auto-complete label="只显示有 ‘m’ 和 ‘y’ 的数据" :maxSearchResults="5" labelFloat :dataSource="dataSource" :filter="myfilter"/>
</div>
</div>
</template>
<script type="text/babel">
import { mapGetters, mapActions } from 'vuex'

export default {
  data: function () {
    return {
      dataSource: [1, 2, 3, 4]
    }
  },
  computed: {
    ...mapGetters({
      focusData: 'CheckoutFocusData'
    })
  },
  methods: {
    ...mapActions({
      handleInput: 'checkoutdatasouselist'
    })
  }
}

</script>