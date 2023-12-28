import {
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  threejs,
} from "../assets";
import PERNappDemoFrontend from "../assets/PERNappDemoFrontend.gif";
import photocard from "../assets/photocard.gif";
import WantYou from "../assets/WantYou.jpg";
import free from "../assets/free.jpeg";
import psql from "../assets/tech/psql.png";
import sea from "../assets/company/sea.png";
import leonardo from "../assets/company/leonardo.png";
import bandera from "../assets/company/bandera.png";
import autoware from "../assets/company/autoware.png";
import Photocard from "../assets/company/Photocard.png";
import stema from "../assets/company/stema.png";
import nodejs from "../assets/tech/nodejs.png";
import pern from "../assets/tech/pern.webp";
import DB from "../assets/tech/DB.png";
import automation from "../assets/tech/automation.png";
import ironman from "../assets/ironman.png";

export const navLinks = [
  {
    id: "About",
    title: "About",
  },
  {
    id: "Experience",
    title: "Work",
  },
  {
    id: "Works",
    title: "Projects",
  },
  {
    id: "Feedbacks",
    title: "Feedbacks",
  },
  {
    id: "Contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: pern,
  },
  {
    title: "Relational DBs Developer",
    icon: DB,
  },
  {
    title: "nodejs Developer",
    icon: nodejs,
  },
  {
    title: "React Developer",
    icon: reactjs,
  },
  {
    title: "Automation Developer",
    icon: automation,
  },
  {
    title: "Genius, Billionaire, Playboy, Philanthropist 🤪",
    icon: ironman,
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Postgresql",
    icon: psql,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "ICT Internship",
    company_name: "SEA Milan Airport",
    icon: sea,
    iconBg: "#E6DEDD",
    date: "2013",
    points: [
      "School internship where I carried out various activities on both hardware and software side, such as clonation of operating system on several airport devices, computer assembly, technical assistance, and invested my effort into creating an app that managed the data server on the airport intranet.",
    ],
  },
  {
    title: "Avioelectric technician",
    company_name: "Leonardo",
    icon: leonardo,
    iconBg: "#E6DEDD",
    date: "2015 – 2016",
    points: [
      "As a professional in my field, I was mainly involved in installing wiring in the three sections of a helicopter. It was my duty to ensure that all the electronic devices responsible for managing the hydraulic systems, engines, and sensors were installed and correctly connected to the cockpit system controls. In addition, I was responsible for verifying the correct operation of all electronic components involved into stabilizing the entire cabin of military, private, and rescue AW139 helicopters during the final assembly line.",
    ],
  },
  {
    title: "Electrical technician",
    company_name: "Bandera",
    icon: bandera,
    iconBg: "#E6DEDD",
    date: "2016 – 2017",
    points: [
      "In this company, I was responsible for the installation of cable raceways, preparation of wiring, organizing materials required for projects worldwide, and connecting machines to control panels. To ensure the successful completion of each project, I was able to efficiently delegate tasks among team members and assign jobs as necessary. My duties included:",
      "Installing wiring raceways, industrial control panels, devices, and sensors.",
      "Preparing all cables and connecting them to machine boards.",
      "Disassembling and repairing outdated systems.",
    ],
  },
  {
    title: "Aeronautical structural technician",
    company_name: "Leonardo",
    icon: leonardo,
    iconBg: "#fff",
    date: "2017 - 2019",
    points: [
      "As a certified F-35 structural technician, I have played a main role in the full-wing assembly line. My contribution in teamwork, coordination, and task assignment allowed our team to achieve a relevant goal in quality control and testing of the finished product. Thanks to my fast-growing experience and the support of the team members, we have successfully increased the average production from 2.7 modules per month to a remarkable 3.4 in just one year of continuous evolution.",
      "My responsibilities include executing machining jobs in cascade phases, executing control checks on the final production line, training new workers on the production method, and researching new solutions to optimize the production phases' flow. I was confident in my abilities to perform these tasks and contribute to the team's success.",
    ],
  },
  {
    title: "Software Developer ",
    company_name: "Autoware",
    icon: autoware,
    iconBg: "#383E56",
    date: "March 2019 – June 2020",
    points: [
      "As a full stack web developer, I confidently improved and invested my expertise in Javascript, HTML5, CSS3, and SQL to build innovative web interfaces for MES and Integrated Systems through Thingworx, the web IoT platform based on Apache Tomcat server. My involvement in IoT projects was primarily based on agile methodology, and I efficiently managed tasks through Jira and Confluence.",
    ],
  },
  {
    title: "Automation Developer ",
    company_name: "Stema Service",
    icon: stema,
    iconBg: "#383E56",
    date: "July 2020 – April 2023",
    points: [
      "I successfully led the entire process of product development, including testing of the environment, on-site installation and commissioning of HMI and SCADA devices (Siemens and Rockwell) worldwide. ",
      "Additionally, I dedicated significant resources into redesigning the external database, the data exchange method, and upgrading the data management interface for the entire production data management system.",
    ],
  },
  /*{
    title: "Assistant to management",
    company_name: "Photocard",
    icon: Photocard,
    iconBg: "#E6DEDD",
    date: "2009 – Present",
    points: [
      "I played a crucial role in my family's business, Photocard, as part of the team responsible for ",
      "creating advertising graphics for both national and international campaigns. My responsibilities ",
      "included a wide range of tasks such as acquiring new clients, representing the company at various ",
      "fairs, filling in for employees when necessary, and managing part of the administration. ",
      "I successfully created a digital market to grow the business revenues and attract new clients.",
    ],
  },*/
  {
    title: "Software Developer",
    company_name: "Freelancer",
    icon: free,
    iconBg: "#fff",
    date: "April 2023 - Present",
    points: [
      "Embracing the entrepreneurial spirit, I'm channeling my cumulative experience into creating cutting-edge solutions. My projects, like the e-commerce platform for a printing company, showcase my ability to integrate diverse technologies, from web development with WordPress and WooCommerce to crafting marketing strategies. This chapter is about pushing boundaries and exploring new horizons in tech.",
    ],
  },
];

