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
    <Accordion
      type="single"
      collapsible
      className="lol-border p-5 w-96 md:w-auto rounded-3xl"
    >
      <AccordionItem value="work">
        <AccordionTrigger className="flex gap-4">
          <Image
            alt="Infotec logo"
            src="/experience/InfotecLogo.jpg"
            height={70}
            width={70}
            className="rounded-lg"
          />
          <p className={`${nameFont.className} md:w-96 md:text-2xl`}>
            Infotec, centro de investigación e innovación en TIC
          </p>
        </AccordionTrigger>
        <AccordionContent>
          <div className="md:text-xl">
            <p className="w-full">
              San Fernando 37, Toriello Guerra, Tlalpan, CDMX.
            </p>
            <p></p>
            <p>December 2021 - Present</p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
