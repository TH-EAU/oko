import type { Metadata } from "next";
import { Container } from "@chakra-ui/react";
import { UiProvider } from "@/components/providers/UiProvider";
import "./globals.css";

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
    <html lang="en" suppressHydrationWarning>
      <body>
        <UiProvider>
          <Container maxW="4xl">{children}</Container>
        </UiProvider>
      </body>
    </html>
  );
}
