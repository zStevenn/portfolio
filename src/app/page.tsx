import Occupation from "@/components/home/hero/occupation";
import Navigation from "@/components/navigation";
import Section from "@/components/ui/section";
import SectionEnum from "@/enums/Section";

export default function Home() {
  const introductionString = `Hoi, ik ben Steven`

  return (
    <main className="relative grid min-h-screen">
      <Navigation />
      <Section
        id={SectionEnum.Introduction}
      >
        <div className="flex flex-col gap-4 mt-24">
          <p className="text-xl">
            {introductionString}
          </p>
          <Occupation />
        </div>

      </Section>
      <Section
        id={SectionEnum.Work}
      >
        <p>Werk</p>
      </Section>
      <Section
        id={SectionEnum.Study}
      >
        <p>Studie</p>
      </Section>
      <Section
        id={SectionEnum.Contact}
      >
        <p>Contact</p>
      </Section>
    </main>
  )
}
