import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

export default function i18n(messages) {
  return new VueI18n({
    locale: 'en',
    messages,
  });
};

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
