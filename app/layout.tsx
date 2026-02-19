import { Inter, Urbanist } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import Header from "@/components/header";
import LenisScroll from "@/components/lenis";
import Footer from "@/components/footer";
import { ModalProvider } from "@/context/modal-context";

const inter = Inter({
    variable: "--font-sans",
    subsets: ["latin"],
});

const urbanist = Urbanist({
    variable: "--font-urbanist",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
      default: "AI Social Media Agent for Small Businesses",
      template: "%s | Pulser",
    },
    description:
      "Automate your social media content effortlessly. Connect your website, reviews, and social accounts, send updates via WhatsApp, and let Pulser create, schedule, and publish posts on LinkedIn, Instagram, and Facebook.",
    icons: {
      icon: "/favicon.ico",
      apple: "/favicon.ico",
      shortcut: "/favicon.ico",
    },
    keywords: [
      "AI social media",
      "small business automation",
      "content scheduling",
      "social media agent",
      "Instagram automation",
      "Facebook automation",
      "LinkedIn automation",
      "AI marketing assistant",
    ],
    authors: [{ name: "Pulser" }],
    creator: "Pulser",
    applicationName: "Pulser",
    appleWebApp: {
      title: "Pulser",
      capable: true,
      statusBarStyle: "default",
    },
    openGraph: {
      title: "Automate Social Media for Small Businesses | Pulser",
      description:
        "Pulser helps small businesses post consistently on LinkedIn, Instagram, and Facebook, saving hours of work every week.",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Automate Your Small Business Social Media with Pulser",
      description:
        "Save time and post consistently. Connect your accounts and let Pulser handle LinkedIn, Instagram, and Facebook content automatically.",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <ModalProvider>
                    <Header />
                    <LenisScroll />
                    {children}
                    <Footer />
                </ModalProvider>
            </body>
        </html>
    );
}
