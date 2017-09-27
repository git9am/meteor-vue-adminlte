import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

export default function i18n(messages) {
  let lang;
  const storage = window.localStorage;
  const index = storage.getItem('indexLang');
  if (index) {
    if (index === '0') {
      lang = 'en';
    }
    if (index === '1') {
      lang = 'cn';
    }
  } else {
    lang = 'en';
  }
  Session.set('lang', index);

  return new VueI18n({
    locale: lang,
    messages,
  });
};
