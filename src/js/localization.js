import { configureLocalization } from '@lit/localize';
import { sourceLocale, targetLocales } from '../generated/locale-codes';

const LANGUAGE_KEY = "LANGUAGE";
 
export const { getLocale, setLocale } = configureLocalization({
  sourceLocale,
  targetLocales,
  async loadLocale(locale) {
    return import(`../generated/locales/${locale}.js`);
  },
});
 
export const setLocaleLang = async (lang) => {
  sessionStorage.setItem(LANGUAGE_KEY, lang);
  await setLocale(lang);
};

export const getLocaleLang = () => {
  if (typeof (Storage) !== 'undefined') {
    if (sessionStorage.getItem(LANGUAGE_KEY) === null) {
      sessionStorage.setItem(LANGUAGE_KEY, 'id');
    }

    let locale = sessionStorage.getItem(LANGUAGE_KEY);
    return locale;
  }

  return 'id';
}
 
export const localeNames = {
  en: 'Inggris',
  id: 'Indonesia',
};