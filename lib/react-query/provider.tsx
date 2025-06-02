'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'

export default function ReactQueryProviders({ children }: { children: React.ReactNode }) {
  // Tạo QueryClient instance trong component để tránh sharing state giữa các requests
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // Thời gian cache data (mặc định: 5 phút)
            staleTime: 60 * 1000,
            // Thời gian giữ data trong cache khi không sử dụng
            gcTime: 1000 * 60 * 60 * 24, // 24 giờ
            // Retry khi request fail
            retry: 1,
            // Refetch khi window focus
            refetchOnWindowFocus: false,
          },
        },
      })
  )

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* Chỉ hiển thị devtools trong development */}
    </QueryClientProvider>
  )
}