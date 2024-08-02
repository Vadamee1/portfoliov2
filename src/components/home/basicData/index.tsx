import CentralSection from "./CentralSection";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

export default function BasicData() {
  return (
    <div className="grid lg:flex justify-center gap-3 md:px-80 pt-40 bg-black">
      <div className="lg:hidden">
        <CentralSection />
      </div>
      <LeftSection />
      <div className="hidden lg:block">
        <CentralSection />
      </div>
      <RightSection />
    </div>
  );
}
