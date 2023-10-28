import Occupation from "@/components/home/hero/occupation";
import Navigation from "@/components/navigation";
import Card from "@/components/ui/card";
import P from "@/components/ui/p";
import Section from "@/components/ui/section";
import Title from "@/components/ui/title";
import SectionEnum from "@/enums/Section";
import { shantell_sans } from "@/fonts";

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
      </Section>
      <Section
        id={SectionEnum.Work}
      >
        <Title>Werk</Title>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card
            title="awegaweg"
            date="aweg aweg aw"
            description="apwoeigjpawoiejgpoawijegpoaijweg awpiegapowi ejgpoawiej gpoaiwj epogaiwj peogi"
            imageSrc="https://placekitten.com/g/200/150"
            tags={['hi']}
          />
          <Card
            title="awegaweg"
            date="aweg aweg aw"
            description="apwoeigjpawoiejgpoawijegpoaijweg awpiegapowi ejgpoawiej gpoaiwj epogaiwj peogi"
            imageSrc="https://placekitten.com/g/200/150"
          />
          <Card
            title="awegaweg"
            date="aweg aweg aw"
            description="apwoeigjpawoiejgpoawijegpoaijweg awpiegapowi ejgpoawiej gpoaiwj epogaiwj peogi"
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
