import { JSX } from 'react';

type SectionProps = {
  children: JSX.Element | JSX.Element[];
  id: string;
  backgroundColor?: string;
}

function Section({ children, id, backgroundColor }: SectionProps) {
  const bgColor = backgroundColor ?? undefined

  return (
    <section id={id} className={bgColor}>
      <div className='md:container md:mx-auto px-4 min-h-screen'>
        {children}
      </div>
    </section>
  )
}

export default Section