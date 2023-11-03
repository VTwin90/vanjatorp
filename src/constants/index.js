import {
    frontend,
    backend,
    ux,
    prototyping,
    figma,
    portfolio,
    unperfectdate,
    vgames,
    womxn,
    xelor,
    microverse,
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
      title: 'Software Prototyping',
      icon: prototyping,
    },
  ];
  
  const technologies = [
    {
      name: 'figma',
      icon: figma,
    },
    {
      name: 'figma',
      icon: figma,
    },
    {
      name: 'figma',
      icon: figma,
    },
    {
      name: 'figma',
      icon: figma,
    },
    {
      name: 'figma',
      icon: figma,
    },
    {
      name: 'figma',
      icon: figma,
    },
    {
      name: 'figma',
      icon: figma,
    },
    {
      name: 'figma',
      icon: figma,
    },
    {
      name: 'figma',
      icon: figma,
    },
    {
      name: 'figma',
      icon: figma,
    },
    {
      name: 'figma',
      icon: figma,
    },
    {
      name: 'figma',
      icon: figma,
    },
    {
      name: 'figma',
      icon: figma,
    },
    {
      name: 'figma',
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: 'Front-End Developer',
      company_name: 'Microverse',
      icon: microverse,
      iconBg: '#333333',
      date: 'Aug 2021 - Feb 2022',
    },
    {
      title: 'Mentor (Volunteer)',
      company_name: 'Microverse',
      icon: microverse,
      iconBg: '#333333',
      date: 'Mar 2022 - May 2022',
    },
    {
      title: 'Junior Software Engineer',
      company_name: 'Microverse',
      icon: microverse,
      iconBg: '#333333',
      date: 'May 2022 - Oct 2022',
    },
    {
      title: 'Full Stack Developer',
      company_name: 'Microverse',
      icon: microverse,
      iconBg: '#333333',
      date: 'Sep 2022 - Present',
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
      name: 'The (Un)perfect Date',
      description:
        'A visual novel game were your decisions have an impact on the story',
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
  