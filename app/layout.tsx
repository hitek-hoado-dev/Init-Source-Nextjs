import type { Metadata } from "next";
import { Aoboshi_One, Inter, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import {NextIntlClientProvider} from 'next-intl';
import {getLocale} from 'next-intl/server';
import ReactQueryProviders from "@/lib/react-query/provider";

const aoboshiOne = Aoboshi_One({
  weight: "400",            // Aoboshi One chỉ có weight 400 (Regular)
  subsets: ["latin"],       // subset you need (ngôn ngữ Latin)
  display: "swap",          // cách ưu tiên hiển thị: swap/optional/…
  variable: "--font-aoboshi"// (tuỳ chọn) nếu bạn muốn gán vào CSS variable
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

const libreBaskerville = Libre_Baskerville({
  weight: "400",            // Libre Baskerville chỉ có weight 400 (Regular)
  subsets: ["latin"],       // subset you need (ngôn ngữ Latin)
  display: "swap",          // cách ưu tiên hiển thị: swap/optional/…
  variable: "--font-libre"  // (tuỳ chọn) nếu bạn muốn gán vào CSS variable
});

export const metadata: Metadata = {
  title: "Init Source",
  description: "Init Source for Nextjs",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const locale = await getLocale()

  return (
    <html lang={locale}>
      <body
        className={`${aoboshiOne.variable} ${inter.variable} ${libreBaskerville.variable} antialiased`}
      >
        <NextIntlClientProvider>
          <ReactQueryProviders>
            {children}
          </ReactQueryProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

