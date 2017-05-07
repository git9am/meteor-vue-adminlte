<template>
  <li class="dropdown user user-menu">
    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
      <img :src="photo" class="user-image" alt="User Image">
      <span class="hidden-xs">{{username}}</span>
    </a>
    <ul class="dropdown-menu">
      <li class="user-header">
        <img :src="photo" class="img-circle" alt="User Image">
        <p>
          <b>{{username}}</b> - {{title}}
          <small>{{subtitle}}</small>
        </p>
      </li>

      <li class="user-footer">
        <div class="pull-left">
          <router-link class="btn btn-default btn-flat" :to="{ name: 'profile' }">
            {{$t('profile')}}
          </router-link>
        </div>
        <div class="pull-right">
          <button @click="logout" class="btn btn-default btn-flat">{{$t('sign_out')}}</button>
        </div>
        <div class="modal fade" id="logging-out">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">Logging out...</h4>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </li>
</template>

<script>
  export default {
    name: 'user-menu',
    meteor: {
      data: {
        user () {
          return Meteor.user() || {};
        },
      }
    },
    data () {
      return {
        route: this.$route.name,
      };
    },
    methods: {
      logout() {
        Meteor.logout();
        $('#logging-out').modal('show');
      },
    },
    computed: {
      username () { return this.user.username || '(username)'; },
      title () { return (this.user.profile && this.user.profile.title) || '(title)'; },
      subtitle () { return (this.user.emails && this.user.emails[0].address) || '(subtitle)'; },
      photo () { return this.user.profile && this.user.profile.photoUrl; },
    },
  };
</script>
