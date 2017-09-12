import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

export default function i18n(messages) {
  return new VueI18n({
    locale: 'cn',
    messages,
  });
};

const storage = window.localStorage;
const index = storage.getItem('indexLang');
if (index) {
  if (index === '0') {
    Vue.config.lang = 'en';
  }
  if (index === '1') {
    Vue.config.lang = 'cn';
  }
} else {
  Vue.config.lang = 'cn';
}
Session.set('lang', index);
