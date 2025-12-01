import { NotAvailable } from "@/constants/commonConst";
import numeral from "../numeral/config"
import { LANGUAGE_SUPPORT } from "@/constants/languages";

export const FORMAT_NUMBER = {
  normal: '0[,]0',
  decimal: '0[.]0',
} as const;

export const FORMAT_PRICE_NUMBER = {
    [LANGUAGE_SUPPORT.en]: '$0,0[.]00',
    [LANGUAGE_SUPPORT.ko]: '$0,0',
    [LANGUAGE_SUPPORT.vi]: '0,0 $',
  } as const;

export const priceFormat = (
  number: unknown,
  language: LANGUAGE_SUPPORT = LANGUAGE_SUPPORT.vi
): string | undefined => {
  if (number == null) return; // kiểm tra nếu number truyền vào là null hoặc undefined
  numeral.locale(language);
  return numeral(number).format(FORMAT_PRICE_NUMBER[language]);
};

export const formatNumber = (number: unknown, format: string = FORMAT_NUMBER.normal): string => {
  if (number == null) return NotAvailable; // kiểm tra nếu number truyền vào là null hoặc undefined
  return numeral(number).format(format);
};
