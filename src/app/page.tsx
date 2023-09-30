import Navigation from "@/components/navigation";

export default function Home() {

  return (
    <main className="relative grid min-h-screen h-[200vh]">
      <Navigation />
      <div
        className="grid place-items-center hover:cursor-pointer flex-1"
      >
        Klik om tussen darkmode te toggelen
      </div>
    </main>
  )
}
