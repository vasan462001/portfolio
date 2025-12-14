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
      { 
        name: "HTML", 
        icon: <AiFillHtml5 size={50} className="text-orange-500 dark:text-orange-500" /> 
      },
      { 
        name: "CSS", 
        icon: <DiCss3 size={50} className="text-blue-500 dark:text-blue-500" /> 
      },
      { 
        name: "JavaScript", 
        icon: <IoLogoJavascript size={50} className="text-yellow-500 dark:text-yellow-500" /> 
      },
	    { 
        name: "TypeScript", 
        icon: <SiTypescript size={50} className="text-yellow-500 dark:text-yellow-500" /> 
      },
      { 
        name: "Python", 
        icon: <FaPython size={50}  /> 
      },
      { 
        name: "React", 
        icon: <FaReact size={50} className="text-cyan-500 dark:text-cyan-500" /> 
      },
      { 
        name: "Next.js", 
        icon: <TbBrandNextjs size={50} className="text-gray-800 dark:text-gray-200" /> 
      },
      { 
        name: "FastAPI", 
        icon: <SiFastapi size={50} className="text-teal-500 dark:text-teal-500" /> 
      },
      { 
        name: "Tailwind CSS", 
        icon: <TbBrandTailwind size={50} className="text-teal-500 dark:text-teal-500" /> 
      },
      { 
        name: "Material UI", 
        icon: <SiMui size={50} className="text-blue-500 dark:text-blue-500" /> 
      },
      { 
        name: "Bootstrap", 
        icon: <BsBootstrap size={50} className="text-purple-600 dark:text-purple-500" /> 
      },
      { 
        name: "Styled Components", 
        icon: <SiStyledcomponents size={50} className="text-pink-500 dark:text-pink-500" /> 
      },
	     { 
        name: "MongoDB", 
        icon: <SiMongodb size={50} className="text-green-500 dark:text-green-500" /> 
      },
      { 
        name: "MySQL", 
        icon: <SiMysql size={50}  /> 
      },
 
      { 
        name: "GitHub", 
        icon: <AiFillGithub size={50} className="text-gray-800 dark:text-gray-200" /> 
      },
    
      { 
        name: "VS Code", 
        icon: <DiVisualstudio size={50} className="text-blue-500 dark:text-blue-500" /> 
      },
      { 
        name: "Android Studio", 
        icon: <SiAndroidstudio size={50} className="text-green-500 dark:text-green-500" /> 
      },
 
      { 
        name: "Jira", 
        icon: <SiJira size={50} className="text-blue-500 dark:text-blue-500" /> 
      }
  
    ]
  },

];