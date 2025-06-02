import React, { forwardRef, InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  // Add at least one property to avoid the error
  customProp?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={cn(
          "w-full py-[5px] border-b border-white text-white text-center text-[25px] tracking-[1.25px] font-libreBaskerville placeholder:text-textSecondary placeholder:italic placeholder:text-[25px] placeholder:tracking-[1.25px] placeholder:text-center placeholder:font-libreBaskerville focus:outline-none",
          className
        )}
        ref={ref}
        {...props}
      />);
  }
);Input.displayName = 'Input';

export default Input;
