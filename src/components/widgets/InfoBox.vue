<template>
  <!--
    widget-info-box组件
    title代表标题文字；
    number代表显示数字；
    linkTo表示跳转到哪里；
    colorClass表示组建的背景颜色的class名；
    icon表示组建的图标；
    loading表示正在加载数据。
  -->
  <div class="col-lg-3 col-sm-6 col-xs-12">
    <div class="small-box" :class="colorClass">
      <div class="inner">
        <h3 v-if="!loading">{{number}}</h3>
        <h3 v-if="loading"><i class="fa fa-refresh fa-spin"></i></h3>
        <p>{{title}}</p>
      </div>
      <div class="icon">
        <i class="fa" :class="icon"></i>
      </div>
      <router-link :to="{ name: linkName }" class="small-box-footer">{{$t('dashboard.view_all')}} <i class="fa fa-arrow-circle-right"></i></router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'widget-info-box',
    props: ['title', 'number', 'linkName', 'colorClass', 'icon', 'loading']
  };
</script>
