<template>
  <section class="sidebar">
    <div class="user-panel">
      <div class="pull-left image">
        <img :src="photo" class="img-circle" alt="User Image">
      </div>
      <div class="pull-left info">
        <p>{{username}}</p>
        <small>{{subtitle}}</small>
      </div>
    </div>
    <!-- <form action="#" method="get" class="sidebar-form">
      <div class="input-group">
        <input type="text" name="q" class="form-control" placeholder="Search...">
            <span class="input-group-btn">
              <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
              </button>
            </span>
      </div>
    </form> -->
    <ul class="sidebar-menu">
      <li class="header">{{$t('sidebar.main')}}</li>
      <li v-for="menu in menus" class="treeview" :class="{
        active: route.indexOf(menu.name) > -1,
        current: route.indexOf(menu.name) > -1,
      }">
        <router-link v-if="!menu.subs" :to="{ name: menu.name }">
          <i :class="menu.icon"></i>
          <span>{{$t('menus.'+menu.name)}}</span>
        </router-link>

        <a v-if="menu.subs" href="#">
          <i :class="menu.icon"></i>
          <span>{{$t('menus.'+menu.name)}}</span>
          <span class="pull-right-container">
            <i class="fa fa-angle-left pull-right"></i>
          </span>
        </a>

        <ul v-if="menu.subs" class="treeview-menu"
          :class="{
            'menu-open': route.indexOf(menu.name) > -1
          }"
          :style="{ display: route.indexOf(menu.name) > -1 ? 'block' : 'none' }"
        >
          <li v-for="sub in menu.subs" :class="{ current: `${menu.name}.${sub.name}` === route }">
            <router-link :to="{ name: `${menu.name}.${sub.name}` }">
              <i class="fa fa-circle-o"></i> {{$t(`menus.${menu.name}_${sub.name}`)}}
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    name: 'sidebar',
    props: ['menus'],
    meteor: {
      data: {
        user() {
          return Meteor.user() || {};
        },
      },
    },
    data() {
      return {
        route: this.$route.name,
      };
    },
    computed: {
      username () { return this.user.username || '(username)'; },
      subtitle () { return (this.user.emails && this.user.emails[0].address) || '(subtitle)'; },
      photo () { return this.user.profile && this.user.profile.photoUrl; },
    },
    watch: {
      $route () {
        this.route = this.$route.name;
      }
    }
  };
</script>
