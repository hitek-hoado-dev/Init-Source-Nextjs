import { STORAGES } from '@/constants/storages';
import { decrypted } from '@/utils/cookie';
import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';
 
export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const cookieStore = await cookies()
  const localeRaw = cookieStore.get(STORAGES.LANGUAGE)?.value;
  const locale = (localeRaw ? decrypted(localeRaw) : "en") ?? "en"
 
  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});