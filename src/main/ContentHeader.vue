<template>
  <!--
    content-header组件
    subtitle表示小标题。
  -->
  <section class="content-header">
    <h1>
      {{$t('menus.'+title)}}
      <small>{{subtitle}}</small>
    </h1>
    <ol class="breadcrumb">
      <li><router-link :to="{ name: 'rentManagement_renting' }"><i class="fa fa-dashboard"></i>{{$t('breadcrumb_home')}}</router-link></li>
      <li class="active">{{$t('menus.'+title)}}</li>
    </ol>
  </section>
</template>

<script>
  export default {
    name: 'content-header',
    data () {
      return {
        title: this.$route.name && this.$route.name.replace('.', '_'),
        subtitle: ' '
      };
    },
    watch: {
      $route () {
        this.title = this.$route.name && this.$route.name.replace('.', '_');
      }
    }
  };
</script>
