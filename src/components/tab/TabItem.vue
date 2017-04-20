<template>
  <!--
    statistice-tab组件
    isOn表示决定哪个表格显示，所有statistice-tab中isOn参数只能有一个，参数值为active；
    target表示tab切换到哪个表格，后面的参数值表示所要切到表格的id名；
    tabName表示tab的名字。
  -->
  <li :class="isOn">
    <a :href="'#'+target" data-toggle="tab" :index="index">{{label}}</a>
  </li>
</template>

<script>
  export default{
    name: 'tab-item',
    props: ['target', 'label', 'isOn', 'index']
  };
</script>
