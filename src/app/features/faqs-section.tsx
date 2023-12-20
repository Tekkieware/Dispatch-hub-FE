"use client"
import {useState} from 'react'
import { Accordion, AccordionItem } from "@/components/accordion";
import { AddIcon, CloseIcon, SearchIcon} from "@/components/icons";

type Props = {
  items: { title: string; description: string }[];
};
export const FaqsSection = ({ items }: Props) => {

  const [active, setActive] = useState<number>()

  return (
    <div className="py-14 flex flex-col justify-center items-center">
      <p className="text-[#0F0E0E] text-center text-[40px] font-extrabold leading-[45px]">
        FAQs
      </p>

      <div className="w-[90%] lg:w-[80%] mt-5">
        {items.length > 0
        ?
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
                <div onClick={(() =>active == index ? setActive(-1) : setActive(index))} className="flex justify-between items-center shadow-[0 px_4px_12px_0px_rgba(0,0,0,0.10)] px-3 py-3.5 rounded-lg bg-gray-light cursor-pointer">
                  <p className="text-black text-md md:text-xl not-italic font-semibold">
                    {title}
                  </p>

                  {
                    active == index ?
                    <CloseIcon className="h-10 md:h-6 w-10 md:w-6" />
                    :
                  <AddIcon className="h-10 md:h-6 w-10 md:w-6" />
                }
                </div>
              }
            />
          ))}
        </Accordion>
        :
        <div className="text-center shadow-[0px_4px_12px_0px_rgba(0,0,0,0.10)] px-3 py-3.5 rounded-lg bg-gray-light cursor-pointer">
        <p className="text-[red] text-md md:text-xl not-italic font-semibold">
          Sorry, your search term does not match any questions, use the contact form below.
          </p>
          </div>
            }
      </div>
    </div>
  );
};
