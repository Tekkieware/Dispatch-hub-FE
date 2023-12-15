import { ArrowDownIcon, CloseIcon } from "@/components/icons";
import { SocialsCard } from "./socials-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { LocationCard } from "./location-card";
import { DownloadSmallCard } from "./download-small-card";

type Props = {
  onClose: () => void;
};

export const MenuCard = ({ onClose }: Props) => {

  const [menuActive, setMenuActive] = useState<"location" | "menu" | "download" | null>(
    null
  );

  const onMenuClose = () => setMenuActive(null);
  return (
    <div className="w-[80%] md:w-[60%] max-h-[calc(100vh-54px)] overflow-y-scroll rounded-[20px] flex flex-col rounded-tr-none bg-white float-right mr-5 lg:mr-16 mt-[70px] px-3 py-2 pl-5 pb-5">
      <div onClick={onClose} className="ml-auto cursor-pointer mb-5">
        <CloseIcon className="h-10 w-10" />
      </div>
      
      <div className="flex flex-col text-black items-center gap-4 pb-4">
          <div
            onClick={() => setMenuActive("location")}
            className="flex items-center gap-2 cursor-pointer"
          >
            <p className="text-xl  font-medium leading-8">
              Nigeria (NG)
            </p>
            <ArrowDownIcon className="w-4 h-4" />
          </div>

          <Link
            href="/support"
            className="block text-xl  font-medium leading-8 cursor-pointer"
          >
            Support
          </Link>

          <Button
            onClick={() => setMenuActive("download")}
            size="sm"
            className="flex"
          >
            Sign Up
          </Button>
        </div>

        {menuActive !== null ? (
        <div
          onClick={onMenuClose}
          className="fixed top-0 left-0 h-full w-full bg-black/60"
        >
          <div onClick={(e) => e.stopPropagation()} className="">
            {menuActive === "download" ? <DownloadSmallCard onClose={onMenuClose} /> : null}
            {menuActive === "location" ? <LocationCard onClose={onMenuClose} /> : null}
          </div>
        </div>
      ) : null}

      <div className="flex flex-col lg:flex-row items-center gap-5 justify-between pr-5">
        <div className="flex items-center gap-8">
          <Button className="">Get the App</Button>
          <Button variant="ghost">Track</Button>
        </div>
        <SocialsCard />
      </div>
    </div>
  );
};
