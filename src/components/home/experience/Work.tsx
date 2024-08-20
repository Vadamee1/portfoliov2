import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { nameFont } from "@/config/fonts";
import Image from "next/image";

export default function WorkAccordion() {
  return (
    <Accordion type="single" collapsible className="lol-border p-5 rounded-3xl">
      <AccordionItem value="work">
        <AccordionTrigger className="flex gap-4">
          <Image
            alt="Infotec logo"
            src="/experience/InfotecLogo.jpg"
            height={70}
            width={70}
            className="rounded-lg"
          />
          <p className={`${nameFont.className} text-2xl w-96`}>
            Infotec, centro de investigación e innovación en TIC
          </p>
        </AccordionTrigger>
        <AccordionContent>
          <div className="text-xl">
            <p className="overflow-auto">
              Av. San Fernando 37, Col. Toriello Guerra, Tlalpan,
            </p>
            <p>Ciudad de México, CDMX 14050, MX.</p>
            <p>December 2021 - Present</p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
