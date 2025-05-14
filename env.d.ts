// env.d.ts
declare namespace NodeJS {
    interface ProcessEnv {
      /** Ví dụ tên biến client‐side */
      NEXT_PUBLIC_API_URL: string
      NEXT_PUBLIC_KEY_SECRET: string
      NEXT_PUBLIC_APP_NAME: string
      /** Ví dụ secret chỉ server‐side */
    //   API_SECRET_KEY: string
      /** Thêm các biến khác ở đây… */
    //   NODE_ENV: 'development' | 'production' | 'test'
    }
  }
  