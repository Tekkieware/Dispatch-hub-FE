import { ArrowDownIcon, CloseIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";

type Props = {
  onClose: () => void;
};

export const LocationCard = ({ onClose }: Props) => {
  return (
    <div className="mt-[70px] rounded-[20px] rounded-tr-none bg-white mr-5 lg:mr-96 md:h-[300px] float-right p-5 flex flex-col relative">
      <div className="">
      <button onClick={onClose} className="absolute top-4 right-3">
        <CloseIcon className="h-8 w-8" />

      </button>
        <p className="shrink-0 self-stretch text-black text-base font-bold">
          Select your state
        </p>

        <div className="border-[1.5px] border-gray-400 rounded-full p-1.5 my-5 flex items-center">
          <input
            type="text"
            className="border-0 outline-none bg-transparent px-2 w-full"
            placeholder="State"
          />
          <ArrowDownIcon className="w-3 h-3 mr-2 text-gray-400" />
        </div>
      </div>
      <div className="">
        <p className="shrink-0 self-stretch text-black text-base font-bold">
          Select your city
        </p>

        <div className="border-[1.5px] border-gray-400 rounded-full p-1.5 my-5 flex items-center">
          <input
            type="text"
            className="border-0 outline-none bg-transparent px-2 w-full"
            placeholder="City"
          />
          <ArrowDownIcon className="w-3 h-3 mr-2 text-gray-400" />
        </div>
      </div>

      <Button className="mx-auto mt-2">Submit changes</Button>
    </div>
  );
};
