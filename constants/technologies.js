import { AiFillGithub, AiFillGitlab, AiFillHtml5 } from "react-icons/ai";
import { BsBootstrap } from "react-icons/bs";
import { DiCss3, DiVisualstudio } from "react-icons/di";
import { FaFigma, FaReact, FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiFlutterFill } from "react-icons/ri";
import {
  SiAdobexd,
  SiAndroidstudio,
  SiFirebase,
  SiJira,
  SiMui,
  SiStyledcomponents,
  SiFastapi,
  SiMongodb,
  SiMysql,
  SiTypescript,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandHeadlessui, TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";

export const TECHNOLOGIES = [
  {
    items: [
      { name: "HTML", icon: <AiFillHtml5 className="text-white-500" /> },
      { name: "CSS", icon: <DiCss3 className="text-white-500" /> },
      { name: "JavaScript", icon: <IoLogoJavascript className="text-white-500" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-white-600" /> }, // Made slightly darker blue to stand out in dark mode
      { name: "Python", icon: <FaPython className="text-white-500 dark" /> }, // Python is officially blue/yellow, added dark mode yellow
      { name: "React", icon: <FaReact className="text-white-500" /> },
      { name: "Next.js", icon: <TbBrandNextjs className="text-white-500" /> }, // Pure black/white looks best for Next.js
      { name: "FastAPI", icon: <SiFastapi className="text-white-500" /> },
      { name: "Tailwind CSS", icon: <TbBrandTailwind className="text-white-500" /> },
      { name: "Material UI", icon: <SiMui className="text-white-500" /> },
      { name: "Bootstrap", icon: <BsBootstrap className="text-white-600" /> },
      { name: "Styled Components", icon: <SiStyledcomponents className="text-white-500" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-white-500" /> },
      { name: "MySQL", icon: <SiMysql className="text-white-500" /> }, // Added blue class since you removed it before
      { name: "GitHub", icon: <AiFillGithub className="text-gray-800 dark:text-white" /> }, // Pure white looks best in dark mode
      { name: "VS Code", icon: <DiVisualstudio className="text-white-500" /> },
      { name: "Android Studio", icon: <SiAndroidstudio className="text-white-500" /> },
      { name: "Jira", icon: <SiJira className="text-white-500" /> }
    ]
  },
];