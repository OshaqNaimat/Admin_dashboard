import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function RootLayout({ children }) {
  return (
    <>
      <div className="grid grid-cols-12">
        <Sidebar />
      </div>
      <div className="col-span-12 w-[90%] sm:col-span-6 md:col-span:8 lg:col-span-9 xl:col-span-10">
        <div className="flex flex-col">
          <Navbar />
          <div className="w-[90%] mx-auto">{children}</div>
        </div>
      </div>
    </>
  );
}
