import FixedNavbar from '../components/FixedNavbar';
import Sidebar from '../components/Sidebar';

export default function RootLayout({ children }) {
  return (
        <div className="bg-[#f4f8f7] text-black overflow-hidden">
          <FixedNavbar />
          <div className="grid grid-cols-1 md:grid-cols-5">
            <div className="col-span-1 hidden md:block">
              <Sidebar />
            </div>
            {children}
          </div>
        </div>
  )
}
