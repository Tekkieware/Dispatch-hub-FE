import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "@/components/icons";
import Link from "next/link";

export const SocialsCard = () => {
  return (
    <ul className="flex gap-5 items-center">
      {socials.map(({ Icon, href }, index) => (
        <li key={index} className="shrink-0">
          <Link href={href} target="_blank" rel="noreferrer">
            <Icon className="h-12 w-12" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

const socials = [
  {
    Icon: FacebookIcon,
    href: "https://web.facebook.com/dispatchhub01",
  },
  {
    Icon: TwitterIcon,
    href: "https://twitter.com/Dispatch_Hub01",
  },
  {
    Icon: InstagramIcon,
    href: "https://www.instagram.com/dispatchhub01/",
  },
  {
    Icon: LinkedInIcon,
    href: "https://www.linkedin.com/company/dispatchhub/",
  },
];
