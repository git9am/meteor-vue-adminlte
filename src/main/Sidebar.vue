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
      <li v-for="menu in menus" class="treeview" :class="{ active: route === menu.name }">
        <router-link :to="{ name: menu.name }">
          <i :class="menu.icon"></i> <span>{{$t('menus.'+menu.name)}}</span>
          <!-- <span class="pull-right-container">
            <i class="fa fa-angle-left pull-right"></i>
          </span> -->
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
  import { menus } from '../';

  export default {
    name: 'sidebar',
    meteor: {
      data: {
        user () {
          return Meteor.user() || {};
        },
      },
    },
    data () {
      return {
        route: this.$route.name,
        menus,
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
