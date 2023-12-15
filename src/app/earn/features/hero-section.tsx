import { HeroWrapper } from "@/components/hero-wrapper";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <HeroWrapper
      className="bg-dispatch-hub-hero bg-right max-h-[785px]"
      classes={{
        inner: "items-start",
      }}
    >
      <div className="px-5 lg:px-16 my-auto flex flex-col w-full md:w-[60%]">
        <h1 className=" text-white text-4xl md:text-5xl font-bold leading-[50px]">
          Earn with Dispatch Hub
        </h1>

        <p className="text-white text-xl font-medium mt-5">
        Own a vehicle (motorcycle or car)? <br/>
        Become a rider or courier with Dispatch Hub today and join us in the business of making dispatch easy and also affordable to all.
        </p>
      </div>
    </HeroWrapper>
  );
};
