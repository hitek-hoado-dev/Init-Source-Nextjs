export interface I18nKey {
    config_success_message: string;
    config_error_message: string;
    all: string;
    phone_number: string;
    phone_invalid: string;
}
  
  export function getKey(key: keyof I18nKey): string {
    return key;
  }
  