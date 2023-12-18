import { Button } from "@/components/ui/button";
import Image from "next/image";

type Props = {};
export const DownloadSection = (props: Props) => {
  return (
    <div className="py-6 md:py-14 ">
    <div className="h-[500px] w-full bg-download bg-no-repeat bg-cnter my-10 bg-[250px_-100px]">
      <div className="h-full w-full bg-primary/80 flex justify-center items-end overflow-hidden gap-8">
        <div className="hidden lg:block border-[10px] rounded-xl border-black -mb-[50px] h-[450px]">
          <img
            src="/images/839eafc011728e8bb2e97ee3e25f4088.png"
            alt=""
            className="hidden lg:block"
            width={300} 
            height={226}
          />
        </div>

        <div className="max-w-2xl px-4 text-center lg:text-left pb-8 my-auto">
          <p className=" text-white mb-4 text-[25px] md:text-[35px] font-bold">
            Download our app and better experience Dispatch Hub
          </p>
          <p className="flex-[1_0_0] text-white text-xl not-italic font-medium ">
            Download our app today and better experience our services.
            Dispatch your goods through us to any part of the country.
          </p>
        </div>
      </div>
    </div>
  </div>
  );
};
