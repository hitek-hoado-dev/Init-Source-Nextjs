# Init Next.js Project

Dự án này là bộ khởi tạo (boilerplate) cho ứng dụng Next.js 15, tích hợp sẵn các thư viện phổ biến và cấu trúc thư mục rõ ràng, dễ mở rộng. Dự án sử dụng App Router của Next.js với TypeScript, hỗ trợ đa ngôn ngữ, authentication, và các tính năng hiện đại.

## 📋 Mục lục

- [Tính năng chính](#-tính-năng-chính)
- [Công nghệ sử dụng](#-công-nghệ-sử-dụng)
- [Yêu cầu hệ thống](#-yêu-cầu-hệ-thống)
- [Bắt đầu](#-bắt-đầu)
- [Cấu trúc thư mục](#-cấu-trúc-thư-mục)
- [Cấu hình môi trường](#-cấu-hình-môi-trường)
- [Authentication & Authorization](#-authentication--authorization)
- [Routing](#-routing)
- [Internationalization (i18n)](#-internationalization-i18n)
- [API Integration](#-api-integration)
- [Styling](#-styling)
- [Development](#-development)
- [Build & Deploy](#-build--deploy)
- [Troubleshooting](#-troubleshooting)

---

## ✨ Tính năng chính

- ✅ **Next.js 15** với App Router và Server Components
- ✅ **TypeScript** - Type-safe development
- ✅ **Authentication** - Hệ thống đăng nhập/đăng ký với cookie-based auth
- ✅ **Internationalization (i18n)** - Hỗ trợ đa ngôn ngữ với react-i18next
- ✅ **UI Components** - Ant Design (Antd) với theme tùy chỉnh
- ✅ **State Management** - React Query cho server state, Global State cho client state
- ✅ **HTTP Client** - Axios với interceptors và error handling
- ✅ **Styling** - TailwindCSS 4 với PostCSS
- ✅ **Form Handling** - Custom input components với validation
- ✅ **Phone Number Input** - Hỗ trợ nhập số điện thoại quốc tế
- ✅ **Font Optimization** - Pretendard font family
- ✅ **Lottie Animations** - Hỗ trợ animations từ JSON files

---

## 🛠️ Công nghệ sử dụng

### Core Framework
- **Next.js** `15.3.1` - React framework với SSR/SSG
- **React** `19.0.0` - UI library
- **TypeScript** `^5` - Type safety

### UI & Styling
- **Ant Design (Antd)** `^6.0.0` - UI component library
- **TailwindCSS** `^4.1.8` - Utility-first CSS framework
- **PostCSS** `^8.5.4` - CSS processing

### Data Fetching & State
- **@tanstack/react-query** `^5.90.11` - Server state management
- **Axios** `^1.8.4` - HTTP client

### Internationalization
- **i18next** `^25.6.3` - i18n framework
- **react-i18next** `^16.3.5` - React bindings cho i18next

### Utilities
- **crypto-js** `^4.2.0` - Mã hóa dữ liệu (cookie encryption)
- **dayjs** `^1.11.19` - Date manipulation
- **numeral** `^2.0.6` - Number formatting
- **lodash** `^4.17.21` - Utility functions
- **clsx** `^2.1.1` - Conditional className utility
- **tailwind-merge** `^3.3.0` - Merge Tailwind classes

### Form & Input
- **react-phone-number-input** `^3.4.14` - Phone number input
- **react-international-phone** `^4.6.1` - International phone input
- **google-libphonenumber** `^3.2.43` - Phone number validation

### Other
- **swiper** `^12.0.3` - Touch slider
- **react-countup** `^6.5.3` - Number animation

### Development Tools
- **ESLint** `^9` - Code linting
- **@svgr/webpack** `^8.1.0` - SVG as React components

---

## 💻 Yêu cầu hệ thống

- **Node.js** >= 18.x
- **Yarn** >= 1.22 (hoặc npm >= 9.x)
- **Git** để clone repository

---

## 🚀 Bắt đầu

### 1. Clone repository

```bash
git clone <repo-url>
cd "Init Source Odi"
```

### 2. Cài đặt dependencies

```bash
yarn install
# hoặc
npm install
```

### 3. Cấu hình môi trường

Tạo file `.env.local` trong thư mục gốc:

```env
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_KEY_SECRET=your_secret_key_for_encryption
NEXT_PUBLIC_APP_NAME=Init Nextjs
```

### 4. Chạy development server

```bash
yarn dev
# hoặc
npm run dev
```

Truy cập [http://localhost:3000](http://localhost:3000)

### 5. Build cho production

```bash
yarn build
yarn start
```

---

## 🗂️ Cấu trúc thư mục

```
Init Source Odi/
├── api/                          # API functions
│   ├── authApi.ts               # Authentication API
│   └── axiosInstance.ts         # Axios instance configuration
│
├── app/                          # Next.js App Router
│   ├── (auth)/                  # Auth route group
│   │   ├── _components/         # Auth-specific components
│   │   │   ├── AuthHeader.tsx
│   │   │   ├── DataCards.tsx
│   │   │   ├── FeatureSection.tsx
│   │   │   └── HeroSection.tsx
│   │   ├── layout.tsx           # Auth layout
│   │   ├── login/
│   │   │   └── page.tsx         # Login page
│   │   └── signup/
│   │       └── page.tsx         # Signup page
│   │
│   ├── (public)/                # Public route group (yêu cầu auth)
│   │   ├── layout.tsx           # Public layout
│   │   ├── page.tsx             # Homepage
│   │   ├── journal/
│   │   │   └── page.tsx         # Journal page
│   │   ├── settings/
│   │   │   └── page.tsx         # Settings page
│   │   └── users/
│   │       └── page.tsx         # Users page
│   │
│   ├── layout.tsx               # Root layout
│   ├── globals.css              # Global styles
│   └── favicon.ico
│
├── components/                   # Reusable components
│   ├── general/                 # General components
│   │   ├── GeneralLoading.tsx
│   │   └── LanguageSwitcher.tsx
│   ├── input/                   # Input components
│   │   ├── CustomInput.tsx
│   │   └── CustomPhoneInput.tsx
│   └── select/                  # Select components
│       ├── CustomSelect.tsx
│       └── SearchSelect.tsx
│
├── constants/                    # Constants & configurations
│   ├── colors.ts                # Color constants
│   ├── commonConst.ts           # Common constants
│   ├── languages.tsx            # Language definitions
│   ├── permission.ts            # Permission constants
│   ├── queryKey.ts              # React Query keys
│   ├── routes.ts                # Route definitions
│   └── storages.ts              # Storage keys
│
├── hooks/                       # Custom React hooks
│   ├── useAuth.ts               # Authentication hook
│   ├── useGlobalState.tsx       # Global state management
│   └── useOtpCooldown.ts        # OTP cooldown hook
│
├── lib/                         # Library configurations
│   ├── antd/                    # Ant Design config
│   │   ├── LocaleProvider.tsx
│   │   └── themeConfig.ts       # Antd theme
│   ├── axios/                   # Axios config
│   │   └── axios-config.ts      # Axios interceptors
│   ├── i18/                     # i18n configuration
│   │   ├── i18-config.ts        # i18next config
│   │   └── languages/           # Translation files
│   │       └── en.ts            # English translations
│   ├── numeral/                 # Numeral config
│   │   └── config.ts
│   ├── react-query/             # React Query config
│   │   └── provider.tsx         # QueryClient provider
│   └── utils/                   # Utility functions
│       ├── cookie.ts            # Cookie helpers
│       ├── fileDownload.ts      # File download utils
│       ├── numberUtils.ts       # Number utilities
│       ├── phoneUtils.ts        # Phone number utils
│       └── stringUtils.ts       # String utilities
│
├── public/                      # Static assets
│   ├── animations/              # Lottie JSON files
│   │   ├── 403.json
│   │   ├── 404.json
│   │   └── loading.json
│   ├── fonts/                   # Custom fonts (Pretendard)
│   ├── icons/                   # SVG icons
│   └── images/                  # Images
│
├── types/                       # TypeScript type definitions
│   ├── generalType.ts           # General types
│   ├── I18KeyType.ts           # i18n key types
│   └── userType.ts              # User-related types
│
├── middleware.ts                # Next.js middleware (auth check)
├── next.config.ts               # Next.js configuration
├── tsconfig.json                # TypeScript configuration
├── postcss.config.mjs           # PostCSS configuration
├── eslint.config.mjs            # ESLint configuration
├── package.json                 # Dependencies
└── README.md                    # Documentation
```

---

## ⚙️ Cấu hình môi trường

Tạo file `.env.local` trong thư mục gốc với các biến sau:

```env
# API Configuration
NEXT_PUBLIC_API_URL=https://api.example.com

# Security
NEXT_PUBLIC_KEY_SECRET=your_secret_key_for_cookie_encryption

# App Information
NEXT_PUBLIC_APP_NAME=Init Nextjs
```

### Giải thích các biến:

- `NEXT_PUBLIC_API_URL`: URL của backend API
- `NEXT_PUBLIC_KEY_SECRET`: Secret key để mã hóa cookie (sử dụng crypto-js)
- `NEXT_PUBLIC_APP_NAME`: Tên ứng dụng

**Lưu ý**: Tất cả biến môi trường phải có prefix `NEXT_PUBLIC_` để có thể truy cập từ client-side.

---

## 🔐 Authentication & Authorization

### Cơ chế Authentication

Dự án sử dụng **cookie-based authentication** với các đặc điểm:

1. **Access Token**: Lưu trong cookie, được mã hóa bằng `crypto-js`
2. **Refresh Token**: Hỗ trợ refresh token để gia hạn access token
3. **Middleware Protection**: Tự động kiểm tra token và redirect nếu chưa đăng nhập

### Flow Authentication

```
1. User đăng nhập → API trả về access token + refresh token
2. Token được lưu vào cookie (mã hóa)
3. Middleware kiểm tra token ở mỗi request
4. Nếu token hết hạn → gọi refresh token API
5. Nếu không có token → redirect về /login
```

### Middleware Logic

File `middleware.ts` xử lý:

- **Public paths** (`/login`, `/signup`): Cho phép truy cập khi chưa đăng nhập
- **Protected paths**: Yêu cầu token, redirect về `/login` nếu thiếu
- **Auto redirect**: Nếu đã đăng nhập, redirect khỏi public paths về homepage

### Storage Keys

Các key được định nghĩa trong `constants/storages.ts`:

- `ACCESS_TOKEN`: Access token
- `REFRESH_TOKEN`: Refresh token
- `USER_LOGIN`: Thông tin user đã đăng nhập
- `LANGUAGE`: Ngôn ngữ hiện tại

### Sử dụng trong code

```typescript
import { useAuth } from '@/hooks/useAuth';

const { user, login, logout } = useAuth();
```

---

## 🛣️ Routing

Dự án sử dụng **Next.js App Router** với route groups:

### Route Groups

- `(auth)`: Routes cho authentication (login, signup)
- `(public)`: Routes yêu cầu đăng nhập (protected routes)

### Các routes chính

Được định nghĩa trong `constants/routes.ts`:

```typescript
APP_ROUTE = {
  login: "/login",
  signup: "/signup",
  home: "/",
  journal: "/journal",
  settings: "/settings",
  users: "/users",
  // ... các routes khác
}
```

### Public Paths

Các path không yêu cầu authentication:

- `/login`
- `/signup`

Tất cả các routes khác đều yêu cầu authentication.

---

## 🌍 Internationalization (i18n)

Dự án hỗ trợ đa ngôn ngữ với **i18next** và **react-i18next**.

### Cấu hình

File `lib/i18/i18-config.ts` chứa cấu hình i18n:

- **Default language**: `en` (English)
- **Fallback language**: `en`
- **Language storage**: Cookie (`STORAGES.LANGUAGE`)

### Thêm ngôn ngữ mới

1. Tạo file translation trong `lib/i18/languages/`:

```typescript
// lib/i18/languages/vi.ts
export default {
  welcome: "Chào mừng",
  // ...
};
```

2. Import vào `i18-config.ts`:

```typescript
import viTranslations from './languages/vi';

const resources = {
  en: { translation: enTranslations },
  vi: { translation: viTranslations },
};
```

### Sử dụng trong component

```typescript
import { useTranslation } from 'react-i18next';

const { t } = useTranslation();
return <h1>{t('welcome')}</h1>;
```

### Component chuyển đổi ngôn ngữ

Sử dụng `LanguageSwitcher` component:

```typescript
import LanguageSwitcher from '@/components/general/LanguageSwitcher';
```

---

## 🔌 API Integration

### Axios Configuration

File `api/axiosInstance.ts` chứa cấu hình Axios:

- **Base URL**: Từ `NEXT_PUBLIC_API_URL`
- **Interceptors**: 
  - Request: Thêm token vào headers
  - Response: Xử lý lỗi, refresh token tự động

### API Functions

Các API functions được tổ chức trong thư mục `api/`:

```typescript
// api/authApi.ts
export const authApi = {
  signIn: async (body) => { ... },
  signOut: async (body) => { ... },
  refreshToken: async (data) => { ... },
};
```

### Sử dụng với React Query

```typescript
import { useQuery, useMutation } from '@tanstack/react-query';
import { authApi } from '@/api/authApi';

// Query
const { data } = useQuery({
  queryKey: ['user'],
  queryFn: () => authApi.getUser(),
});

// Mutation
const mutation = useMutation({
  mutationFn: authApi.signIn,
});
```

### Query Keys

Định nghĩa trong `constants/queryKey.ts` để quản lý cache keys:

```typescript
export const QUERY_KEY = {
  user: ['user'],
  users: ['users'],
  // ...
};
```

---

## 🎨 Styling

### TailwindCSS

Dự án sử dụng **TailwindCSS 4** với PostCSS:

- Utility-first approach
- Custom configuration trong `postcss.config.mjs`
- Global styles trong `app/globals.css`

### Ant Design Theme

File `lib/antd/themeConfig.ts` chứa cấu hình theme:

- **Primary color**: `#000000`
- **Font family**: `Pretendard, sans-serif`
- **Custom component styles**: Input, Form, etc.

### Custom Fonts

Sử dụng **Pretendard** font family:

- Các font weights: Thin, Light, Regular, Medium, SemiBold, Bold, ExtraBold, Black
- Được load từ `public/fonts/`

### Colors

Định nghĩa trong `constants/colors.ts`:

```typescript
export const COLORS = {
  primary: '#000000',
  gray20: '#...',
  // ...
};
```

---

## 💻 Development

### Scripts

```bash
# Development server (với Turbopack)
yarn dev

# Build production
yarn build

# Start production server
yarn start

# Lint code
yarn lint
```

### Code Style

- **ESLint**: Cấu hình trong `eslint.config.mjs`
- **TypeScript**: Strict mode enabled
- **Path aliases**: Sử dụng `@/*` thay vì relative paths

### Best Practices

1. **Component Organization**: 
   - Reusable components trong `components/`
   - Page-specific components trong `app/[route]/_components/`

2. **Type Safety**:
   - Định nghĩa types trong `types/`
   - Sử dụng TypeScript strict mode

3. **State Management**:
   - Server state: React Query
   - Client state: Global State Provider hoặc local state

4. **API Calls**:
   - Tổ chức trong `api/`
   - Sử dụng React Query hooks

---

## 🚀 Build & Deploy

### Build cho Production

```bash
yarn build
```

Output sẽ được tạo trong thư mục `.next/`.

### Kiểm tra Production Build

```bash
yarn build
yarn start
```

### Environment Variables cho Production

Đảm bảo set các biến môi trường trên hosting platform:

- `NEXT_PUBLIC_API_URL`
- `NEXT_PUBLIC_KEY_SECRET`
- `NEXT_PUBLIC_APP_NAME`

### Deployment Platforms

Dự án có thể deploy trên:

- **Vercel** (recommended cho Next.js)
- **Netlify**
- **AWS Amplify**
- **Docker** (tự build image)

---

## 🔧 Troubleshooting

### Lỗi thường gặp

#### 1. Module not found

```bash
# Xóa node_modules và reinstall
rm -rf node_modules yarn.lock
yarn install
```

#### 2. TypeScript errors

```bash
# Restart TypeScript server trong IDE
# Hoặc check tsconfig.json paths
```

#### 3. Cookie không lưu được

- Kiểm tra `NEXT_PUBLIC_KEY_SECRET` đã được set
- Kiểm tra domain và path của cookie

#### 4. API calls fail

- Kiểm tra `NEXT_PUBLIC_API_URL` đúng chưa
- Kiểm tra CORS settings trên backend
- Kiểm tra network tab trong DevTools

#### 5. i18n không hoạt động

- Kiểm tra file translation đã được import
- Kiểm tra cookie `LANGUAGE` có giá trị hợp lệ

---

## 📚 Tài liệu tham khảo

- [Next.js Documentation](https://nextjs.org/docs)
- [Ant Design Documentation](https://ant.design/)
- [React Query Documentation](https://tanstack.com/query/latest)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [i18next Documentation](https://www.i18next.com/)

---

## 📝 License

MIT

---

## 👥 Contributing

Mọi đóng góp đều được chào đón! Vui lòng tạo issue hoặc pull request.

---

**Happy Coding! 🎉**
