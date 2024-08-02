import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import NextTech from "./NextTech";
import Libraries from "./Libraries";

export default function NextCard() {
  return (
    <div className="pt-40 bg-black">
      <Card className="border border-yellow-900 rounded-none bg-black">
        <CardHeader className="pt-20">
          <CardTitle className="flex gap-4 justify-center items-center text-7xl">
            <Image
              alt="Next image icon"
              src="/skills/Next.png"
              height={130}
              width={130}
            />
            <span>Next.js</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-5">
          <NextTech />
          <Libraries />
        </CardContent>
      </Card>
    </div>
  );
}
