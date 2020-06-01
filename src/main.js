import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import VueI18n from 'vue-i18n'
import locales from './locales.json';

Vue.use(VueI18n);

Vue.config.productionTip = false

const i18n = new VueI18n({
  locale: 'fr',
  messages: locales.messages
});

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
