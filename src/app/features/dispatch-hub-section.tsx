"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";


export const DispatchHubSection = () => {
  const [active, setActive] = useState<string>("dispatch");
  return (
    <section className="py-14 px-5 lg:px-16">
      <div className="float-right lg:p-5 lg:m-5">
        <img alt="headphone" width={50} height={50} src="/images/headphone.png" />
      </div>
      <div className="pt-5">
        <h1 className="capitalize text-center text-2xl lg:text-3xl font-bold leading-[50px]">
          Earn With Dispatch Hub
        </h1>
      </div>
      <div className="flex-col text-center mt-5">
        <Button size="sm" onClick={(() => setActive("dispatch"))} className={active == "dispatch" ? "mx-2" : "mx-2 text-black bg-white border-2"} >Courier</Button>
        <Button size="sm" onClick={(() => setActive("vehicle"))} className={active == "vehicle" ? "mx-2" : "mx-2 text-black bg-white border-2"} >Vehicle Owner</Button>
      </div>

      <div className="grid grid-col-1 lg:grid-cols-2 gap-5 py-14">
        <div className="py-5">
          {active == "dispatch"? 
          <div>
          <h1 className="text-center md:text-left text-black text-3xl lg:text-4xl font-bold">
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
          :
          <div>
          <h1 className="text-center md:text-left text-black text-4xl font-bold">Own a vehicle?</h1>
          <div className="py-4 gap-3 px-2">
          <p className='shrink-0 self-stretch text-black text-xl font-semi-bold'>Become a partner with us by registering your vehicle with us<br /> today</p>
          <Button size="sm" className="my-5 text-black bg-black/5" >Dispatch</Button>
          </div>
          </div>
          }
         

        </div>
        <div className="h-[300px] md:h-[386px] rounded-3xl overflow-hidden">
          <img
            src={active =="dispatch" ? "/images/3adcbed1de65504be63ae379b4200276.png" : "/images/truck.png"}
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
