import clsx, { ClassValue } from 'clsx';
import i18n from 'i18next';
import { twMerge } from 'tailwind-merge';
import { BaseOptionType } from 'antd/es/select';
import { BaseListParams } from '@/types/generalType';
import { getKey } from '@/types/I18KeyType';


export const NUMBER_FORMAT = '0,0[.]0';
export const DATE_FORMAT = 'YYYY-MM-DD';
export const TIME_FORMAT = 'HH:mm';
export const DATE_TIME_FORMAT = 'DD/MM/YYYY, h:mm A';

export const DEFAULT_PASSWORD = 'Recruit@2025';

export const initSearchParams: BaseListParams = {
  page: 1,
  limit: 10,
};

export const NotAvailable = '-';

export function getMessage(
  key: string,
  params?: Record<string, string>
): string {
  return i18n.t(key, params);
}
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const findOptionObject = (
  arr: BaseOptionType[],
  value: string | undefined
) => {
  if (!value) return;
  return arr.find((item) => item.value === value);
};

export const configSuccess = () => {
  return {
    message: getMessage(getKey('config_success_message')),
    // description: getMessage(getKey.ConfigSuccessDes),
  };
};

export const configErr = () => {
  return {
    message: getMessage(getKey('config_error_message')),
    // description: getMessage(getKey.ConfigErrorDes),
  };
};

export const AllOption = (field?: string) => ({
  label: getMessage(getKey('all'), { field: field || '' }),
  value: null,
});

