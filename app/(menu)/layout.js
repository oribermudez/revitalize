import { Inter } from "next/font/google";
import "../globals.css";
import FixedNavbar from "../components/FixedNavbar";
import Sidebar from "../components/Sidebar";
import { AppStateProvider } from "../global-state/AppStateContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <AppStateProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className="bg-[#f4f8f7] text-black overflow-x-hidden overflow-y h-screen">
            <FixedNavbar />
            <div className="grid grid-cols-1 md:grid-cols-5">
              <Sidebar />
              {children}
            </div>
          </div>
        </body>
      </html>
    </AppStateProvider>
  );
}
