import React, { Fragment } from "react";
import { Footer, Navbar } from "../features";
import { CTASection, HeroSection } from "./features";
import { Accordion, AccordionItem } from "@/components/accordion";
import { AddIcon } from "@/components/icons";

export default function Support() {
  return (
    <Fragment>
      <Navbar />
      <HeroSection />

      <div className="py-14 flex flex-col justify-center items-center">
        <p className="text-[#0F0E0E] text-center text-[30px] md:text-[40px] font-extrabold leading-[35px] md:leading-[45px]">
          How can I earn money with Dispatch Hub?
        </p>

        <div className="w-[90%] lg:w-[80%] mt-5">
          <Accordion>
            {items.map(({ description, title }, index) => (
              <AccordionItem
                key={index}
                className="my-8"
                content={
                  <div className="py-5 px-4">
                    <p className="">{description}</p>
                  </div>
                }
                trigger={
                  <div className="flex justify-between items-center shadow-[0px_4px_12px_0px_rgba(0,0,0,0.10)] px-3 py-3.5 rounded-lg bg-gray-light cursor-pointer">
                    <p className="text-black text-md md:text-xl not-italic font-semibold">
                      {title}
                    </p>

                    <AddIcon className="h-10 md:h-6 w-10 md:w-6" />
                  </div>
                }
              />
            ))}
          </Accordion>
        </div>
      </div>

      <CTASection />

      <Footer />
    </Fragment>
  );
}

const items = [
  {
    title:
      "What are the requirements to work as a driver or delivery partner for Dispatch Hub?",
    description:
      "surface smoke layers camp recognize available flow scene someone color printed threw club upper husband cloud night gently never monkey hit science ride common",
  },
  {
    title:
      "Can I choose my own working hours as a Dispatch Hub driver or delivery partner?",
    description:
      "river newspaper crack burn massage minerals ranch walk stems tribe kept plane range death slow property darkness south loss open crew with pair husband",
  },
  {
    title: "How do I receive payments for my services with Dispatch Hub?",
    description:
      "forest would bread various wing shut pond this draw wife old library source collect especially material instance nearest police to period art thirty tape",
  },
  {
    title:
      "What kind of support does Dispatch Hub offer to its drivers and delivery partners?",
    description:
      "moment bad someone service badly neighborhood principal suggest with queen indicate believed divide before control route park chemical herself statement chamber arm shadow leaving",
  },
  {
    title:
      "Is there an age requirement to become a driver or delivery partner for Dispatch Hub?",
    description:
      "flies firm plates guess death merely silver badly earlier according beauty scared member coast jungle cook either mine jet ought push electric father sink",
  },
  {
    title:
      "Are there any vehicle requirements for drivers working with Dispatch Hub?",
    description:
      "center brass laugh until story tone pick scene heat native burst give camera bar son rule rush discuss up farmer swung half passage meet",
  },
];
