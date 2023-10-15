import Occupation from "@/components/home/hero/occupation";
import Navigation from "@/components/navigation";

export default function Home() {
  const introductionString = `Hoi, ik ben Steven`

  return (
    <main className="relative grid min-h-screen">
      <Navigation />
      <div className="mt-28 px-4 flex flex-col gap-4">
        <p className="text-xl">
          {introductionString}
        </p>
        <Occupation />
      </div>
    </main>
  )
}
