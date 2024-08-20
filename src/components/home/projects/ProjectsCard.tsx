import Link from "next/link";
import { Card, CardFooter } from "../../ui/card";
import { PROJECTS } from "@/constants/projects";

export default function ProjectsCard() {
  return (
    <div className="grid lg:grid-cols-3 gap-10 w-full px-5 lg:px-20 pt-5">
      {PROJECTS.map((project) => (
        <div key={project.key}>
          <Link href={project.href}>
            <Card
              className={`${project.src} bg-cover bg-center transition duration-500 hover:scale-110 h-72 `}
            >
              <CardFooter>
                <p>{project.title}</p>
              </CardFooter>
            </Card>
          </Link>
        </div>
      ))}
    </div>
  );
}
