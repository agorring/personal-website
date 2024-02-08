import {
  HTMLCSSIcon,
  JavaIcon,
  ReactIcon,
  NodeIcon,
  AWSIcon,
  TypeScriptIcon,
  SwiftIcon,
  CPlusPlusIcon,
  PythonIcon,
  GitIcon,
  GitHubIcon,
  VSCodeIcon,
  KotlinIcon,
  LinuxIcon,
  SQLIcon,
  DynamoIcon,
  MongoIcon,
  GraphQLIcon,
} from "../components/vectors/vectors";

export const languages = [
  {
    category: "Web and Cloud",
    languages: [
      {
        name: "HTML/CSS",
        icon: <HTMLCSSIcon />,
      },
      {
        name: "React.js",
        icon: <ReactIcon />,
      },
      {
        name: "Node.js",
        icon: <NodeIcon />,
      },
      {
        name: "AWS",
        icon: <AWSIcon />,
      },
      {
        name: "TypeScript",
        icon: <TypeScriptIcon />,
      },
    ],
  },
  {
    category: "Object-Oriented Programming",
    languages: [
      {
        name: "Swift",
        icon: <SwiftIcon />,
      },
      {
        name: "Java",
        icon: <JavaIcon />,
      },
      {
        name: "C++",
        icon: <CPlusPlusIcon />,
      },
      {
        name: "Python",
        icon: <PythonIcon />,
      },
      {
        name: "Kotlin",
        icon: <KotlinIcon />,
      },
    ],
  },
  {
    category: "Tools and Systems",
    languages: [
      {
        name: "Git",
        icon: <GitIcon />,
      },
      {
        name: "GitHub",
        icon: <GitHubIcon />,
      },
      {
        name: "VSCode",
        icon: <VSCodeIcon />,
      },
      {
        name: "Linux",
        icon: <LinuxIcon />,
      },
    ],
  },
  {
    category: "Data",
    languages: [
      {
        name: "SQL",
        icon: <SQLIcon />,
      },
      {
        name: "DynamoDB",
        icon: <DynamoIcon />,
      },
      {
        name: "MongoDB",
        icon: <MongoIcon />,
      },
      {
        name: "GraphQL",
        icon: <GraphQLIcon />,
      },
    ],
  },
];
