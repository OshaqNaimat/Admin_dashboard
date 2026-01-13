import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex">
          <Sidebar />
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
