import { ConfigProvider } from 'antd';
import { Locale } from 'antd/es/locale';
import enUS from 'antd/es/locale/en_US';
import viVN from 'antd/es/locale/vi_VN';
import { FC, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

// Định nghĩa đối tượng ánh xạ giữa mã ngôn ngữ và đối tượng locale của antd
const localeMappings: { [key: string]: Locale } = {
  en: enUS,
  vi: viVN,
};

interface LocaleProviderProps {
  children: ReactNode;
}

const LocaleProvider: FC<LocaleProviderProps> = ({ children }) => {
  // Nếu sử dụng global state, có thể lấy trực tiếp từ hook useLanguage
  const { i18n } = useTranslation();

  const locale = localeMappings[i18n.language] || enUS;
  // // Chọn locale dựa trên language hiện tại (có thể là từ context hoặc cookie)

  return <ConfigProvider locale={locale}>{children}</ConfigProvider>;
};

export default LocaleProvider;
