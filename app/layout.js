import Preloader from "@/components/Preloader";
import TrueManModeCss from "@/layout/TrueManModeCss";
import "@css/plugins/bootstrap.min.css";
import "@css/plugins/font-awesome.min.css";
import "@css/plugins/locomotive-scroll.css";
import "@css/plugins/swiper.min.css";
import "@css/style-light.css";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "./globals.css";
import State from "/context/context";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://hazdev.vercel.app"),
  title: "HazDev - Full Stack Developer Portfolio",
  description:
    "Portfolio website showcasing full stack development projects using React, Next.js, PHP, and more. Specialized in web and mobile development.",
  keywords: [
    "Full Stack Developer",
    "Web Development",
    "React Developer",
    "Next.js",
    "PHP Developer",
    "Mobile Development",
    "Portfolio",
  ],
  openGraph: {
    title: "HazDev - Full Stack Developer Portfolio",
    description:
      "Portfolio website showcasing full stack development projects using React, Next.js, PHP, and more.",
    url: "https://hazdev.vercel.app",
    siteName: "HazDev Portfolio",
    images: [
      {
        url: "/img/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "HazDev - Full Stack Developer",
    card: "summary_large_image",
    description: "Portfolio website showcasing full stack development projects",
    images: ["/img/og-image.jpg"],
  },
  verification: {
    google: "d3abef38210a98f2",
  },
  manifest: "/manifest.json",
  themeColor: "#2ecc71",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    viewportFit: "cover",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <Script
          id='schema-structured-data'
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "HazDev",
              url: "https://hazdev.vercel.app",
              jobTitle: "Full Stack Developer",
              knowsAbout: [
                "Web Development",
                "React",
                "Next.js",
                "PHP",
                "MySQL",
                "Mobile Development",
              ],
              sameAs: [
                "https://github.com/HadZzz",
                // Tambahkan social media links lainnya
              ],
              image: "/img/og-image.jpg",
              description:
                "Full Stack Developer specializing in web and mobile development using React, Next.js, PHP, and more.",
            }),
          }}
        />
        <Script
          strategy='afterInteractive'
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
        />
        <Script
          id='google-analytics'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
      </head>
      <State>
        <TrueManModeCss />
        <body>
          <div className='trm-app-frame'>
            <Preloader />
            <div id='trm-dynamic-content' className='trm-swup-animation'>
              <div
                id='trm-scroll-container'
                className='trm-scroll-container'
                style={{ opacity: 0 }}
              >
                {children}
              </div>
            </div>
          </div>
        </body>
      </State>
    </html>
  );
}
