import { HeroWrapper } from "@/components/hero-wrapper";
import { Button } from "@/components/ui/button";
import '../style.css'

export const HeroSection = () => {
  return (
    <HeroWrapper className="bg-dispatch-hero bg-center">
      <div className="w-[80%] my-auto flex flex-col items-center">
        <h1 className="capitalize text-white text-center text-4xl font-bold leading-[50px]">
        dispatch wherever you want, and <br />track in real time
        </h1>

        <div className="p-1.5 my-5 lg:w-[60%]">
          <p className="text-white text-xl font-medium text-center">
          We manage schedule deliveries for variety of  user segments, ranging from
business established to individual clients. We ensure quickly delivery service
at great price, and you can track your deliveries at real time
        </p>
        </div>
        <div>
        <Button className="mx-auto mt-5 ">Get the App</Button>
        </div>
      </div>
     
    </HeroWrapper>
  );
};
