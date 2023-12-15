import { IconType } from "./type";

export const ArrowDownIcon = ({
  size = 25,
  strokeWidth = 1,
  color = "currentColor",
  ...props
}: IconType) => (
  <svg
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 15 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M0 0.5L7.5 15.5L15 0.5H0Z" fill="currentColor" />
  </svg>
);