import { cn } from "@/lib/utils";
import Image from "next/image";

export const ServicesSection = () => {
  return (
    <div className="py-14 px-5 lg:px-16">
      <p className="text-[#0F0E0E] text-center text-[30px] lg:text-[40px] font-extrabold leading-[45px]">
        Our Services
      </p>

      <div className="flex flex-wrap items-center justify-center [&>div]:w-full lg:[&>div]:w-[calc(50%-40px)] w-full mt-10">
        {items.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

type CardProps = {
  image: string;
  title: string;
  description: string;
  className?: string;
};

const Card = (props: CardProps) => {
  const { description, image, title, className } = props;
  return (
    <div
      className={cn(
        "flex flex-col lg:flex-row items-center shrink-0 m-5 gap-5 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.25)] p-5 lg:p-2.5 rounded-[20px] min-h-[230px]",
        className
      )}
    >
      <img src={image} alt="" width={150} height={191} className="" />
      <div className="">
        <p className="text-black text-xl font-josefin-sans font-bold">{title}</p>
        <p className=" self-stretch text-black text-lg font-light">
          {description}
        </p>
      </div>
    </div>
  );
};

const items = [
  {
    image: "/images/5d76dcaf03d57ea2258e77611f860fd2.png",
    title: "Local Delivery",
    description:
      "Need to send a package across town? Our local delivery service ensures swift and secure transportation within your city or town. Whether it's a last-minute document, a special gift, or everyday essentials, we've got you covered.",
  },
  {
    image: "/images/b695af258cb33ef5d4a4dbdafc25f37b.png",
    title: "Scheduled Deliveries",
    description:
      "Plan your deliveries ahead of time with our scheduled delivery options. Set delivery dates and times that work best for you, making it convenient for your recipients to receive their packages.",
  },
  {
    image: "/images/63b19ed0019f5d4f861d556e6ae7547c.jpeg",
    title: "Bulk and Business Deliveries",
    description:
      "Streamline your business operations with our bulk and business delivery solutions. Whether you're restocking inventory or distributing products to retailers, we offer scalable services to meet your commercial needs.",
  },
  {
    image: "/images/dca3f4c36b2fab0adbc3a26abf8bb5f1.png",
    title: "Same-Day Delivery",
    description:
      "When time is of the essence, rely on our same-day delivery service. We prioritize speed and precision to meet urgent delivery requirements, ensuring your parcels reach their destination within hours.",
  },
  {
    image: "/images/e3955c0f91fbe1fe9d1756b7875096d0.png",
    title: "Advanced Tracking and Reporting",
    description:
      "Streamline your business operations with our bulk and business delivery solutions. Whether you're restocking inventory or distributing products to retailers, we offer scalable services to meet your commercial needs.",
  },
];
