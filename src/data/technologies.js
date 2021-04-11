import {
  SiRails,
  FaNode,
  AiFillHtml5,
  SiMongodb,
  GrReactjs,
  SiAmazonaws,
  SiJavascript,
  SiHeroku,
  BsBootstrapFill,
  SiPostgresql,
  SiCplusplus,
  SiPython,
  SiScala,
  GrGraphQl,
  DiRuby,
  SiHaskell,
  DiCss3,
	DiJava,
  SiMysql,
} from "react-icons/all";

const defaultSize = "25%";

const technologies = [
  {
    name: "Java",
    type: "backend",
    url: "https://www.java.com/en/",
    icon: () => <DiJava style={{display: "inline", marginRight: "25%" }} size={defaultSize} />
  },
  {
    name: "Scala",
    type: "backend",
    url: "https://www.scala-lang.org/",
    icon: () => <SiScala style={{display: "inline", marginRight: "25%" }} size={defaultSize} />
  },
  {
    name: "Python",
    type: "backend",
    url: "https://www.python.org/",
    icon: () => <SiPython style={{display: "inline", marginRight: "25%" }} size={defaultSize} />
  },
  {
    name: "C++",
    type: "backend",
    url: "https://www.cplusplus.com/",
    icon: () => <SiCplusplus style={{display: "inline", marginRight: "25%" }} size={defaultSize} />
  },
  {
    name: "Ruby",
    type: "backend",
    url: "https://www.ruby-lang.org/en/",
    icon: () => <DiRuby style={{display: "inline", marginRight: "25%" }} size={defaultSize} />
  },
  {
    name: "Haskell",
    type: "backend",
    url: "https://www.haskell.org/",
    icon: () => <SiHaskell style={{display: "inline", marginRight: "25%" }} size={defaultSize} />
  },
  {
    name: "MySql",
    type: "backend",
    url: "https://www.mysql.com/",
    icon: () => <SiMysql style={{display: "inline", marginRight: "25%" }} size={defaultSize} />
  },
  {
    name: "PostgreSQL",
    type: "backend",
    url: "https://www.postgresql.org/",
    icon: () => <SiPostgresql style={{display: "inline", marginRight: "25%" }} size={defaultSize} />
  },
  {
    name: "MongoDB",
    type: "backend",
    url: "https://www.mongodb.com/",
    icon: () => <SiMongodb style={{display: "inline", marginRight: "25%" }} size={defaultSize} />
  },
  {
    name: "JavaScript",
    type: "web",
    url: "https://www.javascript.com/",
    icon: () => <SiJavascript style={{display: "inline", marginRight: "25%" }} size={defaultSize} />
  },
  {
    name: "Node.js",
    type: "web",
    url: "https://nodejs.org/en/",
    icon: () => <FaNode style={{display: "inline", marginRight: "25%" }} size={defaultSize} />
  },
  {
    name: "React",
    type: "web",
    url: "https://reactjs.org/",
    icon: () => <GrReactjs style={{display: "inline", marginRight: "25%" }} size={defaultSize} />
  },
  {
    name: "GraphQL",
    type: "web",
    url: "https://graphql.org/",
    icon: () => <GrGraphQl style={{display: "inline", marginRight: "25%" }} size={defaultSize} />
  },
  {
    name: "RoR (Rails)",
    type: "web",
    url: "https://rubyonrails.org/",
    icon: () => <SiRails style={{display: "inline", marginRight: "25%" }} size={defaultSize} />
  },
  {
    name: "HTML",
    type: "web",
    url: "https://html.com/",
    icon: () => <AiFillHtml5 style={{display: "inline", marginRight: "25%" }} size={defaultSize} />
  },
  {
    name: "CSS",
    type: "web",
    url: "https://www.w3.org/Style/CSS/Overview.en.html",
    icon: () => <DiCss3 style={{display: "inline", marginRight: "25%" }} size={defaultSize} />
  },
  {
    name: "Bootstrap",
    type: "web",
    url: "https://getbootstrap.com/",
    icon: () => <BsBootstrapFill style={{display: "inline", marginRight: "25%" }} size={defaultSize} />
  },
  {
    name: "Heroku",
    type: "devops",
    url: "https://www.heroku.com/",
    icon: () => <SiHeroku style={{display: "inline", marginRight: "25%" }} size={defaultSize} />
  },
  {
    name: "AWS",
    type: "devops",
    url: "https://aws.amazon.com/",
    icon: () => <SiAmazonaws style={{display: "inline", marginRight: "25%" }} size={defaultSize} />
  },
];

export default technologies;
