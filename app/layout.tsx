import "@/styles/globals.css";
import clsx from "clsx";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";

// Config imports
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";

// Component imports
import { Providers } from "../components/providers";
import { Navbar } from "@/components/navbar";
import Top from "@/components/Top";
import { Toaster } from "sonner";
import { GetAllUsers } from "./api/AllUsers";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased roboto",
          fontSans.variable
        )}
      >
        {" "}
        <Toaster className="bangla" />
        <Top />
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className=" mx-auto  pt-6 container lg:px-0 px-3 flex-grow">
              {children}
            </main>
            <footer className="w-full bg-slate-900 mt-6 flex items-center justify-center py-3">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href=""
                title="Learn quran with us"
              >
                <span className="text-default-600">Powered by</span>
                <p className="text-yellow-300">Learn Quran</p>
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
