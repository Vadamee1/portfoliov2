import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import WorkAccordion from "./Work";
import AcademicAccordion from "./Academic";
import { nameFont } from "@/config/fonts";

export default function Experience() {
  return (
    <div className="pt-40 bg-black">
      <Card className="border border-yellow-900 rounded-none bg-black">
        <CardHeader className="py-20">
          <CardTitle className="flex gap-4 justify-center items-center text-7xl">
            <p>Experience</p>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center gap-5 mb-16">
          <div className="grid gap-10 lg:flex lg:gap-32">
            <div className="flex flex-col items-center">
              <p className={`${nameFont.className} text-3xl`}>Work</p>
              <WorkAccordion />
            </div>
            <div className="flex flex-col items-center">
              <p className={`${nameFont.className} text-3xl`}>Academic</p>
              <AcademicAccordion />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
