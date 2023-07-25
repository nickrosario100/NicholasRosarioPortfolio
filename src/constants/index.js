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
  armylogo,
  worldPrint,
  yellowbricklogo,
  yellowbrick,
  wp,
  sql,
  net,
  csharp,
  tiktaktoe,
  larry,
  victor,
  sean,
  up,
  blackjack
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name:"SQL",
    icon:sql,
  },
  {
    name:".NET",
    icon:net,
  },
  {
    name:"csharp",
    icon:csharp,
  }
];

const experiences = [
  {
    title: "Full Stack Software Engineer",
    company_name: "Yellow Brick Financial",
    icon: yellowbricklogo,
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
    icon: armylogo,
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
  {
    title: "Full Stack Software Engineer",
    company_name: "Upwork Freelance",
    icon: up,
    iconBg: "#32cd32",
    date: "January 2015 - May 2018",
    points: [
      "Proficient in employing front-end development principles and techniques, including expert knowledge of user interface design, responsive design strategies, and accessibility best practices to create visually appealing, mobile-friendly, and inclusive web experiences.",
      "Developed various websites using HTML, CSS, .Net, C#, React, SQL and JavaScript.",
      "Supported numerous projects incorporating both front and back-end work.",
      "Integrated third-party APIs and services to enhance application capabilities and user experiences.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Nicholas is a highly skilled full stack software engineer who consistently delivers exceptional results. His technical expertise and problem-solving abilities are top-notch, making them an invaluable asset to any team.",
    name: "Larry Lemons",
    designation: "Senior Software Engineer",
    company: "Yellow Brick Financial",
    image: larry,
  },
  {
    testimonial:
      "I've had the pleasure of working with Nicholas, and I'm continually impressed by their dedication and leadership as a full stack software engineer. His guidance and mentorship have been instrumental in the success of our projects.",
    name: "Victor Ibasco",
    designation: "Senior Software Engineer",
    company: "World Print",
    image: victor,
  },
  {
    testimonial:
      "Nicholas is a standout full stack software engineer with a keen eye for detail. His ability to architect robust solutions and communicate complex concepts makes them a true asset to any organization.",
    name: "Sean Humphreys",
    designation: "Full Stack Software Engineer",
    company: "Yellow Brick Financial",
    image: sean,
  },
];

const projects = [
 
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
  {
    name: "Black Jack (Mobile & Web App)",
    description:
      "Blackjack, also known as twenty-one, is a card game where the goal is to have a hand value higher than the dealer's without exceeding 21.",
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
    image: blackjack,
    source_code_link: "https://yellowbrickfinancial.com/",
  }, {
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
    image: tiktaktoe,
    source_code_link: "https://local-tik-tac-toe.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
