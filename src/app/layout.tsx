import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://phanmemtrinity.com'),
  title: "Trinity Software Technology - Chuyển Đổi Số Toàn Diện",
  description: "Công ty TNHH Công Nghệ Phần Mềm Trinity - Chuyên về phát triển phần mềm, AI & tự động hóa, ERP và chuyển đổi số doanh nghiệp. Tiết kiệm 20-30% chi phí vận hành.",
  keywords: "phần mềm, trinity, AI, automation, ERP, chuyển đổi số, vietnam, software development",
  authors: [{ name: "Trinity Software Technology" }],
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Trinity Software Technology - Chuyển Đổi Số Toàn Diện",
    description: "Giải pháp phần mềm và chuyển đổi số hàng đầu Việt Nam",
    url: "https://phanmemtrinity.com",
    siteName: "Trinity Software Technology",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/trinity-logo.png",
        width: 1200,
        height: 630,
        alt: "Trinity Software Technology Logo",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
