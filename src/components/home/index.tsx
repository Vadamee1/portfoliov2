import { nameFont, titleFont } from "@/config/fonts";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center mt-80 gap-3 bg-gradient-to-t from-black">
      <h1
        className={`${titleFont.className} text-3xl sm:text-5xl lg:text-7xl font-bold dark:text-white`}
      >
        David Hernandez Martinez
      </h1>
      <Image alt="Divider" src="/divider.png" height={2000} width={2000} />
      <h2
        className={`${nameFont.className} text-xl md:text-4xl font-bold mt-5`}
      >
        Software developer
      </h2>
    </div>
  );
}
