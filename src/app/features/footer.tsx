import { CIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SocialsCard } from "./socials-card";
import { FooterLinks } from "./footer-links";

export const Footer = () => {
  return (
    <div className="px-5 lg:px-28 py-10">
      <FooterLinks />

      <div className="flex flex-col lg:flex-row gap-5 items-center justify-between">
        <SocialsCard />

        <div className="flex items-center gap-5">
          <Button
            size="sm"
            className="bg-gray-light hover:bg-gray-light/90 text-black"
          >
            Get the App
          </Button>
          <Button
            size="sm"
            className="bg-gray-light hover:bg-gray-light/90 text-black"
          >
            Track
          </Button>
        </div>
      </div>

      <hr className="h-[1.5px] border-0 w-full bg-gray-light my-5 lg:my-2" />

      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="flex items-center">
          <CIcon className="h-3 w-3 mr-1" />
          <p className="text-black text-sm font-light">2023 Dispatch Hub</p>
        </div>

        <ul className="flex items-center gap-2">
          <li>
            <Link href="#" className="text-black text-sm font-light">
              Terms & Conditions
            </Link>
          </li>
          <li>
            <Link href="#" className="text-black text-sm font-light">
              Privacy
            </Link>
          </li>
          <li>
            <Link href="#" className="text-black text-sm font-light">
              Cookies
            </Link>
          </li>
          <li>
            <Link href="#" className="text-black text-sm font-light">
              Security
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
