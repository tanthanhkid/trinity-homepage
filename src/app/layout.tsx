import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Trinity Software Technology - Chuyển Đổi Số Toàn Diện",
  description: "Công ty TNHH Công Nghệ Phần Mềm Trinity - Chuyên về phát triển phần mềm, AI & tự động hóa, ERP và chuyển đổi số doanh nghiệp. Tiết kiệm 20-30% chi phí vận hành.",
  keywords: "phần mềm, trinity, AI, automation, ERP, chuyển đổi số, vietnam, software development",
  authors: [{ name: "Trinity Software Technology" }],
  openGraph: {
    title: "Trinity Software Technology - Chuyển Đổi Số Toàn Diện",
    description: "Giải pháp phần mềm và chuyển đổi số hàng đầu Việt Nam",
    url: "https://phanmemtrinity.com",
    siteName: "Trinity Software Technology",
    locale: "vi_VN",
    type: "website",
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
