import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { ComponentPropsWithoutRef } from 'react';
import Image from 'next/image';

interface AvatarProps extends ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
  imageProps?: Omit<ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>, 'src' | 'alt'>;
  fallbackProps?: ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>;
}

const sizeClasses = {
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-12 h-12',
};

export const Avatar = ({ 
  src, 
  alt = "User Avatar",
  size = 'md',
  className = "",
  imageProps,
  fallbackProps,
  ...rootProps
}: AvatarProps) => {
  const sizeClass = sizeClasses[size];

  return (
    <AvatarPrimitive.Root className={className} {...rootProps}>
      <AvatarPrimitive.Image 
        src={src || "/avatar-fallback.png"}
        alt={alt}
        className={`${sizeClass} rounded-full ${imageProps?.className || ""}`}
        {...imageProps}
      />
      <AvatarPrimitive.Fallback 
        className={`${sizeClass} flex items-center justify-center bg-gray-200 text-gray-500 rounded-full ${fallbackProps?.className || ""}`}
        {...fallbackProps}
      >
        {fallbackProps?.children || <Image src={"/avatar-fallback.png"} alt='User Avatar' width={40} height={40} />}
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  );
};
