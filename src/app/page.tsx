import Occupation from "@/components/home/hero/occupation";
import WorkCard from "@/components/work/card";
import Navigation from "@/components/navigation";
import P from "@/components/ui/p";
import Section from "@/components/ui/section";
import Title from "@/components/ui/title";
import SectionEnum from "@/enums/Section";
import { shantell_sans } from "@/fonts";
import CardContainer from "@/components/ui/card/container";
import { SiTailwindcss, SiReact, SiAzuredevops, SiGreensock, SiFigma } from "react-icons/si";

export default function Home() {
  const introductionString = `Hoi, ik ben Steven!`

  return (
    <main className="relative grid min-h-screen">
      <Navigation />
      <Section
        id={SectionEnum.Introduction}
      >
        <div className="flex flex-col gap-4 mt-24">
          <p className={`text-lg md:text-xl ${shantell_sans.className}`}>
            {introductionString}
          </p>
          <p className={`text-lg md:text-xl inline pr-2 ${shantell_sans.className}`}>
            Sinds juli 2022 werkzaam als een
          </p>
          <Occupation />
        </div>

        <div className="pt-16">
          <Title>Mijn vaardigheden</Title>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <CardContainer className="flex flex-col justify-center items-center gap-4 p-8">
              <>
                <SiReact className="text-6xl" />
                React (Native)
              </>
            </CardContainer>
            <CardContainer className="flex flex-col justify-center items-center gap-4 p-8">
              <>
                <SiTailwindcss className="text-6xl" />
                Tailwind CSS
              </>
            </CardContainer>
            <CardContainer className="flex flex-col justify-center items-center gap-4 p-8">
              <>
                <SiAzuredevops className="text-6xl" />
                Azure
              </>
            </CardContainer>
            <CardContainer className="flex flex-col justify-center items-center gap-4 p-8">
              <>
                <SiGreensock className="text-6xl" />
                Animations
              </>
            </CardContainer>
            <CardContainer className="flex flex-col justify-center items-center gap-4 p-8">
              <>
                <SiFigma className="text-6xl" />
                Designing
              </>
            </CardContainer>
          </div>
        </div>
      </Section>
      <Section
        id={SectionEnum.Work}
      >
        <Title>Mijn werk</Title>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <WorkCard
            title="Cafetaria de Sluis"
            date="2022 - 2023"
            description="Geholpen bij het renoveren van de website en verbeteren van Search Engine Optimization (SEO)."
            imageSrc="https://placekitten.com/g/200/150"
            tags={['seo', 'cafetaria de Sluis', 'renovatie']}
          />
          <WorkCard
            title="Kaizen Tracker"
            date="2023 - 2024"
            description="Een applicatie ontworpen om gemakkelijk je kleine winsten bij te houden"
            imageSrc="https://placekitten.com/g/200/150"
            tags={['kaizen', 'improvement', 'tracker']}
          />
          <WorkCard
            title="Nog iets"
            date="xoxo iets anders"
            description="Hihiohoaiwepgiajwopegijaweg"
            imageSrc="https://placekitten.com/g/200/150"
          />
        </div>
      </Section>
      <Section
        id={SectionEnum.Study}
      >
        <Title>Studie</Title>
        <P>Studieomschrijving hieronder</P>
      </Section>
      <Section
        id={SectionEnum.Contact}
      >
        <Title>Contact</Title>
        <P>Contactomschrijving hieronder</P>
      </Section>
    </main>
  )
}
