import { Card, CardContent } from "@/components/ui/card";
import { NEXTSKILLS } from "@/constants/skills";
import Image from "next/image";

export default function NextTech() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4">
      {NEXTSKILLS.map((skill) => (
        <Card
          key={skill.key}
          className="border border-transparent bg-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <CardContent className="flex flex-col items-center gap-5 pt-5">
            <Image
              alt={`${skill.name} image"`}
              src={skill.src}
              height={100}
              width={100}
              className={`${
                (skill.key === 5 || skill.key === 6) && "filter invert"
              } rounded-lg w-16`}
            />
            <p className="text-xl md:text-3xl">{skill.name}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
