import type { Metadata } from "next";
import { Prompt, DM_Serif_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

// Thai-friendly font - Prompt (for body text)
const prompt = Prompt({
  variable: "--font-prompt",
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Elegant serif font for headings
const dmSerif = DM_Serif_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

// SEO Metadata
export const metadata: Metadata = {
  title: {
    default: "Soul Spectrum | พื้นที่พักใจและคำตอบของชีวิต",
    template: "%s | Soul Spectrum",
  },
  description:
    "ค้นหาคำตอบทางใจผ่านไพ่จิตวิทยา (Psychological Oracle) เพื่อฮีลใจและเข้าใจตัวเองมากขึ้น ไม่ว่าจะเป็นเรื่องสุขภาพ ความรัก การงาน การเงิน หรือครอบครัว",
  keywords: [
    "ไพ่ออราเคิล",
    "ดูดวง",
    "ฮีลใจ",
    "จิตวิทยา",
    "ที่พักใจ",
    "ความรัก",
    "การงาน",
    "การเงิน",
    "ครอบครัว",
    "สุขภาพจิต",
    "Gen Z",
    "First Jobber",
  ],
  authors: [{ name: "ที่พักใจ (Heart's Haven)" }],
  creator: "ที่พักใจ (Heart's Haven)",
  publisher: "thipakjai.com",
  metadataBase: new URL("https://soul.thipakjai.com"),
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: "https://soul.thipakjai.com",
    siteName: "Soul Spectrum",
    title: "Soul Spectrum | พื้นที่พักใจและคำตอบของชีวิต",
    description:
      "ค้นหาคำตอบทางใจผ่านไพ่จิตวิทยา (Psychological Oracle) เพื่อฮีลใจและเข้าใจตัวเองมากขึ้น",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soul Spectrum | พื้นที่พักใจและคำตอบของชีวิต",
    description:
      "ค้นหาคำตอบทางใจผ่านไพ่จิตวิทยา (Psychological Oracle) เพื่อฮีลใจและเข้าใจตัวเองมากขึ้น",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TG4CT6P7');`}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body className={`${prompt.variable} ${dmSerif.variable} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TG4CT6P7"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {/* Google Analytics - set NEXT_PUBLIC_GA_ID in .env.local */}
        <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_ID} />

        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand-teal focus:text-white focus:rounded-lg"
        >
          ข้ามไปยังเนื้อหาหลัก
        </a>

        <div id="main-content">
          {children}
        </div>
      </body>
    </html>
  );
}
