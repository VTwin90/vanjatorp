import {
    frontend,
    backend,
    ux,
    creativity_resourcefulness,
    figma,
    html,
    css,
    javascript,
    python,
    react,
    canva,
    git,
    tailwind,
    bootstrap,
    django,
    mongodb,
    flask,
    adobe,
    portfolio,
    unperfectdate,
    vgames,
    womxn,
    xelor,
    infinity,
    codeinstitute,
    zerotomastery,
    logo,
  } from '../assets';
  
  export const navLinks = [
    {
      id: 'about',
      title: 'About',
    },
    {
      id: 'projects',
      title: 'Projects',
    },
    {
      id: 'contact',
      title: 'Contact',
    },
  ];
  
  const services = [
    {
      title: 'Frontend Developer',
      icon: frontend,
    },
    {
      title: 'Backend Developer',
      icon: backend,
    },
    {
      title: 'UI/UX Design',
      icon: ux,
    },
    {
      title: 'Creativity and Resourcefulness',
      icon: creativity_resourcefulness,
    },
  ];
  
  const technologies = [
    {
      name: 'html',
      icon: html,
    },
    {
      name: 'css',
      icon: css,
    },
    {
      name: 'javascript',
      icon: javascript,
    },
    {
      name: 'python',
      icon: python,
    },
    {
      name: 'react',
      icon: react,
    },
    {
      name: 'git',
      icon: git,
    },
    {
      name: 'tailwind',
      icon: tailwind,
    },
    {
      name: 'bootstrap',
      icon: bootstrap,
    },
    {
      name: 'django',
      icon: django,
    },
    {
      name: 'canva',
      icon: canva,
    },
    {
      name: 'flask',
      icon: flask,
    },
    {
      name: 'mongodb',
      icon: mongodb,
    },
    {
      name: 'figma',
      icon: figma,
    },
    {
      name: 'adobe',
      icon: adobe,
    },
  ];
  
  const experiences = [
    {
      title: 'Fullstack Developer',
      company_name: 'V Projects',
      icon: logo,
      iconBg: '#333333',
      date: 'Feb 2021 - Present',
    },
    {
      title: 'Software Development',
      company_name: 'Code Institute',
      icon: codeinstitute,
      iconBg: '#333333',
      date: 'Feb 2021 - Mar 2022',
    },
    {
      title: 'Courses: The Complete Web Developer, Complete Web & Mobile Designer, and others',
      company_name: 'Zero to Mastery',
      icon: zerotomastery,
      iconBg: '#333333',
      date: 'Mar 2020 - Present',
    },
    {
      title: 'Customer Consultant, Events, Project & Brand Manager, Marketing, Hospitality, BA, MSc',
      company_name: 'Diverse Organisations',
      icon: infinity,
      iconBg: '#333333',
      date: '2010 - Jan 2021',
    },
  ];
  
  const projects = [
    {
      id: 'project-1',
      name: 'Portfolio',
      description: 'A personal portfolio website with just the use of HTML and CSS',
      tags: [
        {
          name: 'html',
          color: 'blue-text-gradient',
        },
        {
          name: 'css',
          color: 'green-text-gradient',
        },
      ],
      image: portfolio,
      repo: 'https://github.com/VTwin90/Milestone-1-Portfolio',
      demo: 'https://vtwin90.github.io/Milestone-1-Portfolio/',
    },
    {
      id: 'project-2',
      name: '(Un)perfect Date',
      description:
        'A visual novel game where your decisions have an impact',
      tags: [
        {
          name: 'html',
          color: 'blue-text-gradient',
        },
        {
          name: 'css/bootstrap',
          color: 'green-text-gradient',
        },
        {
          name: 'javascript',
          color: 'pink-text-gradient',
        },
      ],
      image: unperfectdate,
      repo: 'https://github.com/VTwin90/UN-PERFECT-DATE',
      demo: 'https://vtwin90.github.io/UN-PERFECT-DATE/',
    },
    {
      id: 'project-3',
      name: 'VGames',
      description: 'A platform for indie games to be showcased',
      tags: [
        {
          name: 'html',
          color: 'blue-text-gradient',
        },
        {
          name: 'css/boostrap',
          color: 'green-text-gradient',
        },
        {
          name: 'javascript',
          color: 'pink-text-gradient',
        },
        {
          name: 'python',
          color: 'pink-text-gradient',
        },
      ],
      image: vgames,
      repo: 'https://github.com/VTwin90/VGAMES',
      demo: 'https://vgames-0i9m.onrender.com/',
    },
    {
      id: 'project-4',
      name: 'Xelor',
      description: `A ecommerce store for luxery watches`,
      tags: [
        {
          name: 'html',
          color: 'blue-text-gradient',
        },
        {
          name: 'css/boostrap',
          color: 'green-text-gradient',
        },
        {
          name: 'javascript',
          color: 'pink-text-gradient',
        },
        {
          name: 'python',
          color: 'pink-text-gradient',
        },
      ],
      image: xelor,
      repo: 'https://github.com/VTwin90/xelor',
      demo: 'https://xelor-watches.onrender.com/',
    },
    {
      id: 'project-5',
      name: 'Womxn',
      description: 'A website for femmetech mentorships. women-in-tech Hackathon.',
      tags: [
        {
          name: 'html',
          color: 'blue-text-gradient',
        },
        {
          name: 'css/boostrap',
          color: 'green-text-gradient',
        },
        {
          name: 'javascript',
          color: 'pink-text-gradient',
        },
      ],
      image: womxn,
      repo: 'https://github.com/CarolinaCobo/womxn-femmetech-mentorship',
      demo: 'https://carolinacobo.github.io/womxn-femmetech-mentorship/index.html',
    },
  ];
  
  export { services, technologies, experiences, projects };
  