import { Inter } from 'next/font/google'
import '../globals.css'
import FixedNavbar from '../components/FixedNavbar';
import Sidebar from '../components/Sidebar';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-[#f4f8f7] text-black overflow-hidden h-screen">
          <FixedNavbar />
          <div className="grid grid-cols-1 md:grid-cols-5">
            <div className="col-span-1 hidden md:block">
              <Sidebar />
            </div>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
