import React from "react";
import {
  HomeIcon,
  ResumeIcon,
  ProjectsIcon,
  StockIcon,
} from "../components/vectors/vectors";

export const sidebarLinks = [
  {
    icon: <HomeIcon />,
    route: "/",
    label: "Home",
  },
  {
    icon: <ResumeIcon />,
    route: "/resume",
    label: "Resume",
  },
  {
    icon: <ProjectsIcon />,
    route: "/projects",
    label: "Projects",
  },
  {
    icon: <StockIcon />,
    route: "/stocks",
    label: "Stock Explorer",
  },
];
