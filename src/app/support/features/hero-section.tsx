import { HeroWrapper } from "@/components/hero-wrapper";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <HeroWrapper className="bg-support-hero bg-center">
      <div className="w-[80%] my-auto flex flex-col items-center">
        <h1 className=" text-white text-center text-4xl font-bold leading-[50px]">
          How can we help you?
        </h1>

        <div className="bg-white rounded-full p-1.5 my-5 lg:w-[50%]">
          <input type="text" className="border-0 outline-none bg-transparent px-2 w-full" placeholder="Search here" />
        </div>
      </div>
    </HeroWrapper>
  );
};
