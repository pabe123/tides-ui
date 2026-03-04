import { NovaNavigation } from "@/components/navigation";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#e8eaf5] flex flex-col items-center justify-center p-8 gap-12">
      <div className="w-full max-w-5xl">
        <h1 className="text-2xl font-semibold text-[#1b2540] mb-1">
          Tides — Nova Navigation
        </h1>
        <p className="text-sm text-[rgba(27,37,64,0.55)] mb-8">
          Dev-ready components connected to Figma via Code Connect
        </p>

        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-3 shadow-[0px_8px_32px_0px_rgba(27,37,64,0.08)]">
          <NovaNavigation preset="Simple Rise" />
        </div>
      </div>
    </main>
  );
}
