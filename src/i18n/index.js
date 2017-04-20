import Vue from 'vue';
import VueI18n from 'vue-i18n';
import i18n from '../../i18n';

Vue.use(VueI18n);

Vue.config.lang = 'en';

Object.keys(i18n).forEach((lang) => {
  Vue.locale(lang, i18n[lang]);
});


// const storage = window.localStorage
// const index = storage.getItem('indexLang')
// if (index == '0') {
//   Vue.config.lang = 'en'
// } else if (index == '1') {
//   Vue.config.lang = 'cn'
// } else {
//   Vue.config.lang = 'en'
// }
// Session.set('lang', index)
