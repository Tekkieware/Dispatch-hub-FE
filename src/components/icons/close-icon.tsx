import { IconType } from "./type";

export const CloseIcon = ({
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
    <g clipPath="url(#clip0_519_8737)">
      <path
        d="M25.0001 4.1665C13.4792 4.1665 4.16675 13.479 4.16675 24.9998C4.16675 36.5207 13.4792 45.8332 25.0001 45.8332C36.5209 45.8332 45.8334 36.5207 45.8334 24.9998C45.8334 13.479 36.5209 4.1665 25.0001 4.1665ZM35.4167 32.479L32.4792 35.4165L25.0001 27.9373L17.5209 35.4165L14.5834 32.479L22.0626 24.9998L14.5834 17.5207L17.5209 14.5832L25.0001 22.0623L32.4792 14.5832L35.4167 17.5207L27.9376 24.9998L35.4167 32.479Z"
        fill="black"
      />
    </g>
    <defs>
      <clipPath id="clip0_519_8737">
        <rect width="50" height="50" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
