import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button";

const DispatchHubSection = () => {
  return (
    <div className='lg:m-14'>
         <div className="float-right p-5 m-5">
        <Image alt="headphone" width={50} height={50} src="/images/headphone.png" />
      </div>
      <div className="pt-5">
        <h1 className="capitalize text-center text-3xl font-bold leading-[50px]">
        Earn With Dispatch Hub
        </h1>
        </div>
        <div className="flex-col text-center mt-5">
        <Button size="sm" className="mx-2 text-black bg-white border-2 border-black" >Dispatch</Button>
        <Button size="sm" className="mx-2" >Vehicle owner</Button>
        </div>
        <div className="py-14 px-5 lg:px-16 grid grid-cols-2">
          <div>
            <h1 className="text-2xl py-5 font-bold capitalize">Own a vehicle?</h1>
            <p className='text-2xl'>Become a partner with us by<br /> registering your vehicle with us<br /> today</p>
            <Button size="sm" className="my-5 text-black bg-black/5" >Dispatch</Button>
          </div>
          <div className="relative">
          <Image className="object-contain" alt="headphone" width={800} height={800} src="/images/truck.png" />
          </div>
        </div>

    </div>
  )
}

export default DispatchHubSection