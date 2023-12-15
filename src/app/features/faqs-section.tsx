import { Accordion, AccordionItem } from "@/components/accordion";
import { AddIcon } from "@/components/icons";

type Props = {
  items: { title: string; description: string }[];
};
export const FaqsSection = ({ items }: Props) => {
  return (
    <div className="py-14 flex flex-col justify-center items-center">
      <p className="text-[#0F0E0E] text-center text-[40px] font-extrabold leading-[45px]">
        FAQs
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
  );
};
