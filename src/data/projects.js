import avatar from "../images/avatar.jpg";
import snapsense from "../images/snapsense_logo.png";
import socialmedia from "../images/socialmedia_logo.svg";
import mandelbrot from "../images/mandelbrot.jpg";
import sudoku from "../images/sudoku.png";
import bank from "../images/bank.ico";
import hackKings from "../images/hackkings.png";
import airbnbapp from "../images/airbnbapp.png";
import money from "../images/money.ico";

const projects = [
  {
    title: "SnapSenseAI",
    description:
      "Designed and built a full-stack web application for a tele-medicine startup that allows patients to submit questionnaires, upload images of diabetic ulcers and share them with doctors to receive feedback.",
    image: snapsense,
    yearRange: "2021",
    labels: [
      "React",
      "Node.js",
      "GraphQL",
      "Express",
      "MySQL",
      "Sequelize (ORM)",
      "Jest",
      "AWS EC2 Instance",
      "Amazon RDS",
      "AWS S3 Bucket",
      "GitHub",
      "Agile Development",
    ],
  },
  {
    title: "Social Media App",
    description:
      "Built a social media web application that allows users to register, login, create posts, like posts and comment on posts. Implemented a bunch of cool technical features such as client side caching and GraphQL subscriptions.",
    image: socialmedia,
    yearRange: "2021",
    labels: ["React", "Node.js", "GraphQL", "Express", "MongoDB", "Mongoose"],
  },
  {
    title: "This Website (it counts right?)",
    description:
      "Built (this) portfolio website to showcase some cool facts about myself, hope you enjoyed! (My goal was to keep it clean and simple, what do you think?)",
    image: avatar,
    yearRange: "2021",
    labels: ["React", "JavaScript"],
  },
  {
    title: "Banking Application",
    description:
      "Designed and built a full stack scam baiting website in a team of 5 using Ruby on Rails. Utilized agile development techniques (i.e., scrum and Kanban boards) and used a shared repository on GitHub.",
    image: bank,
    yearRange: "2020",
    labels: [
      "Ruby",
      "Ruby on Rails",
      "HTML",
      "CSS",
      "Bootstrap",
      "GitHub",
      "Agile Development",
      "Kanban Board",
    ],
  },
  {
    title: "Programming Language Interpreter",
    description:
      "Built an interpreter for a small (esoteric) programming language called brainf***, which is turing complete.",
    image: mandelbrot,
    yearRange: "2020",
    labels: ["Scala"],
  },
  {
    title: "Sudoku Solver",
    description:
      "Built a C++ Sudoku solver that is able to solve over 100 boards of any difficulty in less than 10 seconds, and can solve 16x16 boards in milliseconds.",
    image: sudoku,
    yearRange: "2020",
    labels: ["C++"],
  },
  {
    title: "Airbnb Desktop Application",
    description:
      "Designed and implemented an Airbnb desktop application in Java using the JavaFX framework along with 3 other team members in a university project.",
    image: airbnbapp,
    yearRange: "2019",
    labels: ["Java", "JavaFX", "CSS", "Intellij"],
  },
  {
    title: "Hackathon (HackKings 6.0)",
    description:
      "Won the HackKings 6.0 hackathon hosted by KCL Tech and sponsored by Vodafone, Bloomberg, Capital One and American Express along with 3 other members.",
    image: hackKings,
    yearRange: "2019",
    labels: ["JavaScript", "PHP", "HTML", "CSS", "Bootstrap", "#nosleep"],
  },
  {
    title: "Manage your Expenses",
    description:
      "Created a fully functioning budgeting/expenses web application using React JS, Redux, Firebase and deployed using Heroku.",
    image: money,
    yearRange: "2019",
    labels: ["JavaScript", "React", "Redux", "Firebase", "Heroku"],
  },
];

export default projects;
