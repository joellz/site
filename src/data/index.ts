
export interface IProject {
  brand: string
  title: string
  logoURL: string
  description: string
  demoURL: string
  slug: string
  skills: string[]
}

export interface ISkill {
  name: string
  category:
  'Front-End Development' |
  'Back-End Development'  |
  'Databases'             |
  `API's`                 |
  'Build Tools'           |
  'Design'                |
  'Cloud'                 |
  'Source Control'
}

export interface IJob {
  employer: string
  role: string
  begin: string
  end: string
  duration: string
  description: string
}

export const categories = [
  'Front-End Development',
  'Back-End Development',
  'Databases',
  `API's`,
  'Build Tools',
  'Design',
  'Cloud',
  'Source Control'
]

export const skills: ISkill[] = [
  { name: 'React', category: 'Front-End Development' },
  { name: 'React Router', category: 'Front-End Development' },
  { name: 'React Hooks', category: 'Front-End Development' },
  { name: 'Redux', category: 'Front-End Development' },
  { name: 'RxJS', category: 'Front-End Development' },
  { name: 'CSS3', category: 'Front-End Development' },
  { name: 'Sass', category: 'Front-End Development' },
  { name: 'CSS Modules', category: 'Front-End Development' },
  { name: 'JavaScript', category: 'Front-End Development' },
  { name: 'TypeScript', category: 'Front-End Development' },
  { name: 'Angular', category: 'Front-End Development' },
  { name: 'jQuery', category: 'Front-End Development' },
  { name: 'HTML5', category: 'Front-End Development' },
  { name: 'Firebase', category: 'Front-End Development' },
  { name: 'Socket I/O', category: 'Front-End Development' },
  { name: 'JSON', category: 'Front-End Development' },
  { name: 'Framer Motion', category: 'Front-End Development' },
  { name: 'Local Storage', category: `API's` },
  { name: 'Watson', category: `API's` },
  { name: 'REST', category: `API's` },
  { name: 'NodeJS', category: 'Back-End Development' },
  { name: 'NextJS', category: 'Back-End Development' },
  { name: 'NextJS', category: 'Front-End Development' },
  { name: 'Webpack', category: 'Build Tools' },
  { name: 'Babel', category: 'Build Tools' },
  { name: 'Cloud Foundry', category: 'Cloud' },
  { name: 'Red Hat OpenShift', category: 'Cloud' },
  { name: 'Kubernetes', category: 'Cloud' },
  { name: 'Sketch', category: 'Design' },
  { name: 'Adobe Illustrator CC', category: 'Design' },
  { name: 'Adobe Photoshop CC', category: 'Design' },
  { name: 'Bash', category: 'Build Tools' },
  { name: 'Git', category: 'Source Control' },
  { name: 'MongoDB', category: 'Databases' },
  { name: 'Mongoose ODM', category: 'Databases' },
  { name: 'Elasticsearch', category: 'Databases' },
  { name: 'Firebase', category: 'Databases' },
  { name: 'JSON', category: 'Back-End Development' },
  { name: 'Socket I/O', category: 'Back-End Development' },
  { name: 'ExpressJS', category: 'Back-End Development' }
]

export const jobs: IJob[] = [
  {
    employer: 'IBM',
    role: 'Senior Front-End Engineer',
    begin: 'May 2015',
    end: 'February 2021',
    duration: '5 years, 10 months',
    description: 'Full-stack engineering of Watson powered web apps and beautiful, functional experiences using Javascript, Node, TypeScript, React, Angular, Mongo, CSS3, HTML5, DevOps, and Agile Methodology.'
  },
  {
    employer: 'Contractor',
    role: 'Front-End Engineer',
    begin: 'January 2015',
    end: 'May 2015',
    duration: '4 months',
    description: 'Worked as a contractor for Creative Circle to build responsive, modern, client facing sites, as well as designing mobile and desktop user experiences for several of their clients throughout New York City.'
  },
  {
    employer: 'Morgan Stanley',
    role: 'Front-End Engineer',
    begin: 'February 2014',
    end: 'December 2014',
    duration: '11 months',
    description: 'Worked along side the technical lead developer to help maintain the Morgan Stanley website. Work included building static internal pages, making press releases, text edits to articles, and creating images and graphics.'
  },
  {
    employer: 'GRA Medium',
    role: 'Junior Front-End Developer',
    begin: 'January 2013',
    end: 'December 2013',
    duration: '12 Months',
    description: 'Worked self-employed designing and building simple static html sites for clients, alongside designing logos, flyers, and business cards for local businesses.'
  }
]