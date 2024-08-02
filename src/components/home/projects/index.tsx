import Image from "next/image";
import ProjectsCard from "./ProjectsCard";
import { nameFont } from "@/config/fonts";

export default function Projects() {
  return (
    <div className="flex flex-col pt-36 items-center">
      <Image alt="Icon" src="/ProjectsIcon.png" height={20} width={20} />
      <div className="flex justify-center items-center mt-4">
        <div>
          <Image
            alt="Left Icon"
            src="/LeftSeparator.png"
            height={1}
            width={279}
            className="rotate-180"
          />
        </div>
        <p className={`${nameFont.className} text-xl`}>Projects</p>
        <div>
          <Image
            alt="Right Icon"
            src="/RightSeparator.png"
            height={1}
            width={279}
          />
        </div>
      </div>
      <ProjectsCard />
    </div>
  );
}
