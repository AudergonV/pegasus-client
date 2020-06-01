<template>
  <v-app>
    <v-navigation-drawer
      v-if="!hide"
      v-model="drawer"
      class="primary"
      enable-resize-watcher
      app
      :clipped="clipped"
    >
      <v-list dense nav class="py-0" >
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="./assets/default-avatar.jpg" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Foxyou</v-list-item-title>
            <v-list-item-subtitle>Superadmin</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item to="/">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ $t('menu.home') }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/profile">
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ $t('menu.profile') }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/settings">
          <v-list-item-icon>
            <v-icon>mdi-cogs</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ $t('menu.settings') }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-list class="pa-2">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-earth</v-icon>
              </v-list-item-icon>

              <v-select v-model="$i18n.locale" :items="langs" item-text="name" item-value="lang"></v-select>
            </v-list-item>
            <v-list-item @click="$vuetify.theme.dark = !$vuetify.theme.dark">
              <v-list-item-icon>
                <v-icon>mdi-weather-night</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{$t('theme.title')}}:&nbsp;{{$vuetify.theme.dark ? $t('theme.dark') : $t('theme.light')}}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </div>
      </template>
    </v-navigation-drawer>
    <v-app-bar v-if="!hide" fixed app :clipped-left="clipped" class="accent">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Pegasus</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <v-fade-transition mode="out-in">
          <router-view></router-view>
        </v-fade-transition>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
import locales from './locales.json';

export default {
  data() {
    return {
      langs: locales.langs,
      drawer: true,
      clipped: true
    };
  },
  created() {
    this.$vuetify.theme.dark = true;
  },
  computed: {
    hide() {
      return this.$route.path === "/login" || this.$route.path === "/register";
    }
  }
};
</script>
