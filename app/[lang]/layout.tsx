import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "../components/navbar";
import Footercpt from "../components/footer";
import { MotionProvider, ScrollProgress } from "../components/motion";
import { isLocale, locales } from "../i18n/config";
import { getDictionary } from "../i18n/get-dictionary";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const { meta } = getDictionary(lang);
  return {
    title: meta.title,
    description: meta.description,
    alternates: { languages: { es: "/es", en: "/en" } },
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "website",
      locale: lang === "es" ? "es_AR" : "en_US",
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#f5f1e6",
};

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang);

  return (
    <html lang={lang} className="overflow-x-hidden">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col overflow-x-hidden min-w-0`}>
        <MotionProvider>
          <a
            href="#content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[90] focus:bg-forest focus:text-cream focus:px-4 focus:py-2 focus:rounded-lg"
          >
            {t.skipToContent}
          </a>
          <ScrollProgress />
          <Navbar lang={lang} t={t.nav} />
          <div id="content" className="pt-16 flex-1 min-w-0 w-full max-w-full overflow-x-hidden">
            {children}
          </div>
          <Footercpt rights={t.footer.rights} />
        </MotionProvider>
      </body>
    </html>
  );
}
