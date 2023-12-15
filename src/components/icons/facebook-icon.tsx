import { IconType } from "./type";

export const FacebookIcon = ({
  size = 25,
  strokeWidth = 1,
  color = "currentColor",
  ...props
}: IconType) => (
  <svg
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 50 50"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_519_7650)">
      <rect width="50" height="50" rx="25" fill="#F3F3F3" />
      <path
        d="M32.7381 24.1881C32.7381 19.4448 28.8981 15.5952 24.1666 15.5952C19.4352 15.5952 15.5952 19.4448 15.5952 24.1881C15.5952 28.3471 18.5438 31.81 22.4524 32.6092V26.766H20.7381V24.1881H22.4524V22.0399C22.4524 20.3815 23.7981 19.0324 25.4524 19.0324H27.5952V21.6103H25.8809C25.4095 21.6103 25.0238 21.9969 25.0238 22.4695V24.1881H27.5952V26.766H25.0238V32.7381C29.3524 32.3084 32.7381 28.6478 32.7381 24.1881Z"
        fill="black"
      />
    </g>
    <defs>
      <clipPath id="clip0_519_7650">
        <rect width="50" height="50" rx="25" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
