import { Providers } from "@/components/shared/providers";

export default function Layout({ children }) {
  return (
    <div className="flex justify-center items-center h-screen bg-[#1F1F21]">
      <div className="w-[420px] p-8 border-2 rounded-lg bg-neutral-900">
        <Providers>{children}</Providers>
      </div>
    </div>
  );
}
