import CardContainer from '@/components/ui/card/container'

type CardProps = {
  company: string
  description: string
  date: string
  role: string
}

function ExperienceCard({ company, description, date, role }: CardProps) {
  return (
    <CardContainer>
      <div className="px-6 py-4">
        <div className="text-neutral-800 dark:text-neutral-300">{company}</div>
        <div className="font-bold text-xl">{role}</div>
        <div className="text-neutral-800 dark:text-neutral-400 text-base mb-2">{date}</div>
        <p className="text-neutral-700 dark:text-neutral-300 text-base">{description}</p>
      </div>
    </CardContainer>
  )
}

export default ExperienceCard