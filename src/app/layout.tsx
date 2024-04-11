import type { Metadata } from "next";
import { Inter } from "next/font/google";
import TanstackProvider from "@/providers/TanstackProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MKS Desafio",
  description: "MKS Desafio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <TanstackProvider>{children}</TanstackProvider>
      </body>
    </html>
  );
}
