// components/LanguageSwitcher.tsx
'use client';
import { STORAGES } from '@/constants/storages';
import { setCookie } from '@/utils/cookie';
import { useRouter } from 'next/navigation';

export function LanguageSwitcher() {
  const route = useRouter();

  const switchTo = (locale: string) => {
    // thay params.locale thành locale mới
    setCookie(STORAGES.LANGUAGE, locale);
    route.refresh();
  };

  return (
    <div className="flex gap-3">
      <button 
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-3 rounded text-sm"
        onClick={() => switchTo('vi')}
      >
        VI
      </button>
      <button 
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-3 rounded text-sm"
        onClick={() => switchTo('en')}
      >
        EN
      </button>
    </div>
  );
}
