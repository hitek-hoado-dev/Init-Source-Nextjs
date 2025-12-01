import enUS from 'antd/es/locale/en_US';
import koKO from 'antd/es/locale/ko_KR';
import viVN from 'antd/es/locale/vi_VN';
import { DefaultOptionType } from 'antd/es/select';

export enum LANGUAGE_SUPPORT {
  en = 'en',
  ko = 'ko',
  vi = 'vi',
}

export const languageOptions: DefaultOptionType[] = [
  {
    label: (
      <div className="flex items-center gap-2">
        <img
          src="/images/flag-english.png"
          alt="English"
          className="w-4 h-3 object-cover"
        />
        <span className="flex-1">EN</span>
      </div>
    ),
    flagLabel: (
      <div className="flex items-center justify-center">
        <img
          src="/images/flag-english.png"
          alt="English"
          className="w-4 h-3 object-cover"
        />
      </div>
    ),
    value: LANGUAGE_SUPPORT.en,
  },
  {
    label: (
      <div className="flex items-center gap-2">
        <img
          src="/images/flag-korea.png"
          alt="Korea"
          className="w-4 h-3 object-cover"
        />
        <span className="flex-1">KR</span>
      </div>
    ),
    flagLabel: (
      <div className="flex justify-center items-center">
        <img
          src="/images/flag-korea.png"
          alt="Korea"
          className="w-4 h-3 object-cover"
        />
      </div>
    ),
    value: LANGUAGE_SUPPORT.ko,
  },
  {
    label: (
      <div className="flex items-center gap-2">
        <img
          src="/images/flag-vietnam.png"
          alt="Vietnamese"
          className="w-4 h-3 object-cover"
        />
        <span className="flex-1">VI</span>
      </div>
    ),
    flagLabel: (
      <div className="flex items-center justify-center">
        <img
          src="/images/flag-vietnam.png"
          alt="Vietnamese"
          className="w-4 h-3 object-cover"
        />
      </div>
    ),
    value: LANGUAGE_SUPPORT.vi,
  },
];

export const localeMappings: { [key: string]: unknown } = {
  [LANGUAGE_SUPPORT.en]: enUS,
  [LANGUAGE_SUPPORT.ko]: koKO,
  [LANGUAGE_SUPPORT.vi]: viVN,
};

export const languagesSupport = [
  { key: LANGUAGE_SUPPORT.en, label: 'English' },
  { key: LANGUAGE_SUPPORT.ko, label: 'Korean' },
  { key: LANGUAGE_SUPPORT.vi, label: 'Vietnamese' },
];
