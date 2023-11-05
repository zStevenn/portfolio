import SectionEnum from '@/enums/Section';
import React from 'react'
import NavLink from '../nav-link';

type LinksProps = {
  className: string
}

function Links({ className }: LinksProps) {
  const navLinks = [
    { name: 'Home', id: SectionEnum.Introduction },
    { name: 'Projecten', id: SectionEnum.Projects },
    { name: 'Studie', id: SectionEnum.Study },
    { name: 'Contact', id: SectionEnum.Contact },
  ];

  return (
    <div className={className}>
      <ul className="flex flex-col md:flex-row gap-2">
        {navLinks.map((navLink) => (
          <NavLink key={navLink.id} name={navLink.name} id={navLink.id} />
        ))}
      </ul>
    </div>
  )
}

export default Links