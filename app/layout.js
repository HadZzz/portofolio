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

export const viewport = {
  themeColor: "#2ecc71",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

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
    "Frontend Developer",
    "Backend Developer",
    "JavaScript Developer",
    "React Native Developer",
  ],
  alternates: {
    canonical: "https://hazdev.vercel.app",
    languages: {
      'en-US': 'https://hazdev.vercel.app/en',
      'id-ID': 'https://hazdev.vercel.app/id',
    },
  },
  authors: [
    {
      name: "HazDev",
      url: "https://hazdev.vercel.app",
    }
  ],
  creator: "HazDev",
  publisher: "HazDev",
  openGraph: {
    title: "HazDev - Full Stack Developer Portfolio",
    description:
      "Portfolio website showcasing full stack development projects using React, Next.js, PHP, and more. Expert in web and mobile development with modern technologies.",
    url: "https://hazdev.vercel.app",
    siteName: "HazDev Portfolio",
    images: [
      {
        url: "/img/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HazDev Portfolio Preview",
      },
    ],
    locale: "id_ID",
    type: "website",
    countryName: "Indonesia",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
      noimageindex: false,
      "max-snippet": 200,
    },
  },
  twitter: {
    title: "HazDev - Full Stack Developer",
    card: "summary_large_image",
    description: "Portfolio website showcasing full stack development projects. Expert in React, Next.js, and modern web technologies.",
    images: [
      {
        url: "/img/og-image.jpg",
        alt: "HazDev Portfolio Preview",
      }
    ],
    creator: "@yourtwitterhandle",
    site: "@yourtwitterhandle",
  },
  verification: {
    google: "d3abef38210a98f2",
    yandex: "yandex-verification-code",
    bing: "bing-verification-code",
  },
  category: "Portfolio",
  classification: "Portfolio Website",
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="https://placehold.co/180x180/2ecc71/ffffff.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://placehold.co/32x32/2ecc71/ffffff.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://placehold.co/16x16/2ecc71/ffffff.png" />
        <link rel="manifest" href="/icons/site.webmanifest" />
        <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#2ecc71" />
        <meta name="msapplication-TileColor" content="#2ecc71" />
        <meta name="theme-color" content="#2ecc71" />
        <Script
          id='schema-structured-data'
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://hazdev.vercel.app/#person",
                  "name": "HazDev",
                  "url": "https://hazdev.vercel.app",
                  "image": {
                    "@type": "ImageObject",
                    "@id": "https://hazdev.vercel.app/#image",
                    "url": "https://hazdev.vercel.app/img/avatar.jpg",
                    "contentUrl": "https://hazdev.vercel.app/img/avatar.jpg"
                  },
                  "description": "Full Stack Developer specialized in React, Next.js, and modern web technologies",
                  "jobTitle": "Full Stack Developer",
                  "knowsAbout": [
                    "Web Development",
                    "React",
                    "Next.js",
                    "PHP",
                    "MySQL",
                    "Mobile Development"
                  ],
                  "sameAs": [
                    "https://github.com/HadZzz",
                    // Add your social media links
                  ],
                  "worksFor": {
                    "@type": "Organization",
                    "name": "Freelance"
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://hazdev.vercel.app/#website",
                  "url": "https://hazdev.vercel.app",
                  "name": "HazDev Portfolio",
                  "description": "Full Stack Developer Portfolio",
                  "publisher": {
                    "@id": "https://hazdev.vercel.app/#person"
                  },
                  "inLanguage": "en-US"
                },
                {
                  "@type": "WebPage",
                  "@id": "https://hazdev.vercel.app/#webpage",
                  "url": "https://hazdev.vercel.app",
                  "name": "HazDev - Full Stack Developer Portfolio",
                  "isPartOf": {
                    "@id": "https://hazdev.vercel.app/#website"
                  },
                  "about": {
                    "@id": "https://hazdev.vercel.app/#person"
                  },
                  "description": "Portfolio website showcasing full stack development projects using React, Next.js, PHP, and more.",
                  "inLanguage": "en-US",
                  "potentialAction": [
                    {
                      "@type": "ReadAction",
                      "target": [
                        "https://hazdev.vercel.app"
                      ]
                    }
                  ]
                }
              ]
            })
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
