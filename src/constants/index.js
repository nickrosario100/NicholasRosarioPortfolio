import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  nodejs,
  git,
  meta,
  worldPrint,
  shopify,
  carrent,
  yellowbrick,
  wp

} from "../assets";



export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "World Print",
    icon: worldPrint,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Full Stack Software Engineer",
    company_name: "Yellow Brick Financial",
    icon: shopify,
    iconBg: "#383E56",
    date: "April 2023 - Current",
    points: [
      "Yellowbrick Financial is a reputable company that offers a range of valuable services to its clients, including life insurance, 401k plans, annuities, and financial planning.",
      "Proficient in employing front-end development principles and techniques, including expert knowledge of userinterface design, responsive design strategies, and accessibility best practices to create visually appealing,mobile-friendly, and inclusive web experiences.",
      "Developed the locations section of a web application using SQL for database management, .NET for server-side functionality, and JavaScript, HTML, and React for creating dynamic and interactive user interfaces.",
      "Developed RESTful APIs using .NET Core framework, providing robust and scalable backend services for web applications",
      "Designed and implemented SQL tables and stored procedures, optimizing database performance and enhancing data retrieval and manipulation processes",
      "Practiced Agile methodologies, including daily stand-ups, code review sessions, and code talks, to foster collaboration, ensure code quality, and drive continuous improvement throughout the development process.",
      "Proficient in source control management using Git and GitHub, ensuring version control, branch management, and seamless collaboration among team members for efficient and organized code development.",
      "Collaborated with the team to create and refactor components, optimizing performance and ensuring seamless operation for both administrative and student users."
    ],
  },
  {
    title: "U.S. Military",
    company_name: "Active Army",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "January 2019 - May 2023",
    points: [
      "Led a team of five soldiers in efficiently resupplying ammunition and charges to tanks in the firing line.",
      "Ensured accurate inventory management and proper handling of ammunition and explosives, maintaining safety protocols at all times.",
      "Implemented effective communication strategies to coordinate with tank crews and ensure timely resupply during training exercises and live-fire scenarios.",
      "Conducted routine inspections and maintenance of ammunition and equipment, ensuring optimal functionality and readiness.",
      "Trained and mentored junior team members in operational procedures, safety protocols, and teamwork principles.",
      "Successfully deployed for 11 months to Germany and Poland, providing logistical support in a non-combat zone."
    ],
  },
  {
    title: "Full Stack Software Engineer",
    company_name: "World Print",
    icon: worldPrint,
    iconBg: "#383E56",
    date: "Febuary 2019 - September 2019",
    points: [
      "Crafted a seamlessly integrated system empowering end-users to effortlessly unleash their creativity with their very own shirt designs and create and save their unique work.",
      "Elevated UX to new heights, data retrieval and management from the Pixabay API seamlessly empowered end-users with the ability to effortlessly add and personalize unique clipart, forging an unforgettable interactive journey.",
      "Operated with seamless precision, leveraging the power of GitHub, Git, and Trello, to establish a highly-functional system of source control and work-flow management.",
      "Implemented sorting, ﬁltering, routing, and mapping of components enabling users to: Add and edit clipart from a third-party API or create meaningful text to add to their shirt designs.",
    ],
  },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "Tic-Tac-Toe",
    description:
      "Web-based platform that allows you to play eveyones favorite game locally.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "JS",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://local-tik-tac-toe.netlify.app/",
  },
  {
    name: "Yellow Brick Financial",
    description:
      "Yellowbrick Financial is a reputable company that offers a range of valuable services to its clients, including life insurance, 401k plans, annuities, and financial planning.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "JS",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: ".NET",
        color: "white-text-gradient",
      },
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "SQL",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
    ],
    image: yellowbrick,
    source_code_link: "https://yellowbrickfinancial.com/",
  },
  {
    name: "World Print",
    description:
      "Integrated system empowering users to effortlessly unleash their creativity with their very own shirt designs and create and save their unique work.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "JS",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: ".NET",
        color: "white-text-gradient",
      },
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "SQL",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
    ],
    image: wp,
    source_code_link: "https://yellowbrickfinancial.com/",
  },
];

export { services, technologies, experiences, projects };
