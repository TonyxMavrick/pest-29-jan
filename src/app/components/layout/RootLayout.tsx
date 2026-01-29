import { Outlet } from "react-router";
import { Header } from "@/app/components/layout/Header";
import { Footer } from "@/app/components/layout/Footer";

export function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
