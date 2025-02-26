import { Providers } from "@/components/shared/providers";

export default function Layout({ children }) {
  return (
    <div className="h-screen p-4 bg-[#1F1F21]">
      <Providers>{children}</Providers>
    </div>
  );
}
