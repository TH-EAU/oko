import type { Metadata } from "next";
import { Container } from "@chakra-ui/react";
import { UiProvider } from "@/components/providers/UiProvider";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import ReactQueryProvider from "@/components/providers/ReactQueryProvider";
import { UserProvider } from "@/context/UserContext";

export const metadata: Metadata = {
  title: "Oko",
  description: "by ESIEA | Théau NICOLAS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>
        <ReactQueryProvider>
          <UiProvider>
            <UserProvider>{children}</UserProvider>
          </UiProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
