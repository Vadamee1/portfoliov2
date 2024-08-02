import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { nameFont } from "@/config/fonts";
import Image from "next/image";
import Link from "next/link";

export default function RightSection() {
  return (
    <div className="flex flex-col gap-3 w-96">
      <Card className="border border-yellow-900 bg-gray-950 p-4 rounded-none transition duration-500 hover:scale-110">
        <CardHeader>
          <CardTitle
            className={`${nameFont.className} md:text-xl font-bold justify-self-center flex justify-center`}
          >
            Social media
          </CardTitle>
          <CardDescription>{""}</CardDescription>
        </CardHeader>
        <CardContent className="flex gap-5 justify-center">
          <Link href="https://github.com/Vadamee1">
            <Image
              alt="Github"
              src="/contact/GitHub.png"
              height={70}
              width={70}
              className="rounded-lg"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/davidhernandezdev/">
            <Image
              alt="Linkedln"
              src="/contact/LinkedIn.png"
              height={70}
              width={70}
              className="rounded-lg"
            />
          </Link>
        </CardContent>
      </Card>
      <Card className="border border-yellow-900 bg-gray-950 p-4 rounded-none h-full transition duration-500 hover:scale-110">
        <CardHeader>
          <CardTitle>
            <p
              className={`${nameFont.className} md:text-xl font-bold flex justify-center`}
            >
              Contact
            </p>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-10 mt-10">
          <div>
            <p className={`${nameFont.className}`}>Email:</p>
            <p>david.hernandez.v44@gmail.com</p>
          </div>
          <div>
            <p className={`${nameFont.className}`}>Cellphone:</p>
            <p>+52 55 7150 1208</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
