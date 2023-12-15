import { Button } from "@/components/ui/button";
import { CloseIcon } from "@/components/icons";
import Link from "next/link"

type Props = {
  onClose: () => void;
};

export const DownloadSmallCard = ({ onClose }: Props) => {
  return (
    <div className="mt-[70px] rounded-[20px] rounded-tr-none bg-white mr-5 lg:mr-48 h-fit md:w-[400px] float-right p-5 py-10 flex flex-col relative">
      <button onClick={onClose} className="absolute top-2 right-3">
        <CloseIcon className="h-8 w-8" />

      </button>
      <Link
        href="/earn"
        className="border-[1.5px] p-2 pt-4 border-gray-light rounded-lg">
        <p className="text-black text-lg font-bold">Earn with Dispatch Hub</p>
        <p className="w-[350px] text-[#0F0E0E] text-lg font-light">
          Register as a vehicle owner or a courier and enjoy our amazing offers
        </p>
      </Link>
      <Button className="mx-auto mt-5 ">Download App</Button>
    </div>
  );

};
