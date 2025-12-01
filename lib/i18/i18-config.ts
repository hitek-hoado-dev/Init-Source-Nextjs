// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './languages/en';
import { getCookie } from '../utils/cookie';
import { STORAGES } from '@/constants/storages';

const language = getCookie(STORAGES.LANGUAGE);

const resources = {
  en: {
    translation: enTranslations,
  },
//   ko: {
//     translation: koTranslations,
//   },
//   vi: {
//     translation: ViTranslation,  
//   },
};

// Nếu dùng LanguageDetector, bạn có thể thêm như sau:
// i18n.use(LanguageDetector)

i18n
  .use(initReactI18next) // truyền i18n instance xuống react-i18next
  .init({
    resources,
    lng: language, // ngôn ngữ mặc định
    fallbackLng: 'en', // ngôn ngữ dự phòng nếu key không có trong ngôn ngữ hiện tại
    interpolation: {
      escapeValue: false, // React đã có bảo mật nên không cần escape
    },
  });

export default i18n;
