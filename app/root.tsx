import {
   Links,
   Meta,
   Outlet,
   Scripts,
   ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@vercel/remix";
import styles from "~/style/styles.css?url";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsApp from "./components/WhatsApp";
import { ScrollProvider } from "./context/scrollContext";
import { ClientOnly } from "remix-utils/client-only";
import { useEffect } from "react";

declare global {
   interface Window {
      fbq: any;
      gtag: any;
   }
}

export const links: LinksFunction = () => [
   { rel: "stylesheet", href: styles },
   { rel: "preconnect", href: "https://fonts.googleapis.com" },
   {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
   },
   {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap",
   },
   {
      rel: "stylesheet",
      type: "text/css",
      href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css",
   },
   {
      rel: "stylesheet",
      type: "text/css",
      href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css",
   },
];

export function Layout({ children }: { children: React.ReactNode }) {
   useEffect(() => {
      if (typeof window !== "undefined") {
         // Facebook Pixel
         (function (f: any, b: any, e: any, v: any, n: any, t: any, s: any) {
            if (f.fbq) return;
            n = f.fbq = function () {
               n.callMethod
                  ? n.callMethod.apply(n, arguments)
                  : n.queue.push(arguments);
            };
            if (!f._fbq) f._fbq = n;
            n.push = n;
            n.loaded = true;
            n.version = '2.0';
            n.queue = [];
            t = b.createElement(e);
            t.async = true;
            t.src = v;
            s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s);
         })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

         window.fbq('init', '1260949948413025'); // ID de Pixel de Facebook
         window.fbq('track', 'PageView'); // Seguimiento de PageView
      }
   }, []);

   return (
      <html lang="es" className="overflow-x-hidden">
         <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/jorgio-favicon.ico" />
            <Meta />
            <Links />
            <meta name="google-site-verification" content="4IaUCpqJt5GrJRAGLcfxasGQujb_PGdpFtb7kN7_SR0" />
            <noscript>
               <img
                  height="1"
                  width="1"
                  style={{ display: "none" }}
                  src="https://www.facebook.com/tr?id=1260949948413025&ev=PageView&noscript=1"
                  alt=""
               />
            </noscript>
         </head>
         <body className="bg-primario relative -z-50 overflow-x-hidden">
            <ScrollProvider>
               <Header />
               <WhatsApp />
               {children}
               <ScrollRestoration />
               <Scripts />
               <ClientOnly>
                  {() => (
                     <>
                        <script
                           async
                           src="https://www.googletagmanager.com/gtag/js?id=AW-16671910917"
                        ></script>
                        <script
                           dangerouslySetInnerHTML={{
                              __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', 'AW-16671910917');
                              `,
                           }}
                        />
                     </>
                  )}
               </ClientOnly>
               <Footer />
            </ScrollProvider>
         </body>
      </html>
   );
}

export default function App() {
   return <Outlet />;
}
