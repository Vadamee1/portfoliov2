import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { nameFont } from "@/config/fonts";
import Image from "next/image";

export default function CentralSection() {
  return (
    <div className="flex flex-col gap-3 w-96 md:w-full h-full">
      <Card className="border border-yellow-900 bg-gray-950 p-4 rounded-none h-80 transition duration-500 hover:scale-110">
        <CardContent className="relative pt-24 pb-24">
          <div className="absolute -top-16 z-10 flex justify-center items-center w-full">
            <div className="relative">
              <Image
                alt="David image"
                src="/Cat.png"
                height={150}
                width={150}
                className="absolute z-0"
              />
              <Image
                alt="Icon frame"
                src="/ChampionIconFrame.png"
                height={200}
                width={200}
                className="relative z-10"
                style={{ top: "-25px", left: "-25px" }}
              />
            </div>
          </div>
          <p className={`${nameFont.className} text-3xl text-center mt-12`}>
            Fullstack developer
          </p>
        </CardContent>
      </Card>
      <Card className="flex items-center border border-yellow-900 bg-gray-950 rounded-none h-full w-full max-w-md p-5 transition duration-500 hover:scale-110">
        <CardContent className="flex flex-col justify-center max-h-72">
          <p className="text-xl">
            {
              "I'm thrilled to connect with fellow professionals in the tech world! My name is David, and I'm a passionate Full Stack Developer specializing in JavaScript technologies."
            }
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
