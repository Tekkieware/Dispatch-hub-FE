"use client"
import React, { Fragment, useState } from "react";
import {
  AboutUsSection,
  DownloadSection,
  FaqsSection,
  Footer,
  Navbar,
} from "../features";
import { HeroSection } from "./features";
import ContactSection from "./features/contact-section";
import { HeroWrapper } from "@/components/hero-wrapper";

export default function Support() {
  interface Question{
    title : string,
    description: string
  }
 
 const [items, setItems] = useState<Question[]>(list)
 
 const filter = (input: string) => {
setItems(list.filter((question)=> question.title.toLocaleLowerCase().includes(input.toLocaleLowerCase())))
 }
  return (
    <Fragment>
      <Navbar />
      <HeroWrapper className="bg-support-hero bg-center">
      <div className="w-[80%] my-auto flex flex-col items-center">
        <h1 className=" text-white text-center text-4xl font-bold leading-[50px]">
          How can we help you?
        </h1>

        <div className="bg-white rounded-full p-1.5 my-5 lg:w-[50%]">
          <input onChange={((e) => filter(e.target.value))} type="text" className="border-0 outline-none bg-transparent px-2 w-full" placeholder="Search here" />
        </div>
      </div>
    </HeroWrapper>

      <FaqsSection items={items} />


      <ContactSection />
      <DownloadSection />
      <Footer />
    </Fragment>
  );
}

const list = [
  {
    title: "How do I book or schedule a delivery through Dispatch Hub?",
    description:
      "expect possibly forward wild gulf born farmer roof none outside cold transportation quite stems city cookies cattle courage cap gravity brother south somebody character",
  },
  {
    title: "What payment methods are accepted for Dispatch Hub services?",
    description:
      "pitch arrange struck captured she damage concerned wood division fresh account rich call chose final good forty alike find am full transportation tip window",
  },
  {
    title: "What are Dispatch Hub's cancellation and refund policies?",
    description:
      "lot source does noun flat duty football cold city hello travel she distant indicate wide pie tube roll pride expect we verb most needle",
  },
  {
    title: "Is Dispatch Hub safe for riders and customers?",
    description:
      "sheet hung wheel vertical special nearly myself difficulty helpful cent noon stuck fewer on key studied fight thick process warn husband wash dropped any",
  },
  {
    title: "How does Dispatch Hub handle user data and privacy?",
    description:
      "direct spent wave turn gold attack plain military pretty park gas aloud page condition raw acres liquid himself pupil central finest enjoy bat meat",
  },
  {
    title: "How do I contact Dispatch Hub's customer support?",
    description:
      "excitement within late lungs pass protection quick method globe activity lot design choose copy possibly proper nest against good exist wood balloon ask angle",
  },
  {
    title: "How can I become a driver or delivery partner for Dispatch Hub?",
    description:
      "newspaper tribe center mathematics table needed stared field appropriate never stream his label total positive failed exactly whale through suggest nothing especially hello already",
  },
  {
    title: "What if I have an issue with a driver or delivery experience?",
    description:
      "class same throughout prove then period doing anything frequently flame news by fought compass door baseball next frighten lady our highest gasoline dress ago",
  },
  {
    title:
      "Are there any discounts or promotions available for Dispatch Hub services?",
    description:
      "highest customs relationship sat sharp physical choice glass mistake mark any egg type cotton satellites alike interior west rapidly appropriate farmer company hope plain",
  },
  {
    title: "What are your delivery hours?",
    description:
      "hollow aid wave eat require exercise cost although price stick control gentle play whatever consist smell doctor porch place anyone loose minute hello toward",
  },
  {
    title: "How much does delivery cost?",
    description:
      "ask state tank though zoo primitive liquid joined nobody atom coal necessary shall search whom coming according her dug basis major add table pound",
  },
  {
    title: "Can I track the location of my goods during delivery?",
    description:
      "saddle native short event receive percent although table neck wrapped public leaving come respect chamber begun twice tall design compass coming longer complete taught",
  },
];
