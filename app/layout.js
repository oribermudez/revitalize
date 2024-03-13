import { Inter } from "next/font/google";
import "./globals.css";
import { AppStateProvider } from "./global-state/AppStateContext";
import { UserProvider } from "@auth0/nextjs-auth0/client";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Revitalize | Massage Therapy",
  description: "Massage therapy for the whole family",
};

export default function RootLayout({ children }) {
  return (
    <AppStateProvider>
      <html lang="en">
        <UserProvider>
          <body className={inter.className}>{children}</body>
        </UserProvider>
      </html>
    </AppStateProvider>
  );
}
