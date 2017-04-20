<template>
  <!--
    progress-bar-widget组件
    title代表标题文字；
    number代表显示的数值；
    colorClass表示组建的背景颜色的class名；
    total表示总和；
    icon表示组建的图标。
  -->
  <div class="col-md-3 col-sm-6 col-xs-12">
    <div class="info-box" :class="colorClass">
      <span class="info-box-icon"><i class="fa" :class="icon"></i></span>

      <div class="info-box-content">
        <span class="info-box-text">{{title}}</span>
        <span class="info-box-number alter-num">{{number}}</span>

        <div class="progress" v-if="total">
          <div class="progress-bar alter-bar" :style="'width: '+number/total*100+'%'"></div>
        </div>
        <div class="progress" v-if="number.substr(-1) == '%'">
          <div class="progress-bar alter-bar" :style="'width: '+number"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'widget-progress-box',
    props: ['title', 'number', 'total', 'colorClass', 'icon']
  };
</script>
