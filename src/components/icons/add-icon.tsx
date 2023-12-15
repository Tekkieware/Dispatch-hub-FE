import { IconType } from "./type";

export const AddIcon = ({
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
    <g clipPath="url(#clip0_519_7625)">
      <path
        d="M59.375 41.125H40.625V59.875H34.375V41.125H15.625V34.875H34.375V16.125H40.625V34.875H59.375V41.125Z"
        fill="black"
      />
    </g>
    <defs>
      <clipPath id="clip0_519_7625">
        <rect
          width="75"
          height="75"
          fill="white"
          transform="translate(0 0.5)"
        />
      </clipPath>
    </defs>
  </svg>
);
