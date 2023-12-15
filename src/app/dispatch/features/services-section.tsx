import React from 'react'
import Image from 'next/image'


const ServicesSection = () => {
  return (
    <div className='lg:m-14'>
    
      <div>
        <h1 className="capitalize text-center text-3xl font-bold leading-[50px]">
        Services
        </h1>
        </div>
          <div className="py-14 px-5 lg:px-16 grid grid-cols-2 gap-14 p-5 m-5 place-content-center">

              <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <Image className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/images/5d76dcaf03d57ea2258e77611f860fd2.png" alt="delivery" height={100} width={100} />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                      <h5 className="capitalize mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">local  delivery</h5>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                          Need to send a package across town? our local delivery service ensures swift and secure transportation within your city or town. Whether it’s a last minute document, a special gift, or everyday essentials, we’ve got you covered.</p>
                  </div>
              </div>
              <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <Image className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/images/b695af258cb33ef5d4a4dbdafc25f37b.png" alt="delivery" height={100} width={100} />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                      <h5 className="capitalize mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">scheduled deliveries</h5>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Plan your deliveries ahead of time with our scheduled delivery options. set delivery dates and times that work best for you, making it convenient for your recipients to recipents their packages.</p>
                  </div>
              </div>
              <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <Image className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/images/63b19ed0019f5d4f861d556e6ae7547c.jpeg" alt="delivery" height={100} width={100} />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                      <h5 className="capitalize mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">bulk and business deliveries</h5>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Streamline your business operations with our bulk and business delivery solutions. whether you’re restocking inventory or distributon products to retailers, we offer scalable services to meet your commercial needs</p>
                  </div>
              </div>
              <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <Image className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/images/dca3f4c36b2fab0adbc3a26abf8bb5f1.png" alt="delivery" height={100} width={100} />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                      <h5 className="capitalize mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">same-day delivery</h5>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Need to send a package across town? our local delivery service ensures swift and secure transportation within your city or town. Whether it’s a last minute document, a special gift, or everyday essentials, we’ve got you covered.</p>
                  </div>
              </div>
          </div>
       

    </div>
  )
}

export default ServicesSection