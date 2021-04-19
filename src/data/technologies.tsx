import {
  SiRails,
  FaNode,
  AiFillHtml5,
  SiMongodb,
  GrReactjs,
  SiAmazonaws,
  SiJavascript,
  SiTypescript,
  SiHeroku,
  SiFirebase,
  BsBootstrapFill,
  SiPostgresql,
  SiCplusplus,
  SiPython,
  SiScala,
  GrGraphQl,
  DiRuby,
  SiHaskell,
  DiCss3,
  SiSass,
  DiJava,
  SiMysql,
  DiProlog,
  VscFileBinary,
} from "react-icons/all";

const defaultSize: string = "25%";

type Technologies = {
  name: string;
  type: string;
  url: string;
  icon: () => JSX.Element;
  hover: string;
};

const technologies: Technologies[] = [
  {
    name: "Java",
    type: "backend",
    url: "https://www.java.com/en/",
    icon: () => (
      <DiJava
        style={{ display: "inline", marginRight: "25%" }}
        size={defaultSize}
      />
    ),
    hover: "Best language ever",
  },
  {
    name: "Scala",
    type: "backend",
    url: "https://www.scala-lang.org/",
    icon: () => (
      <SiScala
        style={{ display: "inline", marginRight: "25%" }}
        size={defaultSize}
      />
    ),
    hover: "So cool",
  },
  {
    name: "Python",
    type: "backend",
    url: "https://www.python.org/",
    icon: () => (
      <SiPython
        style={{ display: "inline", marginRight: "25%" }}
        size={defaultSize}
      />
    ),
    hover: "If you're lazy and you know it clap your hands",
  },
  {
    name: "C++",
    type: "backend",
    url: "https://www.cplusplus.com/",
    icon: () => (
      <SiCplusplus
        style={{ display: "inline", marginRight: "25%" }}
        size={defaultSize}
      />
    ),
    hover: "Speed, speed, speed*",
  },
  {
    name: "Ruby",
    type: "backend",
    url: "https://www.ruby-lang.org/en/",
    icon: () => (
      <DiRuby
        style={{ display: "inline", marginRight: "25%" }}
        size={defaultSize}
      />
    ),
    hover: "Elegant",
  },
  {
    name: "Haskell",
    type: "backend",
    url: "https://www.haskell.org/",
    icon: () => (
      <SiHaskell
        style={{ display: "inline", marginRight: "25%" }}
        size={defaultSize}
      />
    ),
    hover: "Worst language ever",
  },
  {
    name: "MySql",
    type: "backend",
    url: "https://www.mysql.com/",
    icon: () => (
      <SiMysql
        style={{ display: "inline", marginRight: "25%" }}
        size={defaultSize}
      />
    ),
    hover: "Solid DB",
  },
  {
    name: "PostgreSQL",
    type: "backend",
    url: "https://www.postgresql.org/",
    icon: () => (
      <SiPostgresql
        style={{ display: "inline", marginRight: "25%" }}
        size={defaultSize}
      />
    ),
    hover: "Another solid DB",
  },
  {
    name: "MongoDB",
    type: "backend",
    url: "https://www.mongodb.com/",
    icon: () => (
      <SiMongodb
        style={{ display: "inline", marginRight: "25%" }}
        size={defaultSize}
      />
    ),
    hover: "Awesome.",
  },
  {
    name: "Firebase",
    type: "backend",
    url: "https://firebase.google.com/",
    icon: () => (
      <SiFirebase
        style={{ display: "inline", marginRight: "25%" }}
        size={defaultSize}
      />
    ),
    hover: "Nice",
  },
  {
    name: "Assembly",
    type: "backend",
    url: "https://en.wikipedia.org/wiki/Assembly_language",
    icon: () => (
      <VscFileBinary
        style={{ display: "inline", marginRight: "25%" }}
        size={defaultSize}
      />
    ),
    hover: "Why use Python when you can code assembly?",
  },
  {
    name: "Prolog",
    type: "backend",
    url: "https://www.swi-prolog.org/",
    icon: () => (
      <DiProlog
        style={{ display: "inline", marginRight: "25%" }}
        size={defaultSize}
      />
    ),
    hover: "What even is this",
  },
  {
    name: "JavaScript",
    type: "web",
    url: "https://www.javascript.com/",
    icon: () => (
      <SiJavascript
        style={{ display: "inline", marginRight: "25%" }}
        size={defaultSize}
      />
    ),
    hover: "What can't it do?",
  },
  {
    name: "TypeScript",
    type: "web",
    url: "https://www.typescriptlang.org",
    icon: () => (
      <SiTypescript
        style={{ display: "inline", marginRight: "25%" }}
        size={defaultSize}
      />
    ),
    hover: "TypeScript > JavaScript",
  },
  {
    name: "Node.js",
    type: "web",
    url: "https://nodejs.org/en/",
    icon: () => (
      <FaNode
        style={{ display: "inline", marginRight: "25%" }}
        size={defaultSize}
      />
    ),
    hover: "Absolutely awesome",
  },
  {
    name: "React",
    type: "web",
    url: "https://reactjs.org/",
    icon: () => (
      <GrReactjs
        style={{ display: "inline", marginRight: "25%" }}
        size={defaultSize}
      />
    ),
    hover: "I love this (ps. Angular sucks)",
  },
  {
    name: "GraphQL",
    type: "web",
    url: "https://graphql.org/",
    icon: () => (
      <GrGraphQl
        style={{ display: "inline", marginRight: "25%" }}
        size={defaultSize}
      />
    ),
    hover: "Incredible",
  },
  {
    name: "RoR (Rails)",
    type: "web",
    url: "https://rubyonrails.org/",
    icon: () => (
      <SiRails
        style={{ display: "inline", marginRight: "25%" }}
        size={defaultSize}
      />
    ),
    hover: "Really good",
  },
  {
    name: "HTML",
    type: "web",
    url: "https://html.com/",
    icon: () => (
      <AiFillHtml5
        style={{ display: "inline", marginRight: "25%" }}
        size={defaultSize}
      />
    ),
    hover: "Hardest programming language ever",
  },
  {
    name: "CSS",
    type: "web",
    url: "https://www.w3.org/Style/CSS/Overview.en.html",
    icon: () => (
      <DiCss3
        style={{ display: "inline", marginRight: "25%" }}
        size={defaultSize}
      />
    ),
    hover: "I'll never master this",
  },
  {
    name: "Sass",
    type: "web",
    url: "https://sass-lang.com/", 
    icon: () => (
      <SiSass
        style={{ display: "inline", marginRight: "25%" }}
        size={defaultSize}
      />
    ),
    hover: "Cleaner CSS",
  },
  {
    name: "Bootstrap",
    type: "web",
    url: "https://getbootstrap.com/",
    icon: () => (
      <BsBootstrapFill
        style={{ display: "inline", marginRight: "25%" }}
        size={defaultSize}
      />
    ),
    hover: "My saviour from CSS",
  },
  {
    name: "Heroku",
    type: "devops",
    url: "https://www.heroku.com/",
    icon: () => (
      <SiHeroku
        style={{ display: "inline", marginRight: "25%" }}
        size={defaultSize}
      />
    ),
    hover: "So easy",
  },
  {
    name: "AWS",
    type: "devops",
    url: "https://aws.amazon.com/",
    icon: () => (
      <SiAmazonaws
        style={{ display: "inline", marginRight: "25%" }}
        size={defaultSize}
      />
    ),
    hover: "Amazing services",
  },
];

export default technologies;
