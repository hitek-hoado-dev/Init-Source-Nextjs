import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import crypto from "crypto-js";

const secretKey = process.env.NEXT_PUBLIC_COOKIE_KEY_SECRET ?? "SECRET_KET";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const encrypt = (data = '') => {
  try {
    const encryptedData = crypto.AES.encrypt(data, secretKey).toString();
    return encryptedData;
  } catch (error) {
    console.error(error);
    return '';
  }
};

export const decrypted = (data = '') => {
  try {
    const decrypt = crypto.AES.decrypt(data, secretKey);
    const decryptedData = JSON.parse(decrypt.toString(crypto.enc.Utf8));
    return decryptedData;
  } catch (error) {
    console.error(error);
    return '';
  }
};

const getCookieWithKey = (name: string) => {
    const matches = document.cookie.match(
      new RegExp(`(?:^|; )${encodeURIComponent(name)}=([^;]*)`),
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
};

export const getCookie = (key: string) => {
    const oldValue = getCookieWithKey(key);
    if (oldValue) {
      const decryptedData = decrypted(oldValue);
      // if (key) {
      //   return decryptedData?.[key];
      // }
      return decryptedData;
    }
    return undefined;
};

export const replaceCookie = (key: string, values: object) => {
    if (values) {
      const jsonString = JSON.stringify(values);
      const encrypted = encrypt(jsonString) || '';
  
      const updatedCookie = `${encodeURIComponent(key)}=${encodeURIComponent(encrypted)};`;
      document.cookie = updatedCookie;
    }
};

export const setCookie = (key: string, value: object | string | number) => {
    const jsonString = JSON.stringify(value);
    const encrypted = encrypt(jsonString) || '';
    const updatedCookie = `${encodeURIComponent(key)}=${encodeURIComponent(encrypted)};path=/;`;
    document.cookie = updatedCookie;
};
  
export const clearCookie = (key: string) => {
    document.cookie = `${key}="";Max-Age=0;path=/;`;
};
  