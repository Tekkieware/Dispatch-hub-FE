"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";


export const DispatchHubSection = () => {
  const [active, setActive] = useState(0);
  return (
    <section className="py-14 px-5 lg:px-16">
      <p className="text-[#0F0E0E] text-center text-[40px] font-extrabold leading-[45px]">
        Earn With Dispatch Hub
      </p>

      <div className="flex items-center gap-10 justify-center py-10">
        {["Courier", "Vehicle Owner"].map((item, index) => (
          <Button
            key={index}
            variant={active === index ? "solid" : "ghost"}
            onClick={() => setActive(index)}
          >
            {item}
          </Button>
        ))}
      </div>

      <div className="grid grid-col-1 lg:grid-cols-2 gap-5">
        <div className="py-5">
          <h1 className="text-center md:text-left text-black text-4xl font-bold">
            How to earn with Dispatch Hub
          </h1>
          <div className="py-4 px-2 gap-3">
          <div className="p-1">
          <p className=" text-black text-2xl font-bold leading-8">
            Drive more, earn more
          </p>
          <p className="shrink-0 self-stretch text-black text-xl font-semi-bold">
            The more deliveries you make as more customers request deliveries,
            increases you chances of earning more.
          </p>
          </div>
          <div className="p-1">
          <p className="text-black text-2xl font-bold leading-8">
            Set your schedule
          </p>
          <p className="shrink-0 self-stretch text-black text-xl font-semi-bold">
            Being prompt and keeping to schedules earns you some bonus.
          </p>
          </div>

          <p className="text-black p-3 text-lg font-semibold ">Learn more</p>
          </div>

        </div>
        <div className="h-[300px] md:h-[386px] rounded-3xl overflow-hidden">
          <Image
            src="/images/3adcbed1de65504be63ae379b4200276.png"
            alt=""
            width={300}
            height={400}
            className="w-full h-full object-cover object-right"
          />
        </div>
      </div>
    </section>
  );
};
