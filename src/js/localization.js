import { configureLocalization } from '@lit/localize';
import { sourceLocale, targetLocales } from '../generated/locale-codes';
 
export const { getLocale, setLocale } = configureLocalization({
  sourceLocale,
  targetLocales,
  async loadLocale(locale) {
    return import(`../generated/locales/${locale}.js`);
  },
});
 
export const setLocaleLang = async (lang) => {
  const locale = lang;
 
  console.log('setLocaleFromUrl', locale);
  console.log('getLocale', getLocale());
  await setLocale(locale);
};
 
export const localeNames = {
  en: 'Inggris',
  id: 'Indonesia',
};