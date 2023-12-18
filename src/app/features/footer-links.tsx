import Link from "next/link";
import Image from "next/image";

type Props = {};
export const FooterLinks = (props: Props) => {
  return (
    <div className="pb-10 grid md:px-5 md:grid-cols-2 lg:grid-cols-4 gap-10">
      <Link
        href="/"
        className="flex justify-center items-center"
      >
        <img 
          src={"/images/logo.png"} 
          width={100} 
          height={50}
          alt="Logo" />
      </Link>

      {navigations.map(({ items, name }, index) => (
        <div key={index} className="text-center md:text-left">
          <p className="text-black text-xl font-bold">{name}</p>

          <ul className="space-y-2 mt-4">
            {items.map((item, index) => (
              <li key={index} className="">
                <Link
                  href={item.href}
                  className="self-stretch text-black text-lg font-light"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

const navigations = [
  {
    name: "Dispatch Hub",
    items: [
      {
        name: "Download",
        href: "#",
      },
      {
        name: "States",
        href: "#",
      },
      {
        name: "Cities",
        href: "#",
      },
    ],
  },
  {
    name: "Partner with us",
    items: [
      {
        name: "Courier",
        href: "#",
      },
      {
        name: "Vehicle owner",
        href: "#",
      },
    ],
  },
  {
    name: "Company",
    items: [
      {
        name: "About Dispatch Hub",
        href: "#",
      },
      {
        name: "Blog",
        href: "#",
      },
    ],
  },
];
