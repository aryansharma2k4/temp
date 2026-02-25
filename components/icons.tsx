import { 
  SiNextdotjs, 
  SiTypescript, 
  SiReact, 
  SiPrisma, 
  SiTailwindcss, 
  SiRedux, 
  SiAppwrite,
  SiWebrtc,
  SiExpress,
} from "react-icons/si";
import { FaJava, FaNetworkWired } from "react-icons/fa";
import { BsStars } from "react-icons/bs";

export const NextIcon = () => <SiNextdotjs className="w-3.5 h-3.5 text-black dark:text-white" />;
export const TSIcon = () => <SiTypescript className="w-3.5 h-3.5" color="#3178C6" />;
export const ReactIcon = () => <SiReact className="w-4 h-4" color="#61DAFB" />;
export const PrismaIcon = () => <SiPrisma className="w-3.5 h-3.5 text-black dark:text-white" />;
export const TailwindIcon = () => <SiTailwindcss className="w-4 h-4" color="#06B6D4" />;
export const ReduxIcon = () => <SiRedux className="w-3.5 h-3.5" color="#764ABC" />;
export const AppwriteIcon = () => <SiAppwrite className="w-3.5 h-3.5" color="#F02E65" />;
export const WebRTCIcon = () => <SiWebrtc className="w-4 h-4 text-[#333366] dark:text-[#8ba0ff]" />;
export const JavaIcon = () => <FaJava className="w-4 h-4" color="#5382a1" />;
export const NetworkIcon = () => <FaNetworkWired className="w-3.5 h-3.5 text-slate-500" />;
export const AgentKitIcon = () => <BsStars className="w-3.5 h-3.5" color="#EAB308" />;
export const ExpressIcon = ()=> <SiExpress/>