import { IconType } from "./type";

export const InstagramIcon = ({
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
    <rect width="50" height="50" rx="25" fill="#F3F3F3" />
    <path
      d="M19.9167 12.25C16.2353 12.25 13.25 15.2353 13.25 18.9167V29.5833C13.25 33.2647 16.2353 36.25 19.9167 36.25H30.5833C34.2647 36.25 37.25 33.2647 37.25 29.5833V18.9167C37.25 15.2353 34.2647 12.25 30.5833 12.25H19.9167ZM33.25 14.9167C33.986 14.9167 34.5833 15.514 34.5833 16.25C34.5833 16.986 33.986 17.5833 33.25 17.5833C32.514 17.5833 31.9167 16.986 31.9167 16.25C31.9167 15.514 32.514 14.9167 33.25 14.9167ZM25.25 17.5833C28.9313 17.5833 31.9167 20.5687 31.9167 24.25C31.9167 27.9313 28.9313 30.9167 25.25 30.9167C21.5687 30.9167 18.5833 27.9313 18.5833 24.25C18.5833 20.5687 21.5687 17.5833 25.25 17.5833ZM25.25 20.25C24.1891 20.25 23.1717 20.6714 22.4216 21.4216C21.6714 22.1717 21.25 23.1891 21.25 24.25C21.25 25.3109 21.6714 26.3283 22.4216 27.0784C23.1717 27.8286 24.1891 28.25 25.25 28.25C26.3109 28.25 27.3283 27.8286 28.0784 27.0784C28.8286 26.3283 29.25 25.3109 29.25 24.25C29.25 23.1891 28.8286 22.1717 28.0784 21.4216C27.3283 20.6714 26.3109 20.25 25.25 20.25Z"
      fill="black"
    />
  </svg>
);
