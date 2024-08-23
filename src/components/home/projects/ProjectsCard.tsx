import Link from "next/link";
import { Card, CardContent, CardFooter } from "../../ui/card";
import { PROJECTS } from "@/constants/projects";

export default function ProjectsCard() {
  return (
    <div className="grid lg:grid-cols-3 gap-10 w-full px-5 lg:px-20 pt-5">
      {PROJECTS.map((project) => (
        <div key={project.key}>
          <Link href={project.href}>
            <Card
              className={`flex flex-col ${project.src} rounded-none bg-cover bg-center transition duration-200 hover:scale-110 hover:border-yellow-900 h-56 md:h-72 items-stretch justify-between`}
            >
              <CardContent />
              <CardFooter className="border-t-2 border-yellow-900 bg-black opacity-80 p-4">
                <p className="flex w-full justify-center">{project.title}</p>
              </CardFooter>
            </Card>
          </Link>
        </div>
      ))}
    </div>
  );
}
