import { Button } from "@/components/ui/button";

type Props = {};
export const AboutUsSection = (props: Props) => {
  return (
    <div className="my-14  h-[550px] bg-about-us bg-cover bg-center bg-no-repeat">
      <div className="h-full w-full bg-black/50 px-5 lg:px-16 flex flex-col items-center py-10">
        <p className="text-white text-center text-[40px] font-extrabold leading-[45px]">
          About Us
        </p>

        <div className="bg-black/30 w-[90%] my-4 md:my-8 p-2 md:p-5">
          <p className="shrink-0 text-white text-center md:text-xl not-italic font-medium">
            We are a mobile delivery platform where customers can book a
            dispatch rider for delivering goods. We offer a reliable way for
            customers to request and track the delivery process of their goods.
            We also offer additional features such as wallet payments, photo
            capture for goods verification, real-time rider tracking, and the
            option to choose between a bike or a cab based size of goods.
          </p>
        </div>

        <Button size="sm" className="bg-white hover:bg-white/90 mt-8 text-black">Learn more</Button>
      </div>
    </div>
  );
};