const testimonials = [
  {
    testimonial: "Be the first one, let's get in touch! :)",
    name: "Marius",
    designation: "Software Developer",
    company: "Freelancer",
    image: "https://avatars.githubusercontent.com/u/58807528?v=4",
  },
  /*
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  */
];

const projects = [
  {
    name: "Face Recognition Web App",
    description:
      "A showcase of my full-stack capabilities, combining the PERN stack with Clarifai's AI for a seamless user experience. This project reflects my ability to integrate complex technologies and prioritize user security.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
    ],
    image: PERNappDemoFrontend,
    source_code_link: "https://facerecognitionapp-3t77.onrender.com",
  },
  {
    name: "Wp+Woo e-commerce with 100% custom product and price",
    description:
      "A minimalist yet powerful e-commerce site, demonstrating my proficiency in WordPress, WooCommerce, and online marketing. It's a testament to my ability to deliver tailored solutions that drive business success.",
    tags: [
      {
        name: "WordPress",
        color: "blue-text-gradient",
      },
      {
        name: "WooCommerce",
        color: "green-text-gradient",
      },
      {
        name: "Stripe",
        color: "pink-text-gradient",
      },
    ],
    image: photocard,
    source_code_link: "https://etichettephotocard.it/",
  },
  {
    name: "Newer are yet to come",
    description:
      "The next project could be yours, feel free to contact me anytime! :)",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "mssql",
        color: "pink-text-gradient",
      },
    ],
    image: WantYou,
    source_code_link: "https://www.linkedin.com/in/l3lackmarius/",
  },
];

export { services, technologies, experiences, testimonials, projects };
