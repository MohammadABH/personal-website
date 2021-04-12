import harvardedx from "../images/harvardedx.jpg";
import linkedin from "../images/linkedin.svg";
import udemy from "../images/udemy.png";
import eduonix from "../images/eduonix.png";

const certificates = [
  {
    title: "Technology Entrepreneurship: Lab to Market",
    description:
      "Business and Technology Entrepreneurship course on Harvard edX",
    image: harvardedx,
    yearRange: "2020",
    labels: [
      "Business",
      "Technology Entrepreneurship",
      "Innovation",
      "Harvard edX",
    ],
    link:
      "https://courses.edx.org/certificates/8ca7059bc1eb46f29f8d0bd009b471f8",
  },
  {
    title: "Ruby on Rails Course on LinkedIn Learning",
    description: "Ruby on Rails 6 Essential Training",
    image: linkedin,
    yearRange: "2020",
    labels: ["Ruby", "Ruby on Rails", "Rest API", "LinkedIn Learning"],
    link:
      "https://www.linkedin.com/learning/ruby-on-rails-6-essential-training",
  },
  {
    title: "React Course on Udemy",
    description: "The Complete React Developer Course (w/ Hooks and Redux)",
    image: udemy,
    yearRange: "2020",
    labels: ["React", "Redux", "Firebase", "Udemy"],
    link:
      "https://www.udemy.com/certificate/UC-d6869142-e42e-40fc-86e4-7e95ffce77a9/",
  },
  {
    title: "JavaScript Course on Udemy",
    description: "The Complete JavaScript Course 2021: From Zero to Expert!",
    image: udemy,
    yearRange: "2019",
    labels: ["JavaScript", "CSS", "Udemy"],
    link: "https://www.udemy.com/certificate/UC-PROWO7LJ/",
  },
  {
    title: "HTML and CSS Course on Udemy",
    description: "Build Responsive Real World Websites with HTML5 and CSS3",
    image: udemy,
    yearRange: "2019",
    labels: ["HTML", "CSS", "Udemy"],
    link: "https://www.udemy.com/certificate/UC-CISFUQY4/",
  },
  {
    title: "Ethical Hacking Course on Eduonix",
    description: "Be A White Hat Hacker and Pen Tester ",
    image: eduonix,
    yearRange: "2018",
    labels: ["Ethical Hacking", "Eduonix"],
    link: "https://www.eduonix.com/certificate/bdfc0cf835",
  },
];

export default certificates;
