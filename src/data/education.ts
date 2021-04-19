import kcl from "../images/kcl_logo.svg";

type Education = {
  title: string;
  description: string;
  image: string;
  yearRange: string;
  labels: string[];
};

const education: Education[] = [
  {
    title: "King's College London",
    description: "Studying Computer Science BSc",
    image: kcl,
    yearRange: "2019-2022",
    labels: [
      "Java",
      "C++",
      "Scala",
      "Ruby on Rails",
      "Data Structures",
      "Databases",
      "Discrete Mathematics",
      "Programming Language Paradigms",
      "Concurrency",
      "Computer Architecture",
    ],
  },
];

export default education;
