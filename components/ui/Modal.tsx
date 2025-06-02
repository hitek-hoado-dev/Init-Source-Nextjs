import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import WrapperModalWithLogo from './WrapperModalWithLogo';

interface ModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: React.ReactNode;
  content?: React.ReactNode;
  actionText?: string;
  cancelText?: string;
  onAction?: () => void;
  children?: React.ReactNode;
  footer?: boolean;
  closeOnOutsideClick?: boolean; // New prop to control outside click behavior
}

const Modal: React.FC<ModalProps> = ({
  open,
  onOpenChange,
  title,
  description,
  content,
  actionText = 'Confirm',
  cancelText = 'Cancel',
  onAction,
  children,
  footer = false,
  closeOnOutsideClick = true // Default to true
}) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/30 z-40" />
        <Dialog.Content 
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md border-[3px] border-white bg-modalBackground shadow-[0px_15px_30px_0px_rgba(0,0,0,0.50)] rounded-[10px] p-[25px] pt-[55px]"
          onOpenAutoFocus={(event) => {
              // Prevents focus on the dialog content when opened
              event.preventDefault();
            }
          }
          onPointerDownOutside={(event) => {
            if (!closeOnOutsideClick) {
              event.preventDefault();
            }
          }}
        >
            <WrapperModalWithLogo>
                <Dialog.Title className="text-white text-[25px] font-aoboshiOne text-center tracking-[1.25px] uppercase">
                    {title}
                </Dialog.Title>
                
                {description && (
                    <Dialog.Description className="mt-2 text-sm text-gray-500">
                        {description}
                    </Dialog.Description>
                )}
                
                {content && <div className='mt-3'>{content}</div>}
                {children && <div className="mt-4">{children}</div>}
                
                {footer && (
                  <div className="mt-6 flex justify-end gap-3">
                      <Dialog.Close asChild>
                      <button className="px-4 py-2 text-sm font-medium rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500">
                          {cancelText}
                      </button>
                      </Dialog.Close>
                      
                      <button 
                          className="px-4 py-2 text-sm font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                          onClick={() => {
                            if (onAction) onAction();
                            onOpenChange(false);
                          }}
                      >
                          {actionText}
                      </button>
                  </div>
                )}
            </WrapperModalWithLogo>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default Modal