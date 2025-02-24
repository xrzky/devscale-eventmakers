import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";

export default async function Layout({ children }) {
  return (
    <div className="bg-[#1f1f21] relative">
      <Navbar />
      <main className="max-w-6xl m-auto py-12 flex flex-col justify-between min-h-screen">
        {children}
      </main>
      <Footer />
    </div>
  );
}
