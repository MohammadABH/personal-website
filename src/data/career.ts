import intuit from "../images/intuit_logo.jpg";

type Career = {
  title: string;
  description: string;
  image: string;
  yearRange: string;
  labels: string[];
};


const career: Career[] = [
  {
    title: "Intuit",
    description: "Software Engineer Intern",
    image: intuit,
    yearRange: "2021",
    labels: [],
  },
];

export default career;
