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
  title: "Jasa Pembuatan Website Sukoharjo #1 | Web Development Profesional",
  description:
    "🏆 Jasa pembuatan website terbaik di Sukoharjo. Spesialis website UMKM, company profile, landing page & toko online. ✓ Harga Terjangkau ✓ Proses Cepat ✓ Support 24/7 | Hubungi: 085876120167",
  keywords: [
    "Jasa Website Sukoharjo",
    "Bikin Website Sukoharjo",
    "Web Development Sukoharjo",
    "Jasa Landing Page Sukoharjo",
    "Website UMKM Sukoharjo",
    "Website Bisnis Sukoharjo",
    "Harga Website Sukoharjo",
    "Company Profile Sukoharjo",
    "Toko Online Sukoharjo",
    "Website Murah Sukoharjo",
    "Jasa SEO Sukoharjo",
    "Digital Marketing Sukoharjo",
    "WordPress Sukoharjo",
    "Website Custom Sukoharjo",
    "Pembuatan Website Profesional"
  ],
  alternates: {
    canonical: "https://hazdev.vercel.app",
    languages: {
      'id-ID': 'https://hazdev.vercel.app',
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
    title: "Jasa Pembuatan Website Sukoharjo | Spesialis Website UMKM & Bisnis",
    description:
      "Butuh website profesional untuk bisnis Anda di Sukoharjo? ✓ WordPress ✓ Landing Page ✓ Website Custom. Konsultasi GRATIS! Hubungi: 085876120167",
    url: "https://hazdev.vercel.app",
    siteName: "HazDev - Jasa Website Sukoharjo",
    images: [
      {
        url: "/img/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jasa Pembuatan Website Profesional Sukoharjo - HazDev",
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
    title: "Jasa Pembuatan Website Sukoharjo | HazDev",
    card: "summary_large_image",
    description: "Jasa pembuatan website profesional di Sukoharjo. Spesialis WordPress, landing page & website custom untuk UMKM dan bisnis.",
    images: [
      {
        url: "/img/og-image.jpg",
        alt: "Jasa Website Sukoharjo - HazDev",
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
  category: "Jasa Web Development Sukoharjo",
  classification: "Jasa Pembuatan Website Profesional",
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
                  "@type": "LocalBusiness",
                  "@id": "https://hazdev.vercel.app/#localbusiness",
                  "name": "HazDev - Jasa Website Sukoharjo",
                  "image": {
                    "@type": "ImageObject",
                    "@id": "https://hazdev.vercel.app/#logo",
                    "url": "https://hazdev.vercel.app/img/logo.png",
                    "contentUrl": "https://hazdev.vercel.app/img/logo.png"
                  },
                  "description": "Jasa pembuatan website profesional di Sukoharjo dengan harga terjangkau. Spesialis WordPress, landing page, dan website custom untuk UMKM dan bisnis.",
                  "url": "https://hazdev.vercel.app",
                  "telephone": "+6285876120167",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Alamat Anda",
                    "addressLocality": "Sukoharjo",
                    "addressRegion": "Jawa Tengah",
                    "postalCode": "57514",
                    "addressCountry": "ID"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "-7.6809",
                    "longitude": "110.8313"
                  },
                  "priceRange": "Rp2.000.000 - Rp10.000.000",
                  "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday"
                    ],
                    "opens": "09:00",
                    "closes": "17:00"
                  },
                  "sameAs": [
                    "https://github.com/HadZzz",
                    "https://wa.me/6285876120167"
                  ]
                },
                {
                  "@type": "Service",
                  "@id": "https://hazdev.vercel.app/#service",
                  "name": "Jasa Pembuatan Website Sukoharjo",
                  "provider": {
                    "@id": "https://hazdev.vercel.app/#localbusiness"
                  },
                  "areaServed": {
                    "@type": "City",
                    "name": "Sukoharjo"
                  },
                  "description": "Layanan pembuatan website profesional untuk bisnis dan UMKM di Sukoharjo",
                  "offers": {
                    "@type": "AggregateOffer",
                    "priceCurrency": "IDR",
                    "lowPrice": "2000000",
                    "highPrice": "10000000",
                    "offerCount": "3"
                  },
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Layanan Website Sukoharjo",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Website WordPress Premium",
                          "description": "Pembuatan website WordPress profesional dengan template premium, optimasi SEO, dan fitur lengkap"
                        },
                        "priceSpecification": {
                          "@type": "PriceSpecification",
                          "price": "2000000",
                          "priceCurrency": "IDR"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Landing Page Profesional",
                          "description": "Pembuatan landing page yang menarik dan konversi tinggi untuk promosi produk/jasa"
                        },
                        "priceSpecification": {
                          "@type": "PriceSpecification",
                          "price": "3000000",
                          "priceCurrency": "IDR"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Website Custom",
                          "description": "Pembuatan website custom sesuai kebutuhan dengan fitur spesial dan optimasi performa"
                        },
                        "priceSpecification": {
                          "@type": "PriceSpecification",
                          "price": "5000000",
                          "priceCurrency": "IDR"
                        }
                      }
                    ]
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://hazdev.vercel.app/#website",
                  "url": "https://hazdev.vercel.app",
                  "name": "HazDev - Jasa Website Sukoharjo",
                  "description": "Jasa pembuatan website profesional di Sukoharjo",
                  "publisher": {
                    "@id": "https://hazdev.vercel.app/#localbusiness"
                  },
                  "inLanguage": "id-ID"
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
