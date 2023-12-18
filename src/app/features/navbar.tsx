"use client";
import { ArrowDownIcon, MenuIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Fragment, useState } from "react";
import { MenuCard } from "./menu-card";
import { LocationCard } from "./location-card";
import { DownloadSmallCard } from "./download-small-card";
import Image from "next/image";

export const Navbar = () => {
  const [active, setActive] = useState<"location" | "menu" | "download" | null>(
    null
  );

  const onClose = () => setActive(null);
  return (
    <Fragment>
      <div className="flex items-center justify-between px-5 lg:px-16">
        <Link
          href="/"
          className="p-4"
        >
          <img 
          src={"/images/logo.png"} 
          width={70} 
          height={50}
          alt="Logo" />
        </Link>

        <div className="flex items-center gap-10">
          <div
            onClick={() => setActive("location")}
            className="hidden lg:flex items-center gap-2 cursor-pointer"
          >
            <p className="text-white text-xl  font-medium leading-8">
              Nigeria (NG)
            </p>
            <ArrowDownIcon className="w-4 h-4 text-white" />
          </div>

          <Link
            href="/support"
            className="hidden lg:block text-white text-xl  font-medium leading-8 cursor-pointer"
          >
            Support
          </Link>

          <Button
            onClick={() => setActive("download")}
            size="sm"
            className="hidden lg:flex"
          >
            Sign Up
          </Button>

          <button
            type="button"
            onClick={() => setActive("menu")}
            className="w-[35px] h-[35px] lg:hidden flex items-center justify-center"
          >
            <MenuIcon className="h-12  w-12 text-white" />
          </button>
        </div>
      </div>

      {active !== null ? (
        <div
          onClick={onClose}
          className="fixed top-0 left-0 h-full w-full bg-black/60"
        >
          <div onClick={(e) => e.stopPropagation()} className="">
            {active === "download" ? <DownloadSmallCard onClose={onClose} /> : null}
            {active === "location" ? <LocationCard onClose={onClose} /> : null}
            {active === "menu" ? <MenuCard onClose={onClose} /> : null}
          </div>
        </div>
      ) : null}
    </Fragment>
  );
};
