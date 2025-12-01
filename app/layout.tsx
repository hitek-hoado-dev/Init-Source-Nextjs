"use client"

import ReactQueryProviders from "@/lib/react-query/provider";
import "./globals.css";
import { App as AntdApp, ConfigProvider } from 'antd';
import { themeConfig } from "@/lib/antd/themeConfig";
import { GlobalStateProvider } from "@/hooks/useGlobalState";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <AntdApp>
          <ConfigProvider
            theme={themeConfig}
          >
            <ReactQueryProviders>
              <GlobalStateProvider>
                {children}
              </GlobalStateProvider>
            </ReactQueryProviders>
          </ConfigProvider>
        </AntdApp>
      </body>
    </html>
  );
}

