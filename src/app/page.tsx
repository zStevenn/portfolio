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
import ExperienceCard from "@/components/experience/card";

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
        id={SectionEnum.Experience}
      >
        <Title>Ervaring</Title>
        <div className="grid grid-cols-1 gap-4">
          <ExperienceCard
            company="Cow Hills Retail B.V."
            role="Junior Software Engineer"
            date="juni 2023 - heden"
            description="Het uitwerken van aangeleverde UI/UX designs in onze React / React Native applicaties en onderhouden van code kwaliteit."
          />
          <ExperienceCard
            company="MBO Utrecht"
            role="Studie Software Developer (Niveau 4)"
            date="20 juni 2023 - Diploma behaald"
            description="Het opbouwen van een sterke basis in HTML, CSS, JavaScript, PHP, SQL Databases & Agile methodologieën."
          />
          {/* <ExperienceCard
            company="Udemy"
            role="Next.js & React Cursus"
            date="16 Mei 2023 - heden"
            description=""
          /> */}
          <ExperienceCard
            company="Udemy"
            role="UI/UX & Figma Cursus"
            date="25 April 2023 - 12 mei 2023 - Certificaat behaald"
            description=""
          />
          <ExperienceCard
            company="Sellvation Marketing B.V."
            role="Stagiar Software Developer"
            date="augustus 2022 - mei 2023"
            description="Ontwerpen en bouwen van nieuwe webpagina's binnen het EMS-software van Sellvation. Creëren, testen en implementeren van op maat gemaakte e-mails voor klanten zoals PLUS, Coop & Xenos."
          />
        </div>
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
