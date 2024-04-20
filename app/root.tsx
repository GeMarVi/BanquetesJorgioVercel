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

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  { rel: "preconnect", href: "https://fonts.googleapis.com"},
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous"},
  { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap"},
  { rel: "stylesheet", type: "text/css", href:"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"},
  { rel: "stylesheet", type: "text/css", href:"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"},
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="overflow-x-hidden">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-primario relative -z-50 overflow-x-hidden">
        <Header />
        <WhatsApp />
        {children}
        <ScrollRestoration />
        <Scripts />
        <Footer />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
