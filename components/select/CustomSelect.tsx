import { ConfigProvider, Select, SelectProps } from 'antd';

const CustomSelect = ({
  placeholder,
  options,
  className,
  allowClear = true,
  variant = 'borderless',
  labelInValue = true,
  ...props
}: SelectProps) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          controlHeightLG: 38,
          borderRadiusLG: 12,
          fontSizeLG: 14,
          paddingContentHorizontalLG: 12,
          paddingContentVerticalLG: 8,
        },
      }}
    >
      <div className="bg-white rounded-xl w-full">
        <Select
          placeholder={placeholder}
          options={options}
          className={className}
          allowClear={allowClear}
          {...props}
          variant={variant}
          size="large"
          labelInValue={labelInValue}
        />
      </div>
    </ConfigProvider>
  );
};

export default CustomSelect;
