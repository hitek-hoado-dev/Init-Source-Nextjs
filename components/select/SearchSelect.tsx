import { BaseListParams, TObjectListResponse } from '@/types/generalType';
import { UseQueryResult } from '@tanstack/react-query';
import { Empty, Select, SelectProps, Spin } from 'antd';
import { AxiosError } from 'axios';
import { PropertyPath, debounce, get } from 'lodash';
import { useMemo, useState } from 'react';
import { initSearchParams } from '../../constants/commonConst';
import CustomSelect from './CustomSelect';

interface SearchSelectProps<T = unknown> extends Omit<SelectProps, 'fieldNames'> {
  useQueryHook: (
    params: BaseListParams
  ) => UseQueryResult<TObjectListResponse<T>['results']['objects'], AxiosError>;
  paramsQuery?: BaseListParams;
  value?: unknown;
  onChange?: (value: unknown) => void;
  enabled?: boolean;
  customOptions?: (item: T) => React.ReactNode;
  fieldNames?: {
    label: PropertyPath
    value: PropertyPath
  }
}

export const SearchSelect = <T = unknown>({
  useQueryHook,
  paramsQuery = initSearchParams,
  value,
  onChange,
  enabled = true,
  customOptions,
  ...props
}: SearchSelectProps<T>) => {
  const [params, setParams] = useState({
    ...paramsQuery,
    enabled,
  });
  const { fieldNames, style } = props;
  const { data, isLoading } = useQueryHook(params);

  const loadOptions = (keyword: string | undefined) => {
    setParams((prev) => ({
      ...prev,
      keyword,
    }));
  };

  const debounceFetcher = useMemo(() => debounce(loadOptions, 800), []);

  // Default customOptions nếu không được truyền
  const defaultCustomOptions = (item: T) => {
    if (fieldNames) {
      const label = get(item, fieldNames?.label ?? 'label');
      return <span>{label}</span>;
    }
    return <span>{String(item)}</span>;
  };

  const renderCustomOptions = customOptions || defaultCustomOptions;
  return (
    <CustomSelect
      variant="outlined"
      loading={isLoading}
      style={style ?? { width: '100%', height: 'auto', minHeight: '38px' }}
      filterOption={false}
      onSearch={debounceFetcher}
      showSearch
      labelInValue={true}
      notFoundContent={isLoading ? <Spin size="small" /> : <Empty />}
      onClear={() => loadOptions('')}
      value={value}
      onChange={(value) => {
        if(Array.isArray(value)) {
          onChange?.(value.map(item => ({ value: item.value, label: item.title })))
        } 
        else {
          onChange?.({
            value: value.value,
            label: value.title,
          })
        }
      }}
      {...props}
      fieldNames={undefined} // để tránh lỗi vì không xài options
    >
      {data?.rows?.map((item: T, index: number) => (
        <Select.Option
          key={index}
          value={get(item, fieldNames?.value ?? 'id')}
          title={
            get(item, fieldNames?.label ?? 'label')
          }
        >
          {renderCustomOptions(item)}
        </Select.Option>
      ))}
    </CustomSelect>
  );
};
