import { DownOutlined } from '@ant-design/icons';
import { Form, FormItemProps, InputRef } from 'antd';
import React, { useEffect, useMemo, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import {
  CountrySelector,
  defaultCountries,
  parseCountry,
  usePhoneInput,
} from 'react-international-phone';
import 'react-international-phone/style.css';
import { cn } from '../../constants/commonConst';
import CustomInput from './CustomInput';
import { getKey } from '@/types/I18KeyType';
import { isPhoneValid } from '@/lib/utils/phoneUtils';

interface AntPhoneProps {
  value?: string;
  onChange?: (phone: string) => void;
  disabled?: boolean;
}

const WHITELIST = ['vn', 'kr', 'us'];

// Helper function to get country flag emoji
const getCountryFlag = (countryCode: string): string => {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map((char) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
};

const CustomPhoneInput: React.FC<AntPhoneProps> = ({
  value,
  onChange,
  disabled,
}) => {
  const { t } = useTranslation();
  // ✅ Chuẩn hóa thành CountryData[]
  const countries = useMemo(
    () =>
      defaultCountries.filter((country) => {
        const { iso2 } = parseCountry(country);
        return WHITELIST.includes(iso2);
      }),
    []
  );
  const phoneInput = usePhoneInput({
    defaultCountry: 'vn',
    value: value || '',
    countries: countries,
    // disableDialCodePrefill: true, // không điền mã vùng mặc định từ đầu
    onChange: (data) => {
      onChange?.(data.phone);
    },
  });

  const inputRef = useRef<InputRef | null>(null);

  // Need to reassign inputRef because antd provides not default ref
  useEffect(() => {
    if (phoneInput.inputRef && inputRef.current?.input) {
      phoneInput.inputRef.current = inputRef.current.input;
    }
  }, [inputRef, phoneInput.inputRef]);

  return (
    <div className="flex items-center">
      <CountrySelector
        selectedCountry={phoneInput.country.iso2}
        onSelect={(country) => phoneInput.setCountry(country.iso2)}
        countries={countries}
        className="h-9 flex items-center justify-start antd-select-style"
        renderButtonWrapper={({ rootProps }) => (
          <button
            {...rootProps}
            type="button"
            className={cn(
              'h-[38px] w-[140px] rounded-xl px-3 mr-3 flex items-center justify-between border border-border hover:border-blue-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 cursor-pointer bg-white transition-colors duration-200',
              disabled && 'custom-phone-input-disabled'
            )}
          >
            <div className="flex items-center gap-2">
              <span className="text-lg">
                {getCountryFlag(phoneInput.country.iso2)}
              </span>
              <span className="text-sm font-medium text-gray-700">
                + {phoneInput.country.dialCode}
              </span>
            </div>
            <DownOutlined className="text-xs text-gray-400 transition-transform duration-200" />
          </button>
        )}
      />
      <CustomInput
        placeholder={t(getKey('phone_number'))}
        type="tel"
        value={phoneInput.inputValue}
        onChange={phoneInput.handlePhoneValueChange}
        ref={inputRef}
        name="phone"
        autoComplete="tel"
        size="large"
        disabled={disabled}
      />
    </div>
  );
};

type PhoneFormItemProps = FormItemProps & {
  disabled?: boolean;
};

export const PhoneFormItem = ({
  rules,
  disabled,
  ...itemProps
}: PhoneFormItemProps) => {
  const { t } = useTranslation();
  return (
    <Form.Item
      name={'phone'}
      label={t(getKey('phone_number'))}
      rules={[
        { required: true },
        {
          validateTrigger: ['onChange', 'onBlur'], // onChange hoặc onBlur thì không validate khi chỉ có mã vùng
          validator: (_, v) => {
            if (!v) return Promise.resolve();
            if (v?.length < 4) return Promise.resolve();
            if (isPhoneValid(v)) {
              return Promise.resolve();
            }
            return Promise.reject(new Error(t(getKey('phone_invalid'))));
          },
        },
        {
          validateTrigger: ['onSubmit'], // onSubmit thì validate luôn
          validator: (_, v) => {
            if (!v) return Promise.resolve();
            if (isPhoneValid(v)) {
              return Promise.resolve();
            }
            return Promise.reject(new Error(t(getKey('phone_invalid'))));
          },
        },
        ...(rules || []), // merge rules ở ngoài truyền vào
      ]}
      {...itemProps} // ghi đè props ở ngoài truyền vào nếu có (như required, initialValue,...)
    >
      <CustomPhoneInput disabled={disabled} />
    </Form.Item>
  );
};
