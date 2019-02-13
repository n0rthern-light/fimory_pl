<template>
<v-app id="inspire" dark>
    <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      app
      floating
      disable-resize-watcher
      right
      class="grey darken-4"
      style="margin-top: 4.04rem;"
  >
      <v-list dense>
        <router-link to="/" exact tag="span" style="cursor: pointer;">
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              DlaNauczycieli.edu.pl
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        </router-link>
        <v-divider></v-divider>
        <router-link v-for="item in sidebaritems" :key="item.title" :to="item.link" exact tag="span" style="cursor: pointer;">
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{item.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        </router-link>
        <v-divider></v-divider>
        <v-list-tile @click="drawer = false">
          <v-list-tile-action>
            <v-icon>close</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Zamknij</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-title class="pl-1"><router-link to="/" exact tag="span" style="cursor: pointer;">Filmory.pl</router-link></v-toolbar-title>
      <v-toolbar-items class="ml-4 hidden-xs-and-down">
        <v-btn flat>Filmy</v-btn>
        <v-btn flat>Seriale</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>Zaloguj się</v-btn>
        <v-btn flat>Zarejestruj się</v-btn>
      </v-toolbar-items>
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
    </v-toolbar>
    <v-content>
      <div align-center>
        <router-view></router-view>
      </div>
    </v-content>
    <v-footer app fixed>
      <v-btn flat left>Regulamin</v-btn>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false
    }
  },
  computed: {
    sidebaritems () {
      let sidebaritems = [
        {icon: 'movie', title: 'Filmy', link: '/movies'},
        {icon: 'tv', title: 'Seriale', link: '/serials'},
        {icon: 'how_to_reg', title: 'Zaloguj się', link: '/login'},
        {icon: 'accessibility_new', title: 'Zarejestruj się', link: '/register'}
      ]

      if (this.userIsAuthenticated) {
        sidebaritems = [
          {icon: 'movie', title: 'Filmy', link: '/movies'},
          {icon: 'tv', title: 'Seriale', link: '/serials'},
          {icon: 'account_circle', title: 'Twój profil', link: '/user_profile'}
        ]
      }

      return sidebaritems
    },
    userIsAuthenticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    }
  }
}
</script>
