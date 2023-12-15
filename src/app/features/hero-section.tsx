import { HeroWrapper } from "@/components/hero-wrapper";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <HeroWrapper className="bg-home-hero bg-left">
      <div className="md:max-w-[80%] w-full px-4 md:px-0 my-auto flex flex-col items-center">
        <h1 className=" text-white text-center text-3xl md:text-5xl font-bold md:leading-[50px]">
          Dispatch wherever you want, and <br /> track in real-time
        </h1>

        <p className="text-white text-center md:text-xl font-medium mt-5">
          We manage and schedule deliveries for a variety of user segments,
          ranging from business establishments to individual clients. We ensure
          quality delivery services at great prices, and you can track your
          deliveries at real-time
        </p>

        <Button size="sm" className="mt-10">Get the App</Button>
      </div>
    </HeroWrapper>
  );
};
