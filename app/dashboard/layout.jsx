import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#151C2D]">
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden lg:block w-64">
          <Sidebar />
        </aside>

        {/* Main content */}
        <main className="flex-1 min-h-screen">
          <Navbar />
          <div className="p-4">{children}</div>
        </main>
      </div>
    </div>
  );
}
