import { IconType } from "./type";

export const MenuIcon = ({
  size = 25,
  strokeWidth = 1,
  color = "currentColor",
  ...props
}: IconType) => (
  <svg
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 75 76"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_512_2073)">
      <path
        d="M9.375 56.75H65.625V50.5H9.375V56.75ZM9.375 41.125H65.625V34.875H9.375V41.125ZM9.375 19.25V25.5H65.625V19.25H9.375Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_512_2073">
        <rect y="0.5" width="75" height="75" rx="30" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
