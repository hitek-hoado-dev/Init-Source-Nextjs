import { SearchOutlined } from '@ant-design/icons';
import { ConfigProvider, Input } from 'antd';
import { InputProps, InputRef, TextAreaProps } from 'antd/es/input';
import React, { forwardRef } from 'react';

/**
 * Trường hợp dùng <Input /> (không có TextArea):
 *   isTextArea = false (hoặc không truyền),
 *   và props còn lại phải hợp lệ với InputProps
 */
interface InputModeProps extends InputProps {
  isSearch?: boolean;
  isTextArea?: false;
}

/**
 * Trường hợp dùng <Input.TextArea />:
 *   isTextArea = true,
 *   và props còn lại phải hợp lệ với TextAreaProps
 */
interface TextAreaModeProps extends TextAreaProps {
  isTextArea: true;
}


/** Kết hợp hai trường hợp trên thành one-of (discriminated union) */
type CustomInputProps = InputModeProps | TextAreaModeProps;

const CustomInput = forwardRef<InputRef, CustomInputProps>((props, ref) => {
  // Nếu isTextArea = true, TS tự hiểu props là TextAreaModeProps
  if (props.isTextArea) {
    const {
      placeholder,
      maxLength = 1500,
      showCount = true,
      rows = 7,
      // các props còn lại thuộc TextAreaProps
      ...restTextAreaProps
    } = props as TextAreaModeProps;

    return (
      <Input.TextArea
        {...restTextAreaProps} // đúng type AntdTextAreaProps
        placeholder={placeholder}
        maxLength={maxLength}
        showCount={showCount}
        size="large"
        rows={rows}
        ref={ref}
      />
    );
  }
  // Nếu isTextArea không truyền hoặc false, TS hiểu props là InputModeProps
  const {
    placeholder,
    maxLength = 200,
    showCount = false,
    type = 'text',
    isSearch = false,
    // các props còn lại thuộc InputProps
    ...restInputProps
  } = props as InputModeProps;

  if (isSearch) {
    return (
      <ConfigProvider
        theme={{
          token: {
            controlHeightLG: 56,
            borderRadiusLG: 8,
            fontSizeLG: 15,
          },
        }}
      >
        <div className="bg-white rounded-xl">
          <Input
            {...restInputProps} // đúng type AntdInputProps
            placeholder={placeholder}
            type={type}
            size="large"
            allowClear
            prefix={<SearchOutlined />}
          />
        </div>
      </ConfigProvider>
    );
  }

  return (
    <ConfigProvider
      theme={{
        token: {
          controlHeightLG: 56,
          borderRadiusLG: 8,
          fontSizeLG: 15,
        },  
      }}
    >
      <Input
        {...restInputProps} // đúng type AntdInputProps
        placeholder={placeholder}
        type={type}
        maxLength={maxLength}
        showCount={showCount}
        size="large"
        ref={ref}
      />
    </ConfigProvider>
  );
});

CustomInput.displayName = 'CustomInput';

const CustomInputPassword = React.forwardRef<HTMLInputElement, InputProps>((props) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          controlHeightLG: 56,
          borderRadiusLG: 8,
          fontSizeLG: 15,
        },  
      }}
    >
      <Input.Password
        {...props}
        size="large"
      />
    </ConfigProvider>
  );
});
CustomInputPassword.displayName = 'CustomInputPassword';

export default CustomInput;
export { CustomInputPassword };
