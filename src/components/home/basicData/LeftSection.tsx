import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { listFont, nameFont } from "@/config/fonts";
import { SOFTSKILLS } from "@/constants/skills";

export default function LeftSection() {
  return (
    <div className="grid gap-3 w-96">
      <Card className="border border-yellow-900 bg-gray-950 p-4 rounded-none transition duration-500 hover:scale-110">
        <CardContent className="grid justify-center mt-5">
          <p
            className={`${nameFont.className} md:text-xl font-bold justify-self-center`}
          >
            Data Science Engineer
          </p>
          <p className={`${nameFont.className} justify-self-center`}>
            Universidad del Valle de México
          </p>
        </CardContent>
      </Card>
      <Card className="border border-yellow-900 bg-gray-950 p-4 rounded-none transition duration-500 hover:scale-110">
        <CardHeader>
          <CardTitle className={`${nameFont.className}`}>
            Social skills
          </CardTitle>
          <CardDescription>{""}</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-2">
          {SOFTSKILLS.map((skill) => (
            <li key={skill.key} className={`${listFont.className} text-2xl`}>
              {skill.name}
            </li>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
