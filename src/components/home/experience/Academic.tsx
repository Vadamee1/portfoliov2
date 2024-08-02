import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { nameFont } from "@/config/fonts";
import Image from "next/image";

export default function AcademicAccordion() {
  return (
    <Accordion type="single" collapsible className="lol-border p-5 rounded-3xl">
      <AccordionItem value="work">
        <AccordionTrigger className="flex gap-4">
          <Image
            alt="UVM logo"
            src="/experience/UVMLogo.jpg"
            height={70}
            width={70}
            className="rounded-lg"
          />
          <div className={`${nameFont.className} text-2xl w-96`}>
            <p>UVM</p>
            <p>Universidad del Valle de México</p>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="text-xl">
            <p className="flex">
              Calzada de Tlalpan 3016/3058, Mexico City, Mexico.
            </p>
            <p>August 2020 - Present</p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
