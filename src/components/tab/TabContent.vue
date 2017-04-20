<template>
  <!--
    content-statistice组件
    contentId表示该数据的id值；
    isOn表示该数据是否显示，值为active，但一个页面中所有的content-statistice组件中只能有一个isOn="active"。
  -->
  <div :id="id" class="tab-pane" :class="isOn">
    <slot></slot>
  </div>
</template>

<script>
  import Tabs from './Tabs.vue'
  export default{
    name: 'tab-content',
    components: { Tabs },
    props: ['id', 'contentId', 'tabName', 'isOn']
  };
</script>
