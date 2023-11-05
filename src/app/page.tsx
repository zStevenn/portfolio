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
        id={SectionEnum.Projects}
      >
        <Title>Mijn projecten</Title>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <WorkCard
            title="Cafetaria de Sluis"
            date="2022 - 2023"
            description="Renoveren en herdesignen van de website van Cafetaria de Sluis. Verbeteren van SEO (Search Engine Optimization)."
            imageSrc="/cafetariadesluis.png"
            tags={['seo', 'cafetaria de Sluis', 'renovatie']}
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
