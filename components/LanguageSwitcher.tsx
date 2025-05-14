// components/LanguageSwitcher.tsx
'use client';
import { STORAGES } from '@/constants/storages';
import { setCookie } from '@/utils/cookie';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';

export function LanguageSwitcher() {

    const route = useRouter()

  const switchTo = (locale: string) => {
    // thay params.locale thành locale mới
    setCookie(STORAGES.LANGUAGE, locale)
    route.refresh()
  };

  return (
    <div className='flex gap-3'>
      <Button variant='contained' color='secondary' onClick={() => switchTo('vi')}>VI</Button>
      <Button variant='contained' color='secondary' onClick={() => switchTo('en')}>EN</Button>
    </div>
  );
}
