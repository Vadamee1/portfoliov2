import { Card, CardContent } from "@/components/ui/card";
import { NEXTLIBRARIES } from "@/constants/skills";
import Image from "next/image";

export default function Libraries() {
  return (
    <div className="grid grid-cols-2 lg:flex">
      {NEXTLIBRARIES.map((skill) => (
        <Card
          key={skill.key}
          className="border border-transparent bg-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <CardContent className="flex flex-col items-center gap-5 pt-5">
            <Image
              alt={`${skill.name} image"`}
              src={skill.src}
              height={50}
              width={50}
              className={`${
                (skill.key === 3 || skill.key === 4) && "filter invert"
              } rounded-lg`}
            />
            <p className="text-xl">{skill.name}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
